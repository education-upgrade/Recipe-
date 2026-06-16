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

function ovenTemperature(recipe) {
  const text = `${recipe.title} ${recipe.description} ${(recipe.tags || []).join(' ')}`.toLowerCase();
  if (text.includes('pizza')) return '250°C, or as hot as your oven goes, ideally on a preheated pizza steel';
  if (text.includes('slow cooker')) return 'slow cooker on LOW';
  if (text.includes('pie') || text.includes('filo')) return '190°C / 170°C fan';
  if (text.includes('traybake') || text.includes('roast') || text.includes('bake')) return '200°C / 180°C fan';
  return null;
}

function methodGuidance(step, index, recipe) {
  const lower = step.toLowerCase();
  const oven = ovenTemperature(recipe);

  if (lower.includes('cook the rice') || lower.includes('cook rice')) {
    return 'Rinse the rice, then simmer in salted water for 10-12 minutes until tender. Drain, cover and leave to steam while the rest cooks.';
  }

  if (lower.includes('cook pasta') || lower.includes('cook tagliatelle') || lower.includes('cook linguine')) {
    return 'Cook the pasta in well-salted boiling water for 9-11 minutes, or until just al dente. Save a mug of pasta water before draining.';
  }

  if (lower.includes('cook noodles')) {
    return 'Cook the noodles according to the packet, usually 3-5 minutes. Drain and rinse briefly if using in a stir-fry or cold salad.';
  }

  if (lower.includes('brown') || lower.includes('sear')) {
    return 'Heat a large pan over medium-high heat for 2 minutes. Add a little oil, then brown the meat for 4-6 minutes without moving it too much so it develops colour.';
  }

  if (lower.includes('fry') || lower.includes('stir-fry')) {
    return 'Use a hot pan or wok over medium-high to high heat. Cook in batches if needed so the ingredients fry rather than steam.';
  }

  if (lower.includes('simmer')) {
    return 'Bring to a gentle bubble, then reduce to low-medium and simmer uncovered until the sauce thickens. Stir every few minutes.';
  }

  if (lower.includes('roast') || lower.includes('bake')) {
    return `Preheat the oven to ${oven || '200°C / 180°C fan'}. Spread ingredients out in one layer and cook until browned, bubbling or cooked through.`;
  }

  if (lower.includes('slow cooker') || recipe.timeMinutes >= 240) {
    return 'Cook in the slow cooker on LOW for 7-8 hours or HIGH for 4-5 hours, until the meat is tender and pulls apart easily.';
  }

  if (lower.includes('rest')) {
    return 'Rest the meat for 5-10 minutes before slicing so the juices settle.';
  }

  if (lower.includes('serve')) {
    return 'Taste, adjust seasoning with salt, pepper, lemon or chilli, then serve while hot.';
  }

  return step;
}

export function getDetailedMethod(recipe) {
  const oven = ovenTemperature(recipe);
  const prepTime = Math.max(5, Math.min(25, Math.round(recipe.timeMinutes * 0.3)));
  const cookTime = Math.max(10, recipe.timeMinutes - prepTime);

  const prepStep = oven
    ? `Prep ${prepTime} mins. Preheat to ${oven}. Weigh ingredients, chop vegetables and get trays or pans ready before you start cooking.`
    : `Prep ${prepTime} mins. Weigh ingredients, chop vegetables and get pans ready before you start cooking.`;

  const guidedSteps = recipe.method.map((step, index) => `${methodGuidance(step, index, recipe)} ${index === recipe.method.length - 1 ? '' : ''}`.trim());

  return [
    prepStep,
    ...guidedSteps,
    `Final check: total cooking time is about ${cookTime} mins after prep. Check meat is piping hot and cooked through before serving.`
  ];
}
