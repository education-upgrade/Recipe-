import { useEffect, useMemo, useState } from 'react';
import { recipes as baseRecipes } from './recipes.js';
import { extraRecipes } from './extraRecipes.js';
import { getDetailedMethod, getRecipeNutrition } from './recipeDetails.js';

const recipes = [...baseRecipes, ...extraRecipes];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const defaultServings = 4;
const servingOptions = [1, 2, 3, 4, 5, 6, 7, 8];
const emptyPlanner = Object.fromEntries(days.map((day) => [day, { recipeId: '', servings: defaultServings }]));
const categoryOrder = ['Meat & fish', 'Fruit & veg', 'Dairy', 'Carbs', 'Tins, jars & packets', 'Frozen', 'Herbs, spices & sauces', 'Other'];
const proteinOptions = ['Any', ...Array.from(new Set(recipes.map((recipe) => recipe.protein))).sort()];
const cuisineOptions = ['Any', ...Array.from(new Set(recipes.map((recipe) => recipe.cuisine))).sort()];
const tagOptions = [
  ['Any', 'Any'],
  ['quick', 'Quick'],
  ['high-protein', 'High protein'],
  ['lighter', 'Lighter'],
  ['comfort-food', 'Comfort food'],
  ['fakeaway', 'Fakeaway'],
  ['one-pan', 'One pan'],
  ['batch-cook', 'Batch cook'],
  ['slow-cooker', 'Slow cooker'],
  ['vegetarian', 'Vegetarian'],
  ['family-friendly', 'Family friendly'],
  ['weekend-cooking', 'Weekend cooking'],
  ['summer', 'Summer'],
  ['winter', 'Winter'],
  ['pizza-night', 'Pizza night'],
  ['sharing', 'Sharing']
];

function normalisePlanner(rawPlanner) {
  return Object.fromEntries(days.map((day) => {
    const savedDay = rawPlanner?.[day];

    if (typeof savedDay === 'string') {
      return [day, { recipeId: savedDay, servings: defaultServings }];
    }

    if (savedDay && typeof savedDay === 'object') {
      return [day, {
        recipeId: savedDay.recipeId || '',
        servings: Number(savedDay.servings) || defaultServings,
      }];
    }

    return [day, { recipeId: '', servings: defaultServings }];
  }));
}

function readPlanner() {
  try {
    const saved = localStorage.getItem('familyDinnerPlanner');
    return saved ? normalisePlanner(JSON.parse(saved)) : emptyPlanner;
  } catch {
    return emptyPlanner;
  }
}

