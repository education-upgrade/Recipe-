import { auditedMethods } from './auditedMethods.js';
import { auditedMethodsBatch2 } from './auditedMethodsBatch2.js';

const allAuditedMethods = {
  ...auditedMethods,
  ...auditedMethodsBatch2,
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

function names(recipe) {
  return recipe.ingredients.map((ingredient) => ingredientName(ingredient));
}

function textFor(recipe) {
  return `${recipe.id} ${recipe.title} ${recipe.description} ${recipe.cuisine} ${(recipe.tags || []).join(' ')} ${names(recipe).join(' ')}`.toLowerCase();
}

function has(recipe, words) {
  const text = textFor(recipe);
  return words.some((word) => text.includes(word));
}

function ingredientAmount(recipe, words) {
  return recipe.ingredients.find((ingredient) => words.some((word) => ingredientName(ingredient).includes(word)));
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
  const text = textFor(recipe);
  if (text.includes('pizza')) return '250°C, or as hot as your oven goes, with a pizza steel or heavy tray preheating for at least 30 minutes';
  if (text.includes('slow cooker')) return 'slow cooker LOW for 7-8 hours or HIGH for 4-5 hours';
  if (text.includes('pie') || text.includes('filo')) return '190°C / 170°C fan';
  if (text.includes('whole chicken') || text.includes('rotisserie')) return '190°C / 170°C fan';
  if (text.includes('roast lamb') || text.includes('lamb shoulder')) return '170°C / 150°C fan for slow roasting';
  if (text.includes('traybake') || text.includes('roast') || text.includes('bake') || text.includes('oven')) return '200°C / 180°C fan';
  return null;
}

function prepStep(recipe, prepTime) {
  const oven = ovenTemperature(recipe);
  const heatText = oven ? ` Preheat to ${oven}.` : '';
  const protein = ingredientAmount(recipe, ['chicken', 'beef', 'pork', 'lamb', 'fish', 'salmon', 'prawns', 'turkey', 'steak']);
  const proteinText = protein ? ` Pat the ${protein.item} dry, trim if needed and season well.` : '';
  return `Prep — ${prepTime} mins.${heatText} Weigh everything out, chop the vegetables and get the pans or trays ready.${proteinText} Assume store-cupboard salt, black pepper and a little oil unless already listed.`;
}

function carbStep(recipe) {
  if (has(recipe, ['rice']) && !has(recipe, ['fried rice', 'cooked rice'])) {
    return 'Rice — rinse the rice, then simmer in salted water for 10-12 minutes until tender. Drain, cover and leave to steam while the main part of the meal finishes.';
  }
  if (has(recipe, ['pasta', 'tagliatelle', 'linguine'])) {
    return 'Pasta — cook in well-salted boiling water until just al dente, usually 9-11 minutes. Save a mug of pasta water before draining so the sauce can be loosened if needed.';
  }
  if (has(recipe, ['noodles'])) {
    return 'Noodles — cook according to the packet, usually 3-5 minutes. Drain well; for stir-fries, rinse briefly so they do not clump.';
  }
  if (has(recipe, ['couscous'])) {
    return 'Couscous — cover with boiling stock or salted water, stand for 5 minutes, then fluff with a fork and season with lemon or herbs.';
  }
  if (has(recipe, ['potatoes', 'baby potatoes', 'wedges', 'baking potatoes']) && has(recipe, ['traybake', 'roast', 'loaded potatoes', 'boulangere'])) {
    return 'Potatoes — cut into even pieces so they cook at the same speed. Roast at the stated oven temperature until golden and tender, usually 35-50 minutes depending on size.';
  }
  return null;
}

function mainCookingStep(recipe) {
  if (recipe.timeMinutes >= 240 || has(recipe, ['slow cooker'])) {
    return 'Main cook — put the aromatics in the slow cooker first, sit the meat on top, then add the sauce or stock. Cook on LOW for 7-8 hours or HIGH for 4-5 hours, until the meat pulls apart easily with two forks.';
  }
  if (has(recipe, ['pizza'])) {
    return 'Bake — stretch the dough gently without knocking out all the air. Top lightly, slide onto the preheated steel or tray and bake for 6-9 minutes until blistered, crisp underneath and bubbling on top.';
  }
  if (has(recipe, ['pie', 'filo'])) {
    return 'Bake — assemble the pie, brush pastry with oil, butter or egg as appropriate, then bake for 30-40 minutes until deeply golden. Rest for 10 minutes before slicing so the filling sets.';
  }
  if (has(recipe, ['traybake'])) {
    return 'Roast — spread everything in a single layer on a large tray. Roast for 35-45 minutes, turning once, until the vegetables are browned and the meat is cooked through.';
  }
  if (has(recipe, ['soup', 'broth'])) {
    return 'Simmer — bring the stock to a gentle bubble, add the chicken and aromatics, then simmer for 18-22 minutes until the chicken is cooked through. Shred the chicken before returning it to the pan.';
  }
  if (has(recipe, ['stir-fry', 'chow mein', 'fried rice'])) {
    return 'Stir-fry — heat the wok or largest frying pan until very hot. Cook the protein first for 4-6 minutes, then add vegetables for 3-4 minutes, keeping everything moving so it fries rather than steams.';
  }
  if (has(recipe, ['burger', 'smash'])) {
    return 'Burgers — heat a cast iron pan or griddle until smoking hot. Smash the beef balls firmly onto the pan, cook for 2-3 minutes until a crust forms, then flip, season and add cheese for the final minute.';
  }
  if (has(recipe, ['steak'])) {
    return 'Steak — heat a heavy pan until very hot. Sear for 2-4 minutes per side depending on thickness, then rest for 5-8 minutes before slicing across the grain.';
  }
  if (has(recipe, ['meatball', 'kofta'])) {
    return 'Shape and brown — shape the mixture firmly but lightly. Brown in a hot pan for 6-8 minutes, turning regularly, then simmer or roast until cooked through in the centre.';
  }
  if (has(recipe, ['curry', 'chilli', 'bolognese', 'cassoulet'])) {
    return 'Simmer — brown the meat or soften the vegetables first, then add spices, tomatoes, beans or stock. Simmer gently for 20-35 minutes until thick, rich and properly seasoned.';
  }
  if (has(recipe, ['salmon', 'fish', 'prawns'])) {
    return 'Cook the fish — cook over medium-high heat until just done: prawns need 2-3 minutes, white fish 8-12 minutes, and salmon fillets about 4-5 minutes per side depending on thickness.';
  }
  if (has(recipe, ['chicken'])) {
    return 'Cook the chicken — sear or roast until golden and cooked through. For pieces, allow 12-18 minutes depending on size; for thighs or larger pieces, allow 25-35 minutes. The centre should be piping hot with no pink meat.';
  }
  return 'Cook — follow the main cooking method for the dish, keeping the heat moderate enough to brown without burning. Taste and adjust seasoning as you go.';
}

function sauceAndVegStep(recipe) {
  if (has(recipe, ['yoghurt', 'yogurt', 'creme fraiche', 'cream cheese'])) {
    return 'Sauce and finishing vegetables — add delicate ingredients such as yoghurt, crème fraîche, cream cheese, spinach, herbs or lemon at the end on low heat, so the sauce stays smooth and fresh rather than splitting.';
  }
  if (has(recipe, ['sweet chilli', 'honey', 'gochujang', 'soy', 'teriyaki', 'bbq sauce'])) {
    return 'Glaze — add sticky sauces near the end and bubble for 1-3 minutes until glossy. Do not add them too early or they may catch before the meat is cooked.';
  }
  if (has(recipe, ['salad', 'wrap', 'flatbread', 'platter'])) {
    return 'Fresh bits — keep salad, herbs, yoghurt sauces and flatbreads separate until serving so everything stays crisp and warm where it should be.';
  }
  return 'Vegetables and sauce — cook vegetables until tender but not dull. Reduce sauces until they coat the ingredients rather than sitting watery in the pan.';
}

function finalStep(recipe) {
  if (has(recipe, ['chicken', 'turkey', 'pork', 'lamb', 'beef mince', 'sausages'])) {
    return 'Final check — check meat is piping hot in the centre with no unsafe pinkness. Rest roasts, steaks and pies before serving. Taste for salt, pepper, lemon, chilli or sweetness and adjust before plating.';
  }
  if (has(recipe, ['fish', 'salmon', 'prawns'])) {
    return 'Final check — fish should flake easily and prawns should be pink and opaque. Finish with lemon, herbs or chilli and serve straight away.';
  }
  return 'Final check — taste before serving and adjust with salt, pepper, lemon, herbs or chilli. Serve while the hot elements are still hot and the fresh elements still crisp.';
}

function hasIndividualMethod(recipe) {
  return Array.isArray(recipe.method) && recipe.method.some((step) => step.trim().toLowerCase().startsWith('step '));
}

export function getDetailedMethod(recipe) {
  if (allAuditedMethods[recipe.id]) return allAuditedMethods[recipe.id];
  if (hasIndividualMethod(recipe)) return recipe.method;

  const prepTime = Math.max(5, Math.min(25, Math.round(recipe.timeMinutes * 0.3)));
  const steps = [prepStep(recipe, prepTime)];
  const carb = carbStep(recipe);
  if (carb) steps.push(carb);
  steps.push(mainCookingStep(recipe));
  steps.push(sauceAndVegStep(recipe));
  steps.push(finalStep(recipe));
  return steps;
}
