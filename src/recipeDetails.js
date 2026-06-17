import { auditedMethods } from './auditedMethods.js';
import { auditedMethodsBatch2 } from './auditedMethodsBatch2.js';
import { auditedMethodsBatch3 } from './auditedMethodsBatch3.js';
import { auditedMethodsBatch4 } from './auditedMethodsBatch4.js';
import { auditedMethodsBatch5 } from './auditedMethodsBatch5.js';
import { auditedMethodsBatch6 } from './auditedMethodsBatch6.js';

const allAuditedMethods = {
  ...auditedMethods,
  ...auditedMethodsBatch2,
  ...auditedMethodsBatch3,
  ...auditedMethodsBatch4,
  ...auditedMethodsBatch5,
  ...auditedMethodsBatch6,
};

const proteinLookup = {
  chicken: 0.31,
  turkey: 0.29,
  beef: 0.26,
  pork: 0.27,
  lamb: 0.25,
  salmon: 0.25,
  prawns: 0.24,
  tuna: 0.24,
  fish: 0.22,
  eggs: 6,
  halloumi: 0.22,
  feta: 0.14,
  cheddar: 0.25,
  parmesan: 0.36,
  mozzarella: 0.18,
  yoghurt: 0.1,
  beans: 0.07,
  chickpeas: 0.08,
  lentils: 0.09
};

const vegPortionWords = [
  'pepper', 'onion', 'tomato', 'cucumber', 'carrot', 'broccoli', 'spinach', 'courgette',
  'lettuce', 'cabbage', 'peas', 'sweetcorn', 'mushroom', 'celery', 'potato', 'greens',
  'rocket', 'spring onions', 'lime', 'lemon', 'basil', 'mint', 'parsley', 'coriander'
];

function ingredientName(ingredient) {
  return ingredient.item.toLowerCase();
}

function estimateProteinForIngredient(ingredient) {
  const name = ingredientName(ingredient);
  const quantity = Number(ingredient.quantity) || 0;

  for (const [key, proteinValue] of Object.entries(proteinLookup)) {
    if (name.includes(key)) {
      if (ingredient.unit === 'g') return quantity * proteinValue;
      if (ingredient.unit === 'tin' || ingredient.unit === 'tins') return quantity * 18;
      if (ingredient.unit === '') return quantity * proteinValue;
    }
  }

  return 0;
}

function estimateFiveADayForIngredient(ingredient) {
  const name = ingredientName(ingredient);
  const isFruitOrVeg = ingredient.category === 'Fruit & veg' || vegPortionWords.some((word) => name.includes(word));
  if (!isFruitOrVeg) return 0;

  const quantity = Number(ingredient.quantity) || 0;
  if (ingredient.unit === 'g') return quantity / 80;
  if (ingredient.unit === 'head') return quantity * 3;
  if (ingredient.unit === 'bag') return quantity * 2;
  if (ingredient.unit === 'bunch') return quantity * 0.5;
  if (ingredient.unit === 'tin' || ingredient.unit === 'tins') return quantity * 2;
  if (ingredient.unit === '') return quantity * 0.75;
  return quantity * 0.5;
}

export function getRecipeNutrition(recipe, servings) {
  const targetServings = servings || recipe.servings || 4;
  const scale = targetServings / (recipe.servings || 4);
  const totalProtein = recipe.ingredients.reduce((sum, ingredient) => sum + estimateProteinForIngredient(ingredient), 0) * scale;
  const totalFiveADay = recipe.ingredients.reduce((sum, ingredient) => sum + estimateFiveADayForIngredient(ingredient), 0) * scale;

  return {
    proteinPerServing: Math.max(0, Math.round(totalProtein / targetServings)),
    fiveADayPerServing: Math.min(5, Math.max(0, Math.round((totalFiveADay / targetServings) * 10) / 10)),
  };
}

function hasIndividualMethod(recipe) {
  return Array.isArray(recipe.method) && recipe.method.some((step) => step.trim().toLowerCase().startsWith('step '));
}

function fallbackMethod(recipe) {
  if (Array.isArray(recipe.method) && recipe.method.length > 0) return recipe.method;
  return [
    `Step 1 – Prepare the ingredients for ${recipe.title}. Chop, measure and season everything before you start cooking.`,
    'Step 2 – Cook the main ingredients using the listed timings as a guide, keeping the heat controlled and adjusting seasoning as you go.',
    'Step 3 – Finish the dish by checking texture, seasoning and doneness before serving.'
  ];
}

export function getDetailedMethod(recipe) {
  if (allAuditedMethods[recipe.id]) return allAuditedMethods[recipe.id];
  if (hasIndividualMethod(recipe)) return recipe.method;
  return fallbackMethod(recipe);
}