function readCheckedShopping() {
  try {
    const saved = localStorage.getItem('familyDinnerShoppingChecked');
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function normaliseIngredient(ingredient) {
  return `${ingredient.item}|${ingredient.unit}`.trim().toLowerCase();
}

function formatQuantity(quantity) {
  const rounded = Math.round(quantity * 100) / 100;
  if (rounded === 0.25) return '1/4';
  if (rounded === 0.5) return '1/2';
  if (rounded === 0.75) return '3/4';
  if (Number.isInteger(rounded)) return String(rounded);
  return String(rounded);
}

function formatIngredient(ingredient) {
  const amount = ingredient.quantity ? `${formatQuantity(ingredient.quantity)}${ingredient.unit ? ` ${ingredient.unit}` : ''}` : '';
  return amount ? `${ingredient.item} — ${amount}` : ingredient.item;
}

function formatTag(tag) {
  return tag.split('-').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
}

function scaleIngredient(ingredient, recipeServings, targetServings) {
  const scale = targetServings / recipeServings;
  return {
    ...ingredient,
    quantity: ingredient.quantity ? ingredient.quantity * scale : ingredient.quantity,
  };
}

function combineIngredients(plannedMeals) {
  const combined = new Map();

  plannedMeals.flatMap((meal) => meal.recipe.ingredients.map((ingredient) => scaleIngredient(ingredient, meal.recipe.servings, meal.servings))).forEach((ingredient) => {
    const key = normaliseIngredient(ingredient);
    const existing = combined.get(key);

    if (existing) {
      existing.quantity += ingredient.quantity || 0;
    } else {
      combined.set(key, { ...ingredient, category: ingredient.category || 'Other' });
    }
  });

  return [...combined.values()].sort((a, b) => a.item.localeCompare(b.item));
}

function groupIngredients(ingredients) {
  return categoryOrder.map((category) => ({
    category,
    items: ingredients.filter((ingredient) => ingredient.category === category),
  })).filter((group) => group.items.length > 0);
}

function getPlannedMeals(planner) {
  return days.map((day) => {
    const entry = planner[day];
    const recipe = recipes.find((item) => item.id === entry.recipeId);
    return recipe ? { day, recipe, servings: entry.servings || recipe.servings } : null;
  }).filter(Boolean);
}

function recipeMatchesAutoPlan(recipe, options) {
  const tagMatch = options.mood === 'Any' || (recipe.tags || []).includes(options.mood);
  const timeMatch = options.maxTime === 'Any' || recipe.timeMinutes <= Number(options.maxTime);
  const calorieMatch = options.calories === 'Any' ||
    (options.calories === 'Under 500' && recipe.calories < 500) ||
    (options.calories === '500-650' && recipe.calories >= 500 && recipe.calories <= 650) ||
    (options.calories === '650+' && recipe.calories > 650);
  return tagMatch && timeMatch && calorieMatch;
}

function buildAutoPlan(options) {
  const dinnerCount = Number(options.dinnerCount);
  const chosen = [];
  const usedProteins = new Set();
  const usedCuisines = new Set();

  let candidates = recipes.filter((recipe) => recipeMatchesAutoPlan(recipe, options));

  if (options.includeVegetarian === 'Yes' && !candidates.some((recipe) => recipe.protein === 'Vegetarian')) {
    candidates = [...candidates, ...recipes.filter((recipe) => recipe.protein === 'Vegetarian')];
  }

  const vegetarianPick = options.includeVegetarian === 'Yes'
    ? candidates.find((recipe) => recipe.protein === 'Vegetarian')
    : null;

  if (vegetarianPick) chosen.push(vegetarianPick);

  const sorted = [...candidates]
    .filter((recipe) => !chosen.some((item) => item.id === recipe.id))
    .sort((a, b) => {
      const aPenalty = (usedProteins.has(a.protein) ? 1 : 0) + (usedCuisines.has(a.cuisine) ? 1 : 0);
      const bPenalty = (usedProteins.has(b.protein) ? 1 : 0) + (usedCuisines.has(b.cuisine) ? 1 : 0);
      if (aPenalty !== bPenalty) return aPenalty - bPenalty;
      return a.timeMinutes - b.timeMinutes;
    });

  for (const recipe of sorted) {
    if (chosen.length >= dinnerCount) break;
    chosen.push(recipe);
    usedProteins.add(recipe.protein);
    usedCuisines.add(recipe.cuisine);
  }

  if (chosen.length < dinnerCount) {
    for (const recipe of recipes) {
      if (chosen.length >= dinnerCount) break;
      if (!chosen.some((item) => item.id === recipe.id)) chosen.push(recipe);
    }
  }

  return chosen.slice(0, dinnerCount);
}

function RecipeCard({ recipe, onOpen, onAddToPlanner }) {
  const nutrition = getRecipeNutrition(recipe, recipe.servings);

  return (
    <article className="recipe-card">
      <div className="recipe-card__header">
        <h3>{recipe.title}</h3>
        <span>{recipe.timeMinutes >= 120 ? 'Slow' : `${recipe.timeMinutes} mins`}</span>
      </div>
      <p>{recipe.description}</p>
      <div className="tag-row">
        <span>{recipe.protein}</span>
        <span>{recipe.cuisine}</span>
        <span>{recipe.calories} kcal</span>
        <span>{nutrition.proteinPerServing}g protein</span>
        <span>{nutrition.fiveADayPerServing} of 5-a-day</span>
        <span>Serves {recipe.servings}</span>
        <span>{recipe.difficulty}</span>
        {(recipe.tags || []).slice(0, 2).map((tag) => <span key={tag}>{formatTag(tag)}</span>)}
      </div>
      <div className="button-row">
        <button onClick={() => onOpen(recipe)}>Open recipe</button>
        <button className="secondary" onClick={() => onAddToPlanner(recipe)}>Add to planner</button>
      </div>
    </article>
  );
}

function RecipeModal({ recipe, onClose, onAddToPlanner }) {
  const [servings, setServings] = useState(recipe?.servings || defaultServings);

  if (!recipe) return null;

  const scaledIngredients = recipe.ingredients.map((ingredient) => scaleIngredient(ingredient, recipe.servings, servings));
  const detailedMethod = getDetailedMethod(recipe);
  const nutrition = getRecipeNutrition(recipe, servings);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section className="modal" onClick={(event) => event.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>Close</button>
        <p className="eyebrow">{recipe.protein} · {recipe.cuisine} · {recipe.timeMinutes} mins · Base recipe serves {recipe.servings}</p>
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>
        <div className="nutrition-grid">
          <div><strong>{recipe.calories}</strong><span>kcal per serving</span></div>
          <div><strong>{nutrition.proteinPerServing}g</strong><span>protein per serving</span></div>
          <div><strong>{nutrition.fiveADayPerServing}</strong><span>of your 5-a-day</span></div>
          <div><strong>{servings}</strong><span>planned servings</span></div>
        </div>
        {(recipe.tags || []).length > 0 && (
          <div className="tag-row tag-row--modal">
            {recipe.tags.map((tag) => <span key={tag}>{formatTag(tag)}</span>)}
          </div>
        )}
        <div className="modal-actions">
          <label className="serving-control">Show ingredients for
            <select value={servings} onChange={(event) => setServings(Number(event.target.value))}>
              {servingOptions.map((option) => <option key={option} value={option}>{option} serving{option === 1 ? '' : 's'}</option>)}
            </select>
          </label>
          <button onClick={() => onAddToPlanner(recipe)}>Add to weekly planner</button>
        </div>
        <div className="modal-grid">
          <div>
            <h3>Ingredients</h3>
            <ul>
              {scaledIngredients.map((ingredient) => <li key={`${ingredient.item}-${ingredient.unit}`}>{formatIngredient(ingredient)}</li>)}
            </ul>
          </div>
          <div>
            <h3>Detailed method</h3>
            <ol>
              {detailedMethod.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}

function Discover({ onOpen, onAddToPlanner }) {
  const [filters, setFilters] = useState({ time: 'Any', protein: 'Any', cuisine: 'Any', calories: 'Any', tag: 'Any' });

  const matches = useMemo(() => recipes.filter((recipe) => {
    const timeMatch = filters.time === 'Any' ||
      (filters.time === 'Under 20 mins' && recipe.timeMinutes <= 20) ||
      (filters.time === '20-35 mins' && recipe.timeMinutes > 20 && recipe.timeMinutes <= 35) ||
      (filters.time === '35+ mins' && recipe.timeMinutes > 35 && recipe.timeMinutes < 120) ||
      (filters.time === 'Slow cooker / long cook' && recipe.timeMinutes >= 120);

    const proteinMatch = filters.protein === 'Any' || recipe.protein === filters.protein;
    const cuisineMatch = filters.cuisine === 'Any' || recipe.cuisine === filters.cuisine;
    const tagMatch = filters.tag === 'Any' || (recipe.tags || []).includes(filters.tag);
    const calorieMatch = filters.calories === 'Any' ||
      (filters.calories === 'Under 500' && recipe.calories < 500) ||
      (filters.calories === '500-650' && recipe.calories >= 500 && recipe.calories <= 650) ||
      (filters.calories === '650+' && recipe.calories > 650);

    return timeMatch && proteinMatch && cuisineMatch && calorieMatch && tagMatch;
  }), [filters]);

  function clearFilters() {
    setFilters({ time: 'Any', protein: 'Any', cuisine: 'Any', calories: 'Any', tag: 'Any' });
  }

  return (
    <section className="panel">
      <div className="section-heading section-heading--row">
        <div>
          <p className="eyebrow">Decision tree</p>
          <h2>What kind of dinner do you want?</h2>
        </div>
        <button className="secondary" onClick={clearFilters}>Reset filters</button>
      </div>
      <div className="filter-grid">
        <label>Time
          <select value={filters.time} onChange={(event) => setFilters({ ...filters, time: event.target.value })}>
            {['Any', 'Under 20 mins', '20-35 mins', '35+ mins', 'Slow cooker / long cook'].map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>Protein
          <select value={filters.protein} onChange={(event) => setFilters({ ...filters, protein: event.target.value })}>
            {proteinOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>Cuisine
          <select value={filters.cuisine} onChange={(event) => setFilters({ ...filters, cuisine: event.target.value })}>
            {cuisineOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>Calories
          <select value={filters.calories} onChange={(event) => setFilters({ ...filters, calories: event.target.value })}>
            {['Any', 'Under 500', '500-650', '650+'].map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>Meal mood
          <select value={filters.tag} onChange={(event) => setFilters({ ...filters, tag: event.target.value })}>
            {tagOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </label>
      </div>
      <p className="results-count">Showing {matches.length} recipe{matches.length === 1 ? '' : 's'} from {recipes.length} total.</p>
      <div className="recipe-grid">
        {matches.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} onOpen={onOpen} onAddToPlanner={onAddToPlanner} />)}
      </div>
    </section>
  );
}

function Recipes({ onOpen, onAddToPlanner }) {
  const [search, setSearch] = useState('');
  const visibleRecipes = recipes.filter((recipe) => {
    const ingredientText = recipe.ingredients.map((ingredient) => ingredient.item).join(' ');
    const tagText = (recipe.tags || []).join(' ');
    const text = `${recipe.title} ${recipe.description} ${recipe.protein} ${recipe.cuisine} ${ingredientText} ${tagText}`.toLowerCase();
    return text.includes(search.toLowerCase());
  });

  return (
    <section className="panel">
      <div className="section-heading">
        <p className="eyebrow">Recipe library</p>
        <h2>All family dinners</h2>
      </div>
      <input className="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search chicken, pasta, fakeaway, Greek, quick..." />
      <p className="results-count">Showing {visibleRecipes.length} of {recipes.length} recipes.</p>
      <div className="recipe-grid">
        {visibleRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} onOpen={onOpen} onAddToPlanner={onAddToPlanner} />)}
      </div>
    </section>
  );
}

function AutoPlanner({ setPlanner }) {
  const [options, setOptions] = useState({ dinnerCount: '5', mood: 'Any', maxTime: '45', calories: 'Any', includeVegetarian: 'Yes' });

  function generatePlan() {
    const picks = buildAutoPlan(options);
    const nextPlanner = { ...emptyPlanner };
    picks.forEach((recipe, index) => {
      nextPlanner[days[index]] = { recipeId: recipe.id, servings: recipe.servings || defaultServings };
    });
    setPlanner(nextPlanner);
  }

  return (
    <section className="auto-planner">
      <div>
        <p className="eyebrow">Auto meal planner</p>
        <h3>Build me a week</h3>
      </div>
      <div className="filter-grid">
        <label>Dinners
          <select value={options.dinnerCount} onChange={(event) => setOptions({ ...options, dinnerCount: event.target.value })}>
            {[3, 4, 5, 6, 7].map((count) => <option key={count} value={count}>{count}</option>)}
          </select>
        </label>
        <label>Mood
          <select value={options.mood} onChange={(event) => setOptions({ ...options, mood: event.target.value })}>
            {tagOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </label>
        <label>Max time
          <select value={options.maxTime} onChange={(event) => setOptions({ ...options, maxTime: event.target.value })}>
            <option value="Any">Any</option>
            <option value="25">25 mins</option>
            <option value="35">35 mins</option>
            <option value="45">45 mins</option>
            <option value="60">60 mins</option>
          </select>
        </label>
        <label>Calories
          <select value={options.calories} onChange={(event) => setOptions({ ...options, calories: event.target.value })}>
            {['Any', 'Under 500', '500-650', '650+'].map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>Include vegetarian
          <select value={options.includeVegetarian} onChange={(event) => setOptions({ ...options, includeVegetarian: event.target.value })}>
            {['Yes', 'No'].map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
      </div>
      <button onClick={generatePlan}>Auto-plan my week</button>
    </section>
  );
}

function Planner({ planner, setPlanner, onOpen }) {
  function updateRecipe(day, recipeId) {
    const recipe = recipes.find((item) => item.id === recipeId);
    setPlanner({ ...planner, [day]: { recipeId, servings: recipe?.servings || defaultServings } });
  }

  function updateServings(day, servings) {
    setPlanner({ ...planner, [day]: { ...planner[day], servings } });
  }

  function clearPlanner() {
    setPlanner(emptyPlanner);
  }

  return (
    <section className="panel">
      <div className="section-heading section-heading--row">
        <div>
          <p className="eyebrow">Weekly planner</p>
          <h2>Plan the week</h2>
        </div>
        <button className="secondary" onClick={clearPlanner}>Clear week</button>
      </div>
      <AutoPlanner setPlanner={setPlanner} />
      <div className="planner-grid">
        {days.map((day) => {
          const entry = planner[day];
          const selectedRecipe = recipes.find((recipe) => recipe.id === entry.recipeId);
          return (
            <article className="day-card" key={day}>
              <h3>{day}</h3>
              <select value={entry.recipeId} onChange={(event) => updateRecipe(day, event.target.value)}>
                <option value="">Choose a dinner</option>
                {recipes.map((recipe) => <option key={recipe.id} value={recipe.id}>{recipe.title}</option>)}
              </select>
              {selectedRecipe && (
                <>
                  <label className="serving-control serving-control--compact">Servings
                    <select value={entry.servings} onChange={(event) => updateServings(day, Number(event.target.value))}>
                      {servingOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </label>
                  <p>{selectedRecipe.timeMinutes} mins · {selectedRecipe.calories} kcal per serving · planned for {entry.servings}</p>
                  <button className="secondary" onClick={() => onOpen(selectedRecipe)}>Open recipe</button>
                </>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ShoppingList({ planner, checkedShopping, onCheckItem, onResetChecked }) {
  const plannedMeals = getPlannedMeals(planner);
  const ingredients = combineIngredients(plannedMeals);
  const visibleIngredients = ingredients.filter((ingredient) => !checkedShopping[normaliseIngredient(ingredient)]);
  const groupedIngredients = groupIngredients(visibleIngredients);
  const hiddenCount = ingredients.length - visibleIngredients.length;

  return (
    <section className="panel">
      <div className="section-heading section-heading--row">
        <div>
          <p className="eyebrow">Shopping list</p>
          <h2>Generated from your planner</h2>
        </div>
        {hiddenCount > 0 && <button className="secondary" onClick={onResetChecked}>Reset hidden items</button>}
      </div>
      {plannedMeals.length === 0 ? (
        <div className="empty-state">Add dinners to the weekly planner and your shopping list will appear here.</div>
      ) : visibleIngredients.length === 0 ? (
        <div className="empty-state">All shopping items have been ticked off. Use reset hidden items to bring the list back.</div>
      ) : (
        <>
          <p className="results-count">Based on {plannedMeals.length} planned dinner{plannedMeals.length === 1 ? '' : 's'}. Tick an item once bought to remove it from the list.</p>
          <div className="planned-meal-summary">
            {plannedMeals.map((meal) => <span key={meal.day}>{meal.day}: {meal.recipe.title} for {meal.servings}</span>)}
          </div>
          <div className="shopping-groups">
            {groupedIngredients.map((group) => (
              <section className="shopping-group" key={group.category}>
                <h3>{group.category}</h3>
                <ul className="shopping-list shopping-list--interactive">
                  {group.items.map((ingredient) => (
                    <li key={`${ingredient.item}-${ingredient.unit}`}>
                      <button className="shopping-check" onClick={() => onCheckItem(ingredient)} aria-label={`Mark ${ingredient.item} as bought`}>
                        <span className="shopping-checkbox">✓</span>
                        <span>{formatIngredient(ingredient)}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('Discover');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [planner, setPlanner] = useState(readPlanner);
  const [notice, setNotice] = useState('');
  const [checkedShopping, setCheckedShopping] = useState(readCheckedShopping);

  useEffect(() => {
    localStorage.setItem('familyDinnerPlanner', JSON.stringify(planner));
  }, [planner]);

  useEffect(() => {
    localStorage.setItem('familyDinnerShoppingChecked', JSON.stringify(checkedShopping));
  }, [checkedShopping]);

  function addRecipeToPlanner(recipe) {
    const firstEmptyDay = days.find((day) => !planner[day].recipeId);
    const targetDay = firstEmptyDay || days[0];
    setPlanner({ ...planner, [targetDay]: { recipeId: recipe.id, servings: recipe.servings || defaultServings } });
    setNotice(firstEmptyDay ? `${recipe.title} added to ${targetDay}.` : `${recipe.title} replaced Monday's dinner.`);
    setActiveTab('Weekly Planner');
  }

  function checkShoppingItem(ingredient) {
    setCheckedShopping({ ...checkedShopping, [normaliseIngredient(ingredient)]: true });
  }

  function resetCheckedShopping() {
    setCheckedShopping({});
  }

  return (
    <main>
      <header className="hero">
        <p className="eyebrow">Family Dinner Planner</p>
        <h1>Choose dinners, plan your week and build a shopping list.</h1>
        <p>{recipes.length} recipes, adjustable servings, protein estimates, 5-a-day counts, guided methods and shopping lists.</p>
      </header>

      {notice && (
        <div className="notice">
          <span>{notice}</span>
          <button className="secondary" onClick={() => setNotice('')}>Dismiss</button>
        </div>
      )}

      <nav className="tabs" aria-label="Main navigation">
        {['Discover', 'Recipes', 'Weekly Planner', 'Shopping List'].map((tab) => (
          <button key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)}>{tab}</button>
        ))}
      </nav>

      {activeTab === 'Discover' && <Discover onOpen={setSelectedRecipe} onAddToPlanner={addRecipeToPlanner} />}
      {activeTab === 'Recipes' && <Recipes onOpen={setSelectedRecipe} onAddToPlanner={addRecipeToPlanner} />}
      {activeTab === 'Weekly Planner' && <Planner planner={planner} setPlanner={setPlanner} onOpen={setSelectedRecipe} />}
      {activeTab === 'Shopping List' && <ShoppingList planner={planner} checkedShopping={checkedShopping} onCheckItem={checkShoppingItem} onResetChecked={resetCheckedShopping} />}

      <RecipeModal key={selectedRecipe?.id || 'empty'} recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} onAddToPlanner={addRecipeToPlanner} />
    </main>
  );
}
