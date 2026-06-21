import { extraRecipes } from './extraRecipes.js';

const i = (item, quantity, unit, category) => ({ item, quantity, unit, category });

export const newRecipeBatch1 = [
  {
    id: 'chicken-saag-basmati-rice',
    title: 'Chicken Saag with Basmati Rice',
    description: 'Tender spiced chicken in a rich spinach and tomato sauce with fluffy basmati rice.',
    servings: 4,
    protein: 'Chicken',
    cuisine: 'Indian',
    timeMinutes: 45,
    calories: 590,
    difficulty: 'Easy',
    familyFriendly: true,
    tags: ['high-protein', 'batch-cook', 'comfort-food', 'family-friendly'],
    ingredients: [
      i('boneless skinless chicken thighs', 700, 'g', 'Meat & fish'),
      i('basmati rice', 300, 'g', 'Carbs'),
      i('spinach', 400, 'g', 'Fruit & veg'),
      i('onion', 1, '', 'Fruit & veg'),
      i('tinned tomatoes', 1, 'tin', 'Tins, jars & packets'),
      i('garlic', 3, 'cloves', 'Fruit & veg'),
      i('ginger', 1, 'thumb', 'Fruit & veg'),
      i('garam masala', 2, 'tsp', 'Herbs, spices & sauces'),
      i('ground cumin', 1, 'tsp', 'Herbs, spices & sauces'),
      i('ground turmeric', 0.5, 'tsp', 'Herbs, spices & sauces'),
      i('Greek yoghurt', 100, 'g', 'Dairy')
    ],
    method: [
      'Step 1 – Prepare the rice and aromatics. Rinse 300g basmati rice until the water runs mostly clear. Finely chop the onion, crush the garlic, grate the ginger and cut the chicken into large bite-sized pieces.',
      'Step 2 – Cook the rice. Add the rice to a pan with 600ml water and a pinch of salt. Bring to the boil, cover, reduce to the lowest heat and cook for 10 minutes. Turn off the heat and leave covered for another 10 minutes.',
      'Step 3 – Brown the chicken. Heat 1 tbsp oil in a large deep frying pan over medium-high heat. Season the chicken and brown it for 5-6 minutes, turning until coloured on most sides. Transfer to a plate.',
      'Step 4 – Build the sauce. Lower the heat to medium. Cook the onion for 6-8 minutes until soft, then add garlic, ginger, garam masala, cumin and turmeric. Stir for 1 minute before adding the tomatoes. Simmer for 5 minutes.',
      'Step 5 – Add chicken and spinach. Return the chicken to the pan with a splash of water. Cover and simmer gently for 10 minutes. Add the spinach in handfuls, letting each addition wilt before adding more.',
      'Step 6 – Finish. Simmer uncovered for 3-5 minutes until the sauce is thick and the chicken is cooked through. Remove from the heat, stir in the yoghurt and adjust the seasoning. Serve with the fluffed basmati rice.'
    ]
  },
  {
    id: 'turkey-taco-stuffed-peppers',
    title: 'Turkey Taco Stuffed Peppers',
    description: 'Sweet peppers packed with seasoned turkey, black beans, rice and melted cheese.',
    servings: 4,
    protein: 'Turkey',
    cuisine: 'Mexican',
    timeMinutes: 50,
    calories: 560,
    difficulty: 'Easy',
    familyFriendly: true,
    tags: ['high-protein', 'lighter', 'family-friendly', 'batch-cook'],
    ingredients: [
      i('large peppers', 4, '', 'Fruit & veg'),
      i('turkey mince', 500, 'g', 'Meat & fish'),
      i('cooked rice', 300, 'g', 'Carbs'),
      i('black beans', 1, 'tin', 'Tins, jars & packets'),
      i('sweetcorn', 1, 'tin', 'Tins, jars & packets'),
      i('onion', 1, '', 'Fruit & veg'),
      i('garlic', 2, 'cloves', 'Fruit & veg'),
      i('tinned tomatoes', 1, 'tin', 'Tins, jars & packets'),
      i('taco seasoning', 2, 'tbsp', 'Herbs, spices & sauces'),
      i('mature cheddar', 100, 'g', 'Dairy'),
      i('lime', 1, '', 'Fruit & veg')
    ],
    method: [
      'Step 1 – Heat the oven and prepare the peppers. Heat the oven to 200°C fan / 220°C conventional. Halve the peppers lengthways through the stalks and remove the seeds. Put them cut-side up in a baking dish and bake for 12 minutes.',
      'Step 2 – Start the filling. Meanwhile, finely chop the onion. Heat 1 tsp oil in a large frying pan and cook the onion for 5 minutes. Add the turkey mince and cook for 6-8 minutes, breaking it up, until no pink remains.',
      'Step 3 – Season. Add the crushed garlic and taco seasoning and cook for 1 minute. Stir in the tomatoes, drained black beans and drained sweetcorn. Simmer for 8-10 minutes until thick rather than watery.',
      'Step 4 – Add the rice. Stir the cooked rice through the turkey mixture. Taste and season, then add a squeeze of lime. The filling should be moist enough to hold together but not runny.',
      'Step 5 – Fill and bake. Spoon the mixture firmly into the softened pepper halves. Scatter over the grated cheddar and return to the oven for 15-18 minutes until the peppers are tender and the cheese is golden.',
      'Step 6 – Serve. Rest for 5 minutes before serving so the filling settles. Finish with extra lime and serve with salad or yoghurt if liked.'
    ]
  },
  {
    id: 'pork-tenderloin-mustard-cider',
    title: 'Pork Tenderloin with Mustard Cider Sauce',
    description: 'Lean pork medallions with apples, mustard sauce, crushed potatoes and green beans.',
    servings: 4,
    protein: 'Pork',
    cuisine: 'British',
    timeMinutes: 45,
    calories: 610,
    difficulty: 'Medium',
    familyFriendly: true,
    tags: ['high-protein', 'weeknight', 'comfort-food', 'family-friendly'],
    ingredients: [
      i('pork tenderloin', 650, 'g', 'Meat & fish'),
      i('baby potatoes', 800, 'g', 'Carbs'),
      i('green beans', 300, 'g', 'Fruit & veg'),
      i('eating apples', 2, '', 'Fruit & veg'),
      i('shallots', 3, '', 'Fruit & veg'),
      i('garlic', 2, 'cloves', 'Fruit & veg'),
      i('wholegrain mustard', 2, 'tbsp', 'Herbs, spices & sauces'),
      i('apple juice', 200, 'ml', 'Tins, jars & packets'),
      i('chicken stock', 200, 'ml', 'Tins, jars & packets'),
      i('creme fraiche', 100, 'g', 'Dairy')
    ],
    method: [
      'Step 1 – Cook the potatoes. Halve the baby potatoes and simmer in salted water for 15-18 minutes until tender. Drain well, lightly crush with a fork and keep warm.',
      'Step 2 – Prepare the pork. Trim any silver skin from the tenderloin and cut it into medallions about 3cm thick. Pat dry and season generously with salt and black pepper.',
      'Step 3 – Brown the pork. Heat 1 tbsp oil in a wide frying pan over medium-high heat. Sear the pork for about 2 minutes per side until well browned. Transfer to a plate; it will finish cooking in the sauce.',
      'Step 4 – Cook the apples and shallots. Lower the heat to medium. Add the sliced shallots and apple wedges and cook for 5-6 minutes until lightly golden. Add the garlic for the final minute.',
      'Step 5 – Make the sauce. Stir in the mustard, apple juice and stock. Bubble for 5 minutes until reduced slightly, then return the pork and any juices to the pan. Simmer gently for 4-6 minutes until the pork is just cooked through.',
      'Step 6 – Finish and serve. Steam or boil the green beans for 4-5 minutes. Remove the pork pan from the heat and stir in the creme fraiche. Taste for seasoning and serve with the crushed potatoes and beans.'
    ]
  },
  {
    id: 'beef-broccoli-noodle-stir-fry',
    title: 'Beef and Broccoli Noodle Stir-Fry',
    description: 'Tender beef strips, broccoli and noodles in a glossy garlic and ginger sauce.',
    servings: 4,
    protein: 'Beef',
    cuisine: 'Chinese',
    timeMinutes: 25,
    calories: 590,
    difficulty: 'Easy',
    familyFriendly: true,
    tags: ['quick', 'high-protein', 'fakeaway', 'family-friendly'],
    ingredients: [
      i('lean beef stir-fry strips', 500, 'g', 'Meat & fish'),
      i('egg noodles', 300, 'g', 'Carbs'),
      i('broccoli', 2, 'heads', 'Fruit & veg'),
      i('red pepper', 1, '', 'Fruit & veg'),
      i('spring onions', 1, 'bunch', 'Fruit & veg'),
      i('garlic', 3, 'cloves', 'Fruit & veg'),
      i('ginger', 1, 'thumb', 'Fruit & veg'),
      i('soy sauce', 4, 'tbsp', 'Herbs, spices & sauces'),
      i('oyster sauce', 3, 'tbsp', 'Herbs, spices & sauces'),
      i('honey', 1, 'tbsp', 'Tins, jars & packets'),
      i('cornflour', 2, 'tsp', 'Tins, jars & packets')
    ],
    method: [
      'Step 1 – Make the sauce. Mix the soy sauce, oyster sauce, honey, cornflour and 100ml cold water until smooth. Grate the ginger, crush the garlic and slice the spring onions.',
      'Step 2 – Prepare the noodles and vegetables. Cook the noodles according to the packet, then drain. Cut the broccoli into small florets and slice the pepper thinly so everything cooks quickly.',
      'Step 3 – Sear the beef. Heat a wok or large frying pan until very hot. Add 1 tsp oil and stir-fry the beef in two batches for 60-90 seconds per batch until browned at the edges. Transfer to a plate.',
      'Step 4 – Cook the vegetables. Add another small splash of oil if needed. Stir-fry the broccoli and pepper for 3-4 minutes, adding 2 tbsp water and covering for 1 minute if the broccoli needs help softening.',
      'Step 5 – Bring it together. Add the garlic and ginger and stir for 30 seconds. Return the beef, add the noodles and pour in the sauce. Toss over high heat for 1-2 minutes until glossy and thickened.',
      'Step 6 – Serve. Remove from the heat as soon as the beef is hot so it stays tender. Scatter over the spring onions and serve immediately.'
    ]
  },
  {
    id: 'lemon-chicken-pea-orzo',
    title: 'Lemon Chicken and Pea Orzo',
    description: 'A bright one-pan chicken and orzo dinner with peas, herbs and parmesan.',
    servings: 4,
    protein: 'Chicken',
    cuisine: 'Mediterranean',
    timeMinutes: 35,
    calories: 600,
    difficulty: 'Easy',
    familyFriendly: true,
    tags: ['one-pan', 'quick', 'high-protein', 'family-friendly'],
    ingredients: [
      i('chicken breast', 650, 'g', 'Meat & fish'),
      i('orzo', 300, 'g', 'Carbs'),
      i('peas', 250, 'g', 'Frozen'),
      i('courgette', 1, '', 'Fruit & veg'),
      i('onion', 1, '', 'Fruit & veg'),
      i('garlic', 3, 'cloves', 'Fruit & veg'),
      i('chicken stock', 800, 'ml', 'Tins, jars & packets'),
      i('lemon', 2, '', 'Fruit & veg'),
      i('parmesan', 60, 'g', 'Dairy'),
      i('parsley', 1, 'bunch', 'Fruit & veg')
    ],
    method: [
      'Step 1 – Prepare the ingredients. Cut the chicken into bite-sized pieces, finely chop the onion, dice the courgette, crush the garlic and zest one lemon.',
      'Step 2 – Brown the chicken. Heat 1 tbsp oil in a large deep frying pan over medium-high heat. Season the chicken and cook for 5-6 minutes until golden on the outside. Transfer to a plate.',
      'Step 3 – Soften the vegetables. Lower the heat to medium. Add the onion and courgette and cook for 5 minutes. Add the garlic and lemon zest and cook for another minute.',
      'Step 4 – Cook the orzo. Stir in the orzo, then pour in the stock. Bring to a gentle simmer and cook uncovered for 9-11 minutes, stirring often so the orzo does not catch.',
      'Step 5 – Add chicken and peas. Return the chicken to the pan after the orzo has cooked for about 5 minutes. Add the peas for the final 3 minutes. Add a splash of water if the pan becomes dry before the orzo is tender.',
      'Step 6 – Finish. Remove from the heat and stir in the parmesan, chopped parsley and juice of one lemon. Rest for 2 minutes, then adjust the seasoning and serve with extra lemon wedges.'
    ]
  }
];

extraRecipes.push(...newRecipeBatch1);
