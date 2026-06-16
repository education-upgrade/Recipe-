import { useEffect, useMemo, useState } from 'react';
import { recipes } from './recipes.js';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const emptyPlanner = Object.fromEntries(days.map((day) => [day, '']));

function readPlanner() {
  try {
    const saved = localStorage.getItem('familyDinnerPlanner');
    return saved ? { ...emptyPlanner, ...JSON.parse(saved) } : emptyPlanner;
  } catch {
    return emptyPlanner;
  }
}

function normaliseIngredient(ingredient) {
  return ingredient.trim().toLowerCase();
}

function RecipeCard({ recipe, onOpen }) {
  return (
    <article className="recipe-card">
      <div className="recipe-card__header">
        <h3>{recipe.title}</h3>
        <span>{recipe.timeMinutes} mins</span>
      </div>
      <p>{recipe.description}</p>
      <div className="tag-row">
        <span>{recipe.protein}</span>
        <span>{recipe.cuisine}</span>
        <span>{recipe.calories} kcal</span>
        <span>{recipe.difficulty}</span>
      </div>
      <button onClick={() => onOpen(recipe)}>Open recipe</button>
    </article>
  );
}

function RecipeModal({ recipe, onClose }) {
  if (!recipe) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section className="modal" onClick={(event) => event.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>Close</button>
        <p className="eyebrow">{recipe.protein} · {recipe.cuisine} · {recipe.timeMinutes} mins</p>
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>
        <div className="modal-grid">
          <div>
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
            </ul>
          </div>
          <div>
            <h3>Method</h3>
            <ol>
              {recipe.method.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}

function Discover({ onOpen }) {
  const [filters, setFilters] = useState({ time: 'Any', protein: 'Any', cuisine: 'Any', calories: 'Any' });

  const matches = useMemo(() => recipes.filter((recipe) => {
    const timeMatch = filters.time === 'Any' ||
      (filters.time === 'Under 20 mins' && recipe.timeMinutes <= 20) ||
      (filters.time === '20-35 mins' && recipe.timeMinutes > 20 && recipe.timeMinutes <= 35) ||
      (filters.time === '35+ mins' && recipe.timeMinutes > 35);

    const proteinMatch = filters.protein === 'Any' || recipe.protein === filters.protein;
    const cuisineMatch = filters.cuisine === 'Any' || recipe.cuisine === filters.cuisine;
    const calorieMatch = filters.calories === 'Any' ||
      (filters.calories === 'Under 500' && recipe.calories < 500) ||
      (filters.calories === '500-650' && recipe.calories >= 500 && recipe.calories <= 650) ||
      (filters.calories === '650+' && recipe.calories > 650);

    return timeMatch && proteinMatch && cuisineMatch && calorieMatch;
  }), [filters]);

  return (
    <section className="panel">
      <div className="section-heading">
        <p className="eyebrow">Decision tree</p>
        <h2>What kind of dinner do you want?</h2>
      </div>
      <div className="filter-grid">
        <label>Time
          <select value={filters.time} onChange={(event) => setFilters({ ...filters, time: event.target.value })}>
            {['Any', 'Under 20 mins', '20-35 mins', '35+ mins'].map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>Protein
          <select value={filters.protein} onChange={(event) => setFilters({ ...filters, protein: event.target.value })}>
            {['Any', 'Chicken', 'Beef', 'Pork', 'Fish', 'Turkey', 'Lamb', 'Vegetarian'].map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>Cuisine
          <select value={filters.cuisine} onChange={(event) => setFilters({ ...filters, cuisine: event.target.value })}>
            {['Any', 'British', 'Italian', 'Mexican', 'Indian', 'Asian', 'Mediterranean', 'American'].map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>Calories
          <select value={filters.calories} onChange={(event) => setFilters({ ...filters, calories: event.target.value })}>
            {['Any', 'Under 500', '500-650', '650+'].map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
      </div>
      <p className="results-count">Showing {matches.length} recipe{matches.length === 1 ? '' : 's'}.</p>
      <div className="recipe-grid">
        {matches.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} onOpen={onOpen} />)}
      </div>
    </section>
  );
}

function Recipes({ onOpen }) {
  const [search, setSearch] = useState('');
  const visibleRecipes = recipes.filter((recipe) => {
    const text = `${recipe.title} ${recipe.description} ${recipe.protein} ${recipe.cuisine} ${recipe.ingredients.join(' ')}`.toLowerCase();
    return text.includes(search.toLowerCase());
  });

  return (
    <section className="panel">
      <div className="section-heading">
        <p className="eyebrow">Recipe library</p>
        <h2>All family dinners</h2>
      </div>
      <input className="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search chicken, pasta, Mexican, quick..." />
      <p className="results-count">Showing {visibleRecipes.length} of {recipes.length} recipes.</p>
      <div className="recipe-grid">
        {visibleRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} onOpen={onOpen} />)}
      </div>
    </section>
  );
}

function Planner({ planner, setPlanner }) {
  function updateDay(day, recipeId) {
    setPlanner({ ...planner, [day]: recipeId });
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
      <div className="planner-grid">
        {days.map((day) => {
          const selectedRecipe = recipes.find((recipe) => recipe.id === planner[day]);
          return (
            <article className="day-card" key={day}>
              <h3>{day}</h3>
              <select value={planner[day]} onChange={(event) => updateDay(day, event.target.value)}>
                <option value="">Choose a dinner</option>
                {recipes.map((recipe) => <option key={recipe.id} value={recipe.id}>{recipe.title}</option>)}
              </select>
              {selectedRecipe && <p>{selectedRecipe.timeMinutes} mins · {selectedRecipe.calories} kcal · {selectedRecipe.protein}</p>}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ShoppingList({ planner }) {
  const plannedRecipes = days.map((day) => recipes.find((recipe) => recipe.id === planner[day])).filter(Boolean);
  const ingredients = [...new Map(plannedRecipes.flatMap((recipe) => recipe.ingredients).map((ingredient) => [normaliseIngredient(ingredient), ingredient])).values()].sort();

  return (
    <section className="panel">
      <div className="section-heading">
        <p className="eyebrow">Shopping list</p>
        <h2>Generated from your planner</h2>
      </div>
      {plannedRecipes.length === 0 ? (
        <div className="empty-state">Add dinners to the weekly planner and your shopping list will appear here.</div>
      ) : (
        <>
          <p className="results-count">Based on {plannedRecipes.length} planned dinner{plannedRecipes.length === 1 ? '' : 's'}.</p>
          <ul className="shopping-list">
            {ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
          </ul>
        </>
      )}
    </section>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('Discover');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [planner, setPlanner] = useState(readPlanner);

  useEffect(() => {
    localStorage.setItem('familyDinnerPlanner', JSON.stringify(planner));
  }, [planner]);

  return (
    <main>
      <header className="hero">
        <p className="eyebrow">Family Dinner Planner</p>
        <h1>Choose dinners, plan your week and build a shopping list.</h1>
        <p>Simple local-first prototype: no loading states, no APIs, no hidden recipe data.</p>
      </header>

      <nav className="tabs" aria-label="Main navigation">
        {['Discover', 'Recipes', 'Weekly Planner', 'Shopping List'].map((tab) => (
          <button key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)}>{tab}</button>
        ))}
      </nav>

      {activeTab === 'Discover' && <Discover onOpen={setSelectedRecipe} />}
      {activeTab === 'Recipes' && <Recipes onOpen={setSelectedRecipe} />}
      {activeTab === 'Weekly Planner' && <Planner planner={planner} setPlanner={setPlanner} />}
      {activeTab === 'Shopping List' && <ShoppingList planner={planner} />}

      <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
    </main>
  );
}
