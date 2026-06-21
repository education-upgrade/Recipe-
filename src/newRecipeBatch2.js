import { extraRecipes } from './extraRecipes.js';

const i = (item, quantity, unit, category) => ({ item, quantity, unit, category });

export const newRecipeBatch2 = [
  {
    id: 'chicken-katsu-curry',
    title: 'Chicken Katsu Curry',
    description: 'Crisp crumbed chicken with a smooth Japanese-style curry sauce, rice and cucumber.',
    servings: 4,
    protein: 'Chicken',
    cuisine: 'Japanese',
    timeMinutes: 45,
    calories: 680,
    difficulty: 'Medium',
    familyFriendly: true,
    tags: ['fakeaway', 'family-friendly', 'high-protein', 'weekend-cooking'],
    ingredients: [
      i('chicken breast', 650, 'g', 'Meat & fish'),
      i('panko breadcrumbs', 120, 'g', 'Carbs'),
      i('plain flour', 50, 'g', 'Carbs'),
      i('eggs', 2, '', 'Dairy'),
      i('basmati rice', 300, 'g', 'Carbs'),
      i('onion', 1, '', 'Fruit & veg'),
      i('carrots', 2, '', 'Fruit & veg'),
      i('garlic', 2, 'cloves', 'Fruit & veg'),
      i('mild curry powder', 2, 'tbsp', 'Herbs, spices & sauces'),
      i('chicken stock', 500, 'ml', 'Tins, jars & packets'),
      i('soy sauce', 1, 'tbsp', 'Herbs, spices & sauces'),
      i('honey', 1, 'tbsp', 'Tins, jars & packets'),
      i('cucumber', 1, '', 'Fruit & veg')
    ],
    method: [
      'Step 1 – Heat the oven and prepare the rice. Heat the oven to 210°C fan / 230°C conventional. Rinse the rice and cook according to the packet, then keep covered.',
      'Step 2 – Make the curry sauce. Finely chop the onion and carrots. Cook them in 1 tbsp oil over medium heat for 8 minutes until soft. Add the crushed garlic and curry powder and cook for 1 minute.',
      'Step 3 – Simmer and blend. Pour in the stock, soy sauce and honey. Simmer for 15 minutes until the carrots are very soft, then blend until smooth. Return to a low heat and adjust the seasoning.',
      'Step 4 – Crumb the chicken. Slice each chicken breast horizontally into thinner pieces and lightly flatten. Coat first in flour, then beaten egg, then panko breadcrumbs, pressing the crumbs on firmly.',
      'Step 5 – Bake the chicken. Put the chicken on a lightly oiled hot tray, spray or brush with a little oil and bake for 18-22 minutes, turning once, until crisp, golden and cooked through.',
      'Step 6 – Serve. Slice the chicken and serve over rice with the curry sauce spooned alongside or over the top. Add thinly sliced cucumber for freshness.'
    ]
  },
  {
    id: 'beef-gyros-greek-potatoes',
    title: 'Beef Gyros with Tzatziki and Greek Potatoes',
    description: 'Spiced beef strips with warm flatbreads, lemon potatoes, salad and cooling tzatziki.',
    servings: 4,
    protein: 'Beef',
    cuisine: 'Greek',
    timeMinutes: 50,
    calories: 690,
    difficulty: 'Medium',
    familyFriendly: true,
    tags: ['fakeaway', 'high-protein', 'family-friendly', 'weekend-cooking'],
    ingredients: [
      i('lean beef strips', 600, 'g', 'Meat & fish'),
      i('flatbreads', 4, '', 'Carbs'),
      i('potatoes', 800, 'g', 'Carbs'),
      i('Greek yoghurt', 200, 'g', 'Dairy'),
      i('cucumber', 1, '', 'Fruit & veg'),
      i('tomatoes', 4, '', 'Fruit & veg'),
      i('red onion', 1, '', 'Fruit & veg'),
      i('garlic', 3, 'cloves', 'Fruit & veg'),
      i('lemon', 2, '', 'Fruit & veg'),
      i('dried oregano', 2, 'tsp', 'Herbs, spices & sauces'),
      i('ground cumin', 1, 'tsp', 'Herbs, spices & sauces'),
      i('smoked paprika', 1, 'tsp', 'Herbs, spices & sauces')
    ],
    method: [
      'Step 1 – Roast the potatoes. Heat the oven to 210°C fan / 230°C conventional. Cut the potatoes into wedges and toss with 1 tbsp oil, half the oregano, salt, pepper and the juice of half a lemon. Roast for 35-40 minutes, turning once.',
      'Step 2 – Marinate the beef. Toss the beef with cumin, paprika, remaining oregano, 1 crushed garlic clove, a squeeze of lemon, salt and pepper. Leave while the potatoes cook.',
      'Step 3 – Make the tzatziki. Grate half the cucumber and squeeze out as much liquid as possible. Mix with the yoghurt, 1 crushed garlic clove, lemon juice, salt and black pepper.',
      'Step 4 – Prepare the salad. Dice the tomatoes, slice the red onion and chop the remaining cucumber. Toss lightly with lemon juice and a pinch of salt.',
      'Step 5 – Cook the beef. Heat a large frying pan or griddle until very hot. Cook the beef in two batches for 2-3 minutes, tossing until browned but still tender.',
      'Step 6 – Assemble. Warm the flatbreads, then fill with tzatziki, salad and beef. Serve the lemon potatoes alongside.'
    ]
  },
  {
    id: 'thai-basil-pork-rice',
    title: 'Thai Basil Pork with Rice',
    description: 'Fast savoury pork mince with garlic, chilli, basil and a glossy soy-style sauce.',
    servings: 4,
    protein: 'Pork',
    cuisine: 'Thai',
    timeMinutes: 25,
    calories: 570,
    difficulty: 'Easy',
    familyFriendly: true,
    tags: ['quick', 'fakeaway', 'high-protein', 'weeknight'],
    ingredients: [
      i('lean pork mince', 500, 'g', 'Meat & fish'),
      i('jasmine rice', 300, 'g', 'Carbs'),
      i('green beans', 250, 'g', 'Fruit & veg'),
      i('red pepper', 1, '', 'Fruit & veg'),
      i('garlic', 4, 'cloves', 'Fruit & veg'),
      i('fresh chilli', 1, '', 'Fruit & veg'),
      i('fresh basil', 1, 'bunch', 'Fruit & veg'),
      i('soy sauce', 3, 'tbsp', 'Herbs, spices & sauces'),
      i('fish sauce', 1, 'tbsp', 'Herbs, spices & sauces'),
      i('oyster sauce', 2, 'tbsp', 'Herbs, spices & sauces'),
      i('honey', 1, 'tbsp', 'Tins, jars & packets'),
      i('lime', 1, '', 'Fruit & veg')
    ],
    method: [
      'Step 1 – Cook the rice. Rinse and cook the jasmine rice according to the packet, then leave covered to steam.',
      'Step 2 – Make the sauce. Mix the soy sauce, fish sauce, oyster sauce, honey and 2 tbsp water in a small bowl.',
      'Step 3 – Prepare the vegetables. Trim and halve the green beans, slice the pepper, crush the garlic and finely chop the chilli. Pick the basil leaves from the stalks.',
      'Step 4 – Brown the pork. Heat a wok or large frying pan over high heat. Add the pork mince and cook for 5-6 minutes, breaking it up, until browned and any liquid has evaporated.',
      'Step 5 – Stir-fry. Add the beans and pepper and cook for 3 minutes. Add the garlic and chilli for 30 seconds, then pour in the sauce and toss until glossy and reduced.',
      'Step 6 – Finish. Remove from the heat and fold through the basil so it just wilts. Serve with rice and lime wedges. Reduce or omit the chilli for a milder family version.'
    ]
  },
  {
    id: 'tandoori-chicken-burgers',
    title: 'Tandoori Chicken Burgers',
    description: 'Juicy spiced chicken burgers with mango slaw and mint yoghurt in toasted buns.',
    servings: 4,
    protein: 'Chicken',
    cuisine: 'Indian',
    timeMinutes: 35,
    calories: 630,
    difficulty: 'Easy',
    familyFriendly: true,
    tags: ['fakeaway', 'high-protein', 'family-friendly', 'weekend-cooking'],
    ingredients: [
      i('chicken breast', 650, 'g', 'Meat & fish'),
      i('tandoori paste', 3, 'tbsp', 'Herbs, spices & sauces'),
      i('Greek yoghurt', 180, 'g', 'Dairy'),
      i('burger buns', 4, '', 'Carbs'),
      i('cabbage', 0.25, '', 'Fruit & veg'),
      i('carrot', 2, '', 'Fruit & veg'),
      i('mango chutney', 3, 'tbsp', 'Tins, jars & packets'),
      i('mint', 1, 'bunch', 'Fruit & veg'),
      i('lime', 1, '', 'Fruit & veg'),
      i('lettuce', 1, 'bag', 'Fruit & veg'),
      i('red onion', 1, '', 'Fruit & veg')
    ],
    method: [
      'Step 1 – Prepare the chicken. Slice each chicken breast horizontally into thin burger-sized pieces. Mix the tandoori paste with 2 tbsp yoghurt and coat the chicken thoroughly.',
      'Step 2 – Make the slaw. Finely shred the cabbage, grate the carrots and slice half the red onion. Toss with the mango chutney, lime juice and a pinch of salt.',
      'Step 3 – Make the mint yoghurt. Finely chop the mint and stir it into the remaining yoghurt with a little lime zest, salt and black pepper.',
      'Step 4 – Cook the chicken. Heat a griddle or frying pan over medium-high heat. Cook the chicken for 4-5 minutes per side, depending on thickness, until charred at the edges and cooked through.',
      'Step 5 – Toast the buns. Split and lightly toast the burger buns in the same pan or under the grill. Slice the remaining red onion very thinly.',
      'Step 6 – Build. Spread the buns with mint yoghurt, add lettuce, tandoori chicken, mango slaw and sliced onion, then close and serve immediately.'
    ]
  },
  {
    id: 'crispy-chilli-beef',
    title: 'Crispy Chilli Beef',
    description: 'Thin crisp beef strips with peppers and onions in a sticky sweet chilli glaze.',
    servings: 4,
    protein: 'Beef',
    cuisine: 'Chinese',
    timeMinutes: 35,
    calories: 650,
    difficulty: 'Medium',
    familyFriendly: true,
    tags: ['fakeaway', 'high-protein', 'spicy', 'weekend-cooking'],
    ingredients: [
      i('lean beef strips', 500, 'g', 'Meat & fish'),
      i('cornflour', 70, 'g', 'Tins, jars & packets'),
      i('rice', 300, 'g', 'Carbs'),
      i('mixed peppers', 3, '', 'Fruit & veg'),
      i('onion', 1, '', 'Fruit & veg'),
      i('spring onions', 1, 'bunch', 'Fruit & veg'),
      i('garlic', 3, 'cloves', 'Fruit & veg'),
      i('ginger', 1, 'thumb', 'Fruit & veg'),
      i('sweet chilli sauce', 5, 'tbsp', 'Herbs, spices & sauces'),
      i('soy sauce', 3, 'tbsp', 'Herbs, spices & sauces'),
      i('rice vinegar', 2, 'tbsp', 'Herbs, spices & sauces'),
      i('tomato ketchup', 2, 'tbsp', 'Herbs, spices & sauces')
    ],
    method: [
      'Step 1 – Cook the rice and make the sauce. Cook the rice according to the packet. Mix the sweet chilli sauce, soy sauce, rice vinegar, ketchup and 3 tbsp water.',
      'Step 2 – Prepare the beef. Pat the beef very dry, season lightly and toss thoroughly in the cornflour until every strip is coated. Shake off the excess.',
      'Step 3 – Crisp the beef. Heat a thin layer of oil in a large frying pan over medium-high heat. Fry the beef in small batches for 2-3 minutes until crisp and browned, then drain on kitchen paper.',
      'Step 4 – Cook the vegetables. Carefully remove most of the oil. Add the sliced peppers and onion and stir-fry for 3-4 minutes until softened but still slightly crisp.',
      'Step 5 – Glaze. Add the crushed garlic and grated ginger for 30 seconds. Pour in the sauce and bubble for 1-2 minutes until sticky. Return the beef and toss quickly to coat.',
      'Step 6 – Serve. Remove from the heat straight away so the coating stays as crisp as possible. Scatter with sliced spring onions and serve with rice.'
    ]
  }
];

extraRecipes.push(...newRecipeBatch2);
