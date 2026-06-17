const i = (item, quantity, unit, category) => ({ item, quantity, unit, category });

export const recipes = [
  {
    id: 'chicken-fajita-bowls',
    title: 'Chicken Fajita Rice Bowls',
    description: 'Colourful, quick and family-friendly with smoky chicken, peppers and rice.',
    servings: 4,
    protein: 'Chicken',
    cuisine: 'Mexican',
    timeMinutes: 30,
    calories: 560,
    difficulty: 'Easy',
    familyFriendly: true,
    ingredients: [i('chicken breast', 600, 'g', 'Meat & fish'), i('rice', 300, 'g', 'Carbs'), i('mixed peppers', 3, '', 'Fruit & veg'), i('red onion', 1, '', 'Fruit & veg'), i('fajita seasoning', 1, 'tbsp', 'Herbs, spices & sauces'), i('lime', 1, '', 'Fruit & veg'), i('Greek yoghurt', 120, 'g', 'Dairy')],
    method: [
      'Step 1 – Cook the rice. Rinse 300g rice, then simmer in salted boiling water for 10-12 minutes until just tender. Drain, cover with a lid and leave to steam while you cook the chicken.',
      'Step 2 – Prepare the fajita mix. Slice 600g chicken breast into thin strips. Slice the peppers and red onion into strips of a similar thickness so they cook evenly.',
      'Step 3 – Cook the chicken. Heat 1 tbsp oil in a large frying pan over medium-high heat. Add the chicken in one layer, sprinkle over 1 tbsp fajita seasoning and cook for 5-6 minutes, turning occasionally, until golden and cooked through.',
      'Step 4 – Add the vegetables. Add the peppers and onion to the pan. Cook for 5-7 minutes, stirring often, until softened but still bright and slightly crisp at the edges.',
      'Step 5 – Finish and serve. Squeeze over half the lime and taste for seasoning. Spoon rice into bowls, top with the fajita chicken and vegetables, then add Greek yoghurt and extra lime wedges.'
    ]
  },
  {
    id: 'turkey-meatball-pasta',
    title: 'Turkey Meatball Pasta',
    description: 'Lean turkey meatballs in a rich tomato sauce with pasta.',
    servings: 4,
    protein: 'Turkey',
    cuisine: 'Italian',
    timeMinutes: 40,
    calories: 620,
    difficulty: 'Medium',
    familyFriendly: true,
    ingredients: [i('turkey mince', 500, 'g', 'Meat & fish'), i('pasta', 350, 'g', 'Carbs'), i('passata', 500, 'g', 'Tins, jars & packets'), i('garlic', 3, 'cloves', 'Fruit & veg'), i('onion', 1, '', 'Fruit & veg'), i('Italian herbs', 2, 'tsp', 'Herbs, spices & sauces'), i('parmesan', 40, 'g', 'Dairy')],
    method: [
      'Step 1 – Make the meatballs. Put 500g turkey mince in a bowl with 1 tsp Italian herbs, a good pinch of salt and black pepper. Mix gently with your hands, then shape into 16 small meatballs. Do not overwork the mince or they become dense.',
      'Step 2 – Brown the meatballs. Heat 1 tbsp oil in a wide frying pan over medium-high heat. Brown the meatballs for 6-8 minutes, turning carefully, until coloured all over. Transfer to a plate.',
      'Step 3 – Build the sauce. In the same pan, cook the finely chopped onion for 5 minutes until soft. Add the crushed garlic and remaining herbs for 1 minute, then pour in the passata. Season and bring to a gentle simmer.',
      'Step 4 – Simmer. Return the meatballs to the sauce. Simmer for 12-15 minutes, turning once, until the meatballs are cooked through and the sauce has thickened.',
      'Step 5 – Cook pasta and finish. Cook 350g pasta in salted boiling water until al dente. Save a mug of pasta water, drain, then toss pasta through the sauce. Loosen with pasta water if needed and finish with parmesan.'
    ]
  },
  {
    id: 'salmon-teriyaki-noodles',
    title: 'Salmon Teriyaki Noodles',
    description: 'Sticky salmon with noodles and crunchy veg.',
    servings: 4,
    protein: 'Fish',
    cuisine: 'Asian',
    timeMinutes: 25,
    calories: 590,
    difficulty: 'Easy',
    familyFriendly: true,
    ingredients: [i('salmon fillets', 4, '', 'Meat & fish'), i('egg noodles', 300, 'g', 'Carbs'), i('soy sauce', 4, 'tbsp', 'Herbs, spices & sauces'), i('honey', 2, 'tbsp', 'Tins, jars & packets'), i('garlic', 2, 'cloves', 'Fruit & veg'), i('broccoli', 1, 'head', 'Fruit & veg'), i('carrot', 2, '', 'Fruit & veg')],
    method: [
      'Step 1 – Make the glaze. Mix 4 tbsp soy sauce, 2 tbsp honey and 2 crushed garlic cloves in a small bowl. It should taste salty-sweet and quite punchy because it will coat the salmon and noodles.',
      'Step 2 – Cook the noodles. Cook 300g egg noodles according to the packet, usually 3-5 minutes. Drain, rinse briefly and set aside so they do not clump.',
      'Step 3 – Cook the vegetables. Slice the carrot into thin matchsticks and cut the broccoli into small florets. Stir-fry in a hot pan with a splash of oil for 4-5 minutes until bright and just tender. Remove to a bowl.',
      'Step 4 – Cook the salmon. Pat the salmon dry. Place skin-side down in the hot pan and cook for 4 minutes. Turn carefully, add the glaze and cook for 2-3 minutes more, spooning the sauce over until glossy.',
      'Step 5 – Finish. Toss the noodles and vegetables through any sauce left in the pan. Serve the salmon on top. The salmon should flake easily but still look moist in the centre.'
    ]
  },
  {
    id: 'beef-chilli',
    title: 'Beef Chilli',
    description: 'A simple chilli con carne that works well for batch cooking.',
    servings: 4,
    protein: 'Beef',
    cuisine: 'Mexican',
    timeMinutes: 45,
    calories: 650,
    difficulty: 'Easy',
    familyFriendly: true,
    ingredients: [i('lean beef mince', 500, 'g', 'Meat & fish'), i('kidney beans', 1, 'tin', 'Tins, jars & packets'), i('tinned tomatoes', 2, 'tins', 'Tins, jars & packets'), i('onion', 1, '', 'Fruit & veg'), i('garlic', 3, 'cloves', 'Fruit & veg'), i('chilli powder', 2, 'tsp', 'Herbs, spices & sauces'), i('rice', 300, 'g', 'Carbs')],
    method: [
      'Step 1 – Start the rice. Rinse 300g rice and cook in salted boiling water for 10-12 minutes. Drain, cover and leave to steam.',
      'Step 2 – Brown the beef properly. Heat 1 tbsp oil in a large pan over medium-high heat. Add 500g beef mince and cook for 6-8 minutes, breaking it up, until browned and any liquid has evaporated. This gives the chilli flavour.',
      'Step 3 – Soften the aromatics. Add the finely chopped onion and cook for 5 minutes until soft. Add 3 crushed garlic cloves and 2 tsp chilli powder. Stir for 1 minute until fragrant.',
      'Step 4 – Simmer. Add 2 tins tomatoes and the drained kidney beans. Season well, bring to a bubble, then simmer uncovered for 25-30 minutes until thick and rich. Add a splash of water if it catches.',
      'Step 5 – Finish. Taste and adjust with salt, pepper or extra chilli. Serve over rice. It should be spoonable and thick, not watery.'
    ]
  },
  {
    id: 'halloumi-flatbreads',
    title: 'Halloumi Flatbreads',
    description: 'Charred halloumi, salad and yoghurt sauce in warm flatbreads.',
    servings: 4,
    protein: 'Vegetarian',
    cuisine: 'Mediterranean',
    timeMinutes: 20,
    calories: 540,
    difficulty: 'Easy',
    familyFriendly: true,
    ingredients: [i('halloumi', 450, 'g', 'Dairy'), i('flatbreads', 4, '', 'Carbs'), i('lettuce', 1, 'bag', 'Fruit & veg'), i('tomatoes', 4, '', 'Fruit & veg'), i('cucumber', 1, '', 'Fruit & veg'), i('Greek yoghurt', 150, 'g', 'Dairy'), i('lemon', 1, '', 'Fruit & veg')],
    method: [
      'Step 1 – Make the lemon yoghurt. Mix 150g Greek yoghurt with the zest and juice of half the lemon, a pinch of salt and black pepper. It should be bright and tangy.',
      'Step 2 – Prepare the salad. Shred the lettuce, slice the tomatoes and cut the cucumber into half moons. Keep everything separate and fresh until serving.',
      'Step 3 – Warm the flatbreads. Heat them in a dry pan for 30-45 seconds per side or wrap in foil and warm in a low oven. Keep covered so they stay soft.',
      'Step 4 – Char the halloumi. Slice the halloumi into thick pieces. Heat a dry frying pan over medium-high heat and cook for 1-2 minutes per side until deep golden. Do not move it too early or it will stick.',
      'Step 5 – Build. Spread each flatbread with lemon yoghurt, add salad and hot halloumi, then squeeze over the remaining lemon. Serve immediately while the halloumi is still soft.'
    ]
  },
  {
    id: 'chicken-caesar-wraps',
    title: 'Chicken Caesar Wraps',
    description: 'A lighter Caesar-style chicken wrap for busy evenings.',
    servings: 4,
    protein: 'Chicken',
    cuisine: 'British',
    timeMinutes: 20,
    calories: 500,
    difficulty: 'Easy',
    familyFriendly: true,
    ingredients: [i('cooked chicken', 500, 'g', 'Meat & fish'), i('wraps', 4, '', 'Carbs'), i('romaine lettuce', 2, 'heads', 'Fruit & veg'), i('Greek yoghurt', 160, 'g', 'Dairy'), i('parmesan', 40, 'g', 'Dairy'), i('lemon', 1, '', 'Fruit & veg'), i('garlic', 1, 'clove', 'Fruit & veg')],
    method: [
      'Step 1 – Make the lighter Caesar sauce. Mix 160g Greek yoghurt with 40g finely grated parmesan, 1 small grated garlic clove, lemon juice, black pepper and a pinch of salt. Taste: it should be sharp, savoury and garlicky.',
      'Step 2 – Prepare the filling. Slice or shred 500g cooked chicken. Wash and dry the romaine thoroughly, then slice it into chunky strips so the wraps have crunch.',
      'Step 3 – Warm the wraps. Warm each wrap in a dry pan for about 20 seconds per side. This stops them cracking when rolled.',
      'Step 4 – Fill. Spread sauce down the centre of each wrap, add lettuce and chicken, then add a little more sauce. Do not overfill or they will split.',
      'Step 5 – Toast if liked. Fold in the sides and roll tightly. Toast seam-side down in a dry pan for 1-2 minutes until lightly golden, or serve soft.'
    ]
  },
  {
    id: 'pork-stir-fry',
    title: 'Pork Stir-Fry with Rice',
    description: 'Fast pork strips with vegetables and a sticky soy glaze.',
    servings: 4,
    protein: 'Pork',
    cuisine: 'Asian',
    timeMinutes: 25,
    calories: 580,
    difficulty: 'Easy',
    familyFriendly: true,
    ingredients: [i('pork loin steaks', 500, 'g', 'Meat & fish'), i('rice', 300, 'g', 'Carbs'), i('mixed stir-fry vegetables', 500, 'g', 'Fruit & veg'), i('soy sauce', 4, 'tbsp', 'Herbs, spices & sauces'), i('honey', 1, 'tbsp', 'Tins, jars & packets'), i('ginger', 1, 'thumb', 'Fruit & veg'), i('garlic', 2, 'cloves', 'Fruit & veg')],
    method: [
      'Step 1 – Cook the rice. Rinse 300g rice and simmer in salted water for 10-12 minutes. Drain and leave covered.',
      'Step 2 – Prepare the pork and sauce. Slice the pork loin steaks very thinly across the grain. Mix 4 tbsp soy sauce, 1 tbsp honey, grated ginger and crushed garlic in a bowl.',
      'Step 3 – Sear the pork. Heat a wok or large frying pan until very hot. Add a little oil, then stir-fry the pork for 3-4 minutes until browned at the edges. Cook in two batches if the pan is crowded.',
      'Step 4 – Add vegetables. Add the stir-fry vegetables and cook for 3-4 minutes, tossing constantly. They should stay bright and slightly crisp.',
      'Step 5 – Glaze and serve. Pour in the soy-honey sauce and bubble for 1-2 minutes until glossy. Serve immediately over rice.'
    ]
  },
  {
    id: 'lentil-bolognese',
    title: 'Lentil Bolognese',
    description: 'A cheap, filling vegetarian pasta sauce.',
    servings: 4,
    protein: 'Vegetarian',
    cuisine: 'Italian',
    timeMinutes: 35,
    calories: 520,
    difficulty: 'Easy',
    familyFriendly: true,
    ingredients: [i('red lentils', 220, 'g', 'Tins, jars & packets'), i('pasta', 350, 'g', 'Carbs'), i('passata', 500, 'g', 'Tins, jars & packets'), i('onion', 1, '', 'Fruit & veg'), i('carrot', 2, '', 'Fruit & veg'), i('celery', 2, 'sticks', 'Fruit & veg'), i('Italian herbs', 2, 'tsp', 'Herbs, spices & sauces')],
    method: [
      'Step 1 – Make the soffritto. Finely chop the onion, carrots and celery. Cook in 1 tbsp olive oil over medium-low heat for 8-10 minutes until soft and sweet, not browned.',
      'Step 2 – Add herbs and lentils. Stir in 2 tsp Italian herbs and 220g red lentils. Cook for 1 minute so the lentils are coated in the flavoured oil.',
      'Step 3 – Simmer the sauce. Add 500g passata and about 300ml water. Season well. Simmer for 20-25 minutes, stirring often, until the lentils collapse and the sauce is thick. Add more water if needed.',
      'Step 4 – Cook the pasta. Cook 350g pasta in salted boiling water until al dente. Save a mug of pasta water before draining.',
      'Step 5 – Finish. Toss pasta with the lentil sauce, loosening with pasta water. The sauce should cling to the pasta like a proper bolognese, not sit separately.'
    ]
  },
  {
    id: 'lamb-kofta-plates',
    title: 'Lamb Kofta Plates',
    description: 'Spiced lamb koftas with couscous and salad.',
    servings: 4,
    protein: 'Lamb',
    cuisine: 'Mediterranean',
    timeMinutes: 35,
    calories: 680,
    difficulty: 'Medium',
    familyFriendly: true,
    ingredients: [i('lamb mince', 500, 'g', 'Meat & fish'), i('couscous', 280, 'g', 'Carbs'), i('cucumber', 1, '', 'Fruit & veg'), i('tomatoes', 4, '', 'Fruit & veg'), i('Greek yoghurt', 180, 'g', 'Dairy'), i('mint', 1, 'bunch', 'Fruit & veg'), i('cumin', 2, 'tsp', 'Herbs, spices & sauces')],
    method: [
      'Step 1 – Make the kofta mix. Combine 500g lamb mince with 2 tsp cumin, half the chopped mint, salt and black pepper. Mix until it just comes together.',
      'Step 2 – Shape. Divide into 8 koftas, shaping each into a short sausage. Press firmly so they hold together, but do not compact them too much.',
      'Step 3 – Cook the couscous. Put 280g couscous in a bowl with a pinch of salt. Cover with boiling water or stock, cover the bowl and stand for 5 minutes. Fluff with a fork.',
      'Step 4 – Cook the koftas. Heat a griddle or frying pan over medium-high heat. Cook the koftas for 8-10 minutes, turning regularly, until browned outside and cooked through.',
      'Step 5 – Serve. Chop cucumber and tomatoes. Mix yoghurt with remaining mint and a pinch of salt. Serve koftas over couscous with salad and yoghurt.'
    ]
  },
  {
    id: 'fish-tacos',
    title: 'Crispy Fish Tacos',
    description: 'Crispy white fish with crunchy slaw and lime yoghurt.',
    servings: 4,
    protein: 'Fish',
    cuisine: 'Mexican',
    timeMinutes: 30,
    calories: 570,
    difficulty: 'Medium',
    familyFriendly: true,
    ingredients: [i('white fish fillets', 500, 'g', 'Meat & fish'), i('tortillas', 8, '', 'Carbs'), i('cabbage', 0.5, '', 'Fruit & veg'), i('carrot', 2, '', 'Fruit & veg'), i('lime', 1, '', 'Fruit & veg'), i('Greek yoghurt', 120, 'g', 'Dairy'), i('paprika', 2, 'tsp', 'Herbs, spices & sauces')],
    method: [
      'Step 1 – Make the slaw. Finely shred the cabbage and grate the carrots. Toss with the juice of half the lime, a pinch of salt and black pepper. Leave to soften while you cook the fish.',
      'Step 2 – Make lime yoghurt. Mix 120g Greek yoghurt with the remaining lime juice and a little zest. Season lightly.',
      'Step 3 – Season the fish. Pat the fish dry and cut into chunky strips. Sprinkle with 2 tsp paprika, salt and pepper. Add a dusting of flour or semolina if you want it crisper.',
      'Step 4 – Cook the fish. Pan-fry in a little oil over medium-high heat for 2-3 minutes per side, or bake at 200°C / 180°C fan for 10-12 minutes, until opaque and flaking.',
      'Step 5 – Build tacos. Warm tortillas briefly, then fill with fish, slaw and lime yoghurt. Serve immediately so the fish stays crisp.'
    ]
  },
  {
    id: 'sausage-traybake',
    title: 'Sausage and Veg Traybake',
    description: 'Simple one-tray dinner with sausages, potatoes and vegetables.',
    servings: 4,
    protein: 'Pork',
    cuisine: 'British',
    timeMinutes: 50,
    calories: 700,
    difficulty: 'Easy',
    familyFriendly: true,
    ingredients: [i('sausages', 8, '', 'Meat & fish'), i('baby potatoes', 800, 'g', 'Carbs'), i('red onion', 2, '', 'Fruit & veg'), i('carrots', 4, '', 'Fruit & veg'), i('courgette', 2, '', 'Fruit & veg'), i('olive oil', 1, 'tbsp', 'Herbs, spices & sauces'), i('rosemary', 2, 'tsp', 'Herbs, spices & sauces')],
    method: [
      'Step 1 – Heat oven. Preheat to 200°C fan / 220°C conventional. Use the largest roasting tray you have so everything roasts rather than steams.',
      'Step 2 – Start the potatoes and carrots. Halve the baby potatoes and cut carrots into batons. Toss with 1 tbsp olive oil, rosemary, salt and pepper. Roast for 20 minutes.',
      'Step 3 – Add sausages and onions. Cut onions into wedges. Add onions and sausages to the tray, turning everything in the flavoured oil. Roast for another 20 minutes.',
      'Step 4 – Add courgette. Slice courgettes into thick half moons and add for the final 10-12 minutes so they soften without collapsing.',
      'Step 5 – Check and serve. Sausages should be browned and cooked through, potatoes golden and carrots tender. Rest for 5 minutes before serving.'
    ]
  },
  {
    id: 'chicken-tikka-naan',
    title: 'Chicken Tikka Naan Plates',
    description: 'Tikka-style chicken with naan, salad and yoghurt.',
    servings: 4,
    protein: 'Chicken',
    cuisine: 'Indian',
    timeMinutes: 35,
    calories: 640,
    difficulty: 'Easy',
    familyFriendly: true,
    ingredients: [i('chicken thighs', 700, 'g', 'Meat & fish'), i('tikka paste', 3, 'tbsp', 'Herbs, spices & sauces'), i('naan breads', 4, '', 'Carbs'), i('lettuce', 1, 'bag', 'Fruit & veg'), i('cucumber', 1, '', 'Fruit & veg'), i('Greek yoghurt', 160, 'g', 'Dairy'), i('mango chutney', 4, 'tbsp', 'Tins, jars & packets')],
    method: [
      'Step 1 – Marinate the chicken. Cut chicken thighs into large bite-sized pieces. Coat with 3 tbsp tikka paste and a spoonful of yoghurt if you want it milder. Leave for 10 minutes while you prep the salad.',
      'Step 2 – Cook the chicken. Heat a griddle or frying pan over medium-high heat. Cook the chicken for 12-15 minutes, turning often, until charred at the edges and cooked through.',
      'Step 3 – Prepare salad and sauce. Shred lettuce and slice cucumber. Season 160g Greek yoghurt with a pinch of salt and a squeeze of lemon if available.',
      'Step 4 – Warm the naans. Heat naan breads in a dry pan for 30-45 seconds each side or in a low oven wrapped in foil.',
      'Step 5 – Serve. Load naan plates with salad, tikka chicken, yoghurt and mango chutney. The chicken should be juicy with charred edges, not dry.'
    ]
  },
  {
    id: 'egg-fried-rice',
    title: 'Egg Fried Rice with Peas',
    description: 'A quick vegetarian rice dinner with eggs and vegetables.',
    servings: 4,
    protein: 'Vegetarian',
    cuisine: 'Asian',
    timeMinutes: 18,
    calories: 480,
    difficulty: 'Easy',
    familyFriendly: true,
    ingredients: [i('cooked rice', 500, 'g', 'Carbs'), i('eggs', 4, '', 'Dairy'), i('peas', 200, 'g', 'Frozen'), i('spring onions', 1, 'bunch', 'Fruit & veg'), i('soy sauce', 3, 'tbsp', 'Herbs, spices & sauces'), i('sesame oil', 1, 'tbsp', 'Herbs, spices & sauces'), i('carrot', 2, '', 'Fruit & veg')],
    method: [
      'Step 1 – Prepare everything first. Fried rice cooks quickly. Grate or finely dice the carrots, slice the spring onions and break up the cooked rice with your fingers so there are no cold clumps.',
      'Step 2 – Scramble the eggs. Heat a wok or large frying pan over medium-high heat. Add a little oil, pour in the beaten eggs and scramble for 30-60 seconds until just set. Remove to a plate.',
      'Step 3 – Fry the vegetables. Add carrots and peas to the hot pan. Stir-fry for 2-3 minutes until the peas are hot and the carrots have softened slightly.',
      'Step 4 – Add rice. Add the cooked rice and stir-fry for 3-4 minutes, pressing it against the pan so it heats through and picks up a little colour.',
      'Step 5 – Season and finish. Add soy sauce and sesame oil, then return the egg and add spring onions. Toss for 1 minute. Serve hot; the rice should be separate, not wet.'
    ]
  },
  {
    id: 'beef-burger-bowls',
    title: 'Beef Burger Bowls',
    description: 'Burger flavours without the bun, served with wedges and salad.',
    servings: 4,
    protein: 'Beef',
    cuisine: 'American',
    timeMinutes: 35,
    calories: 660,
    difficulty: 'Easy',
    familyFriendly: true,
    ingredients: [i('lean beef mince', 500, 'g', 'Meat & fish'), i('potatoes', 800, 'g', 'Carbs'), i('lettuce', 1, 'bag', 'Fruit & veg'), i('tomatoes', 4, '', 'Fruit & veg'), i('gherkins', 1, 'jar', 'Tins, jars & packets'), i('cheddar', 80, 'g', 'Dairy'), i('burger sauce', 4, 'tbsp', 'Herbs, spices & sauces')],
    method: [
      'Step 1 – Make wedges. Heat oven to 210°C fan / 230°C conventional. Cut potatoes into wedges, toss with 1 tbsp oil, salt and pepper, then roast for 30-35 minutes, turning once, until crisp outside and fluffy inside.',
      'Step 2 – Prepare the salad bowl base. Shred lettuce, chop tomatoes and slice gherkins. Keep these cold and crisp until serving.',
      'Step 3 – Brown the beef. Heat a frying pan over medium-high heat. Add the mince, season well and cook for 6-8 minutes, breaking it up, until browned with crispy edges. Drain excess fat if needed.',
      'Step 4 – Melt the cheese. Sprinkle grated cheddar over the hot beef and let it melt slightly off the heat. You want cheesy beef rather than a separate cheese layer.',
      'Step 5 – Build bowls. Add lettuce, tomatoes, gherkins and wedges to bowls. Top with cheesy beef and drizzle with burger sauce. Serve immediately.'
    ]
  },
  {
    id: 'prawn-linguine',
    title: 'Garlic Prawn Linguine',
    description: 'Light pasta with prawns, garlic, lemon and chilli.',
    servings: 4,
    protein: 'Fish',
    cuisine: 'Italian',
    timeMinutes: 22,
    calories: 530,
    difficulty: 'Easy',
    familyFriendly: true,
    ingredients: [i('prawns', 400, 'g', 'Meat & fish'), i('linguine', 350, 'g', 'Carbs'), i('garlic', 4, 'cloves', 'Fruit & veg'), i('lemon', 1, '', 'Fruit & veg'), i('chilli flakes', 1, 'tsp', 'Herbs, spices & sauces'), i('parsley', 1, 'bunch', 'Fruit & veg'), i('cherry tomatoes', 250, 'g', 'Fruit & veg')],
    method: [
      'Step 1 – Cook linguine. Bring a large pan of salted water to the boil and cook 350g linguine until just al dente. Save a mug of pasta water before draining.',
      'Step 2 – Start the sauce. While the pasta cooks, heat 1 tbsp olive oil in a wide pan over medium heat. Add sliced garlic and chilli flakes for 30-60 seconds until fragrant but not browned.',
      'Step 3 – Add tomatoes. Halve the cherry tomatoes and add to the pan. Cook for 3-4 minutes until they begin to soften and release juices.',
      'Step 4 – Cook prawns. Add prawns and cook for 2-3 minutes until pink and opaque. Do not overcook or they will become rubbery.',
      'Step 5 – Toss and finish. Add linguine, lemon zest, lemon juice and chopped parsley. Toss with a splash of pasta water until glossy. Serve straight away.'
    ]
  },
  {
    id: 'chicken-noodle-soup',
    title: 'Chicken Noodle Soup',
    description: 'Comforting broth with chicken, noodles and vegetables.',
    servings: 4,
    protein: 'Chicken',
    cuisine: 'Asian',
    timeMinutes: 30,
    calories: 460,
    difficulty: 'Easy',
    familyFriendly: true,
    ingredients: [i('chicken thighs', 600, 'g', 'Meat & fish'), i('chicken stock', 1, 'litre', 'Tins, jars & packets'), i('noodles', 250, 'g', 'Carbs'), i('carrot', 2, '', 'Fruit & veg'), i('spring onions', 1, 'bunch', 'Fruit & veg'), i('soy sauce', 3, 'tbsp', 'Herbs, spices & sauces'), i('ginger', 1, 'thumb', 'Fruit & veg')],
    method: [
      'Step 1 – Start the broth. Put 1 litre chicken stock in a pan with sliced ginger and 1 tbsp soy sauce. Bring to a gentle simmer.',
      'Step 2 – Poach the chicken. Add chicken thighs and simmer gently for 18-20 minutes until cooked through. Do not boil hard or the chicken can toughen.',
      'Step 3 – Shred chicken. Lift the chicken out, shred with two forks and return it to the broth. Taste and add more soy sauce if needed.',
      'Step 4 – Add vegetables and noodles. Slice carrots thinly and add to the broth with noodles. Simmer for 3-5 minutes until noodles are tender.',
      'Step 5 – Finish. Slice spring onions and scatter over the soup. Serve hot, making sure each bowl gets chicken, noodles and broth.'
    ]
  },
  {
    id: 'sweet-potato-curry',
    title: 'Sweet Potato Chickpea Curry',
    description: 'Mild, filling vegetarian curry.',
    servings: 4,
    protein: 'Vegetarian',
    cuisine: 'Indian',
    timeMinutes: 40,
    calories: 560,
    difficulty: 'Easy',
    familyFriendly: true,
    ingredients: [i('sweet potato', 700, 'g', 'Fruit & veg'), i('chickpeas', 2, 'tins', 'Tins, jars & packets'), i('coconut milk', 1, 'tin', 'Tins, jars & packets'), i('curry powder', 2, 'tbsp', 'Herbs, spices & sauces'), i('spinach', 150, 'g', 'Fruit & veg'), i('rice', 300, 'g', 'Carbs'), i('onion', 1, '', 'Fruit & veg')],
    method: [
      'Step 1 – Cook the rice. Rinse 300g rice and cook in salted boiling water for 10-12 minutes. Drain and keep covered.',
      'Step 2 – Soften the onion. Chop the onion and cook in 1 tbsp oil over medium heat for 6-8 minutes until soft and lightly golden.',
      'Step 3 – Bloom the spice. Add 2 tbsp curry powder and stir for 1 minute. It should smell fragrant but not burnt.',
      'Step 4 – Simmer the curry. Peel and cube the sweet potato. Add it with drained chickpeas, coconut milk and 200ml water. Simmer for 20-25 minutes until the sweet potato is tender and the sauce thickened.',
      'Step 5 – Finish. Stir in spinach for the final 2 minutes until wilted. Taste for salt and serve with rice.'
    ]
  },
  {
    id: 'bbq-chicken-potatoes',
    title: 'BBQ Chicken Loaded Potatoes',
    description: 'Baked potatoes topped with BBQ chicken and salad.',
    servings: 4,
    protein: 'Chicken',
    cuisine: 'American',
    timeMinutes: 50,
    calories: 620,
    difficulty: 'Easy',
    familyFriendly: true,
    ingredients: [i('baking potatoes', 4, '', 'Carbs'), i('cooked chicken', 500, 'g', 'Meat & fish'), i('BBQ sauce', 4, 'tbsp', 'Herbs, spices & sauces'), i('sweetcorn', 1, 'tin', 'Tins, jars & packets'), i('lettuce', 1, 'bag', 'Fruit & veg'), i('cheddar', 80, 'g', 'Dairy'), i('spring onions', 1, 'bunch', 'Fruit & veg')],
    method: [
      'Step 1 – Bake the potatoes. Heat oven to 200°C fan / 220°C conventional. Prick potatoes all over, rub lightly with oil and salt, then bake for 45-60 minutes until the skins are crisp and the centres soft.',
      'Step 2 – Prepare the topping. Shred or chop the cooked chicken. Warm it gently in a small pan with 4 tbsp BBQ sauce and a splash of water for 4-5 minutes until hot and coated.',
      'Step 3 – Prepare the fresh toppings. Drain sweetcorn, shred lettuce, grate cheddar and slice spring onions.',
      'Step 4 – Split and fluff. Cut open each potato and fluff the inside with a fork. Add a pinch of salt and pepper.',
      'Step 5 – Load. Top with BBQ chicken, cheddar, sweetcorn and spring onions. Serve lettuce on the side so it stays crisp.'
    ]
  },
  {
    id: 'tuna-pasta-bake',
    title: 'Tuna Pasta Bake',
    description: 'Classic family pasta bake with tuna, tomato and cheese.',
    servings: 4,
    protein: 'Fish',
    cuisine: 'British',
    timeMinutes: 45,
    calories: 640,
    difficulty: 'Easy',
    familyFriendly: true,
    ingredients: [i('tuna', 2, 'tins', 'Tins, jars & packets'), i('pasta', 350, 'g', 'Carbs'), i('passata', 500, 'g', 'Tins, jars & packets'), i('sweetcorn', 1, 'tin', 'Tins, jars & packets'), i('cheddar', 120, 'g', 'Dairy'), i('onion', 1, '', 'Fruit & veg'), i('garlic', 2, 'cloves', 'Fruit & veg')],
    method: [
      'Step 1 – Heat oven and cook pasta. Heat oven to 200°C fan / 220°C conventional. Cook 350g pasta in salted boiling water for 2 minutes less than the packet says. Drain.',
      'Step 2 – Make the sauce. Finely chop onion and cook in 1 tbsp oil for 5-6 minutes until soft. Add crushed garlic for 1 minute, then add passata. Simmer for 8-10 minutes and season well.',
      'Step 3 – Add tuna and sweetcorn. Drain tuna and sweetcorn. Fold both into the sauce gently so the tuna stays in some chunks rather than turning mushy.',
      'Step 4 – Assemble. Mix pasta with the sauce and spoon into a baking dish. Top evenly with grated cheddar.',
      'Step 5 – Bake. Bake for 15-20 minutes until bubbling at the edges and golden on top. Rest for 5 minutes before serving.'
    ]
  },
  {
    id: 'steak-flatbread-salad',
    title: 'Steak Flatbread Salad',
    description: 'Sliced steak, salad and yoghurt dressing on warm flatbreads.',
    servings: 4,
    protein: 'Beef',
    cuisine: 'Mediterranean',
    timeMinutes: 25,
    calories: 610,
    difficulty: 'Medium',
    familyFriendly: true,
    ingredients: [i('steak', 600, 'g', 'Meat & fish'), i('flatbreads', 4, '', 'Carbs'), i('rocket', 1, 'bag', 'Fruit & veg'), i('tomatoes', 4, '', 'Fruit & veg'), i('red onion', 1, '', 'Fruit & veg'), i('Greek yoghurt', 140, 'g', 'Dairy'), i('lemon', 1, '', 'Fruit & veg')],
    method: [
      'Step 1 – Make the dressing. Mix 140g Greek yoghurt with lemon zest, lemon juice, salt and black pepper. It should be fresh and sharp enough to cut through the steak.',
      'Step 2 – Prepare the salad. Slice tomatoes and red onion thinly. Toss with rocket just before serving, not earlier, so it does not wilt.',
      'Step 3 – Cook the steak. Pat steak dry and season generously. Heat a heavy pan until very hot. Sear for 2-4 minutes per side depending on thickness and how pink you like it.',
      'Step 4 – Rest and slice. Rest steak on a board for 5-8 minutes. Slice thinly across the grain so it stays tender.',
      'Step 5 – Build flatbreads. Warm flatbreads briefly, spread with lemon yoghurt, add salad and sliced steak. Spoon over any resting juices and serve immediately.'
    ]
  }
];
