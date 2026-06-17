# Recipe Method Audit

Last updated: current audit pass

## Summary

Total recipes in app: **57**

| Area | Count | Status |
|---|---:|---|
| Core recipes in `src/recipes.js` | 20 | Individually rewritten with step-by-step methods |
| Extra recipes with audited override methods | 21 | Fully audited and shown through `auditedMethods` lookup |
| Extra recipes still using generic/fallback methods | 16 | Need individual rewriting next |
| Orphan audited methods with no matching recipe ID | 0 | No mismatch found |

## How method selection currently works

`getDetailedMethod(recipe)` now checks in this order:

1. Audited override methods from:
   - `src/auditedMethods.js`
   - `src/auditedMethodsBatch2.js`
   - `src/auditedMethodsBatch3.js`
2. Individual `Step...` methods already written directly inside `src/recipes.js`
3. Generic fallback method generator for recipes not yet audited

This means the audited recipes are correctly taking priority over the generic helper.

---

## Core recipe coverage — `src/recipes.js`

These have individual step-by-step methods directly in the recipe object.

| Recipe ID | Recipe | Status |
|---|---|---|
| `chicken-fajita-bowls` | Chicken Fajita Rice Bowls | Individual method in core file |
| `turkey-meatball-pasta` | Turkey Meatball Pasta | Individual method in core file |
| `salmon-teriyaki-noodles` | Salmon Teriyaki Noodles | Individual method in core file |
| `beef-chilli` | Beef Chilli | Individual method in core file |
| `halloumi-flatbreads` | Halloumi Flatbreads | Individual method in core file |
| `chicken-caesar-wraps` | Chicken Caesar Wraps | Individual method in core file |
| `pork-stir-fry` | Pork Stir-Fry with Rice | Individual method in core file |
| `lentil-bolognese` | Lentil Bolognese | Individual method in core file |
| `lamb-kofta-plates` | Lamb Kofta Plates | Individual method in core file |
| `fish-tacos` | Crispy Fish Tacos | Individual method in core file |
| `sausage-traybake` | Sausage and Veg Traybake | Individual method in core file |
| `chicken-tikka-naan` | Chicken Tikka Naan Plates | Individual method in core file |
| `egg-fried-rice` | Egg Fried Rice with Peas | Individual method in core file |
| `beef-burger-bowls` | Beef Burger Bowls | Individual method in core file |
| `prawn-linguine` | Garlic Prawn Linguine | Individual method in core file |
| `chicken-noodle-soup` | Chicken Noodle Soup | Individual method in core file |
| `sweet-potato-curry` | Sweet Potato Chickpea Curry | Individual method in core file |
| `bbq-chicken-potatoes` | BBQ Chicken Loaded Potatoes | Individual method in core file |
| `tuna-pasta-bake` | Tuna Pasta Bake | Individual method in core file |
| `steak-flatbread-salad` | Steak Flatbread Salad | Individual method in core file |

---

## Extra recipes already audited

These have full hand-written methods in the audited method files and should now display properly in the app.

| Recipe ID | Recipe | Audit file |
|---|---|---|
| `chicken-stroganoff` | Chicken Stroganoff | `auditedMethods.js` |
| `crispy-greek-filo-pie` | Crispy Greek Filo Pie | `auditedMethods.js` |
| `pork-and-bean-cassoulet` | Pork and Bean Cassoulet | `auditedMethods.js` |
| `marrakech-beef-chilli` | Marrakech Beef Chilli | `auditedMethods.js` |
| `berbere-chicken-potato-traybake` | Berbere Chicken, Potato and Greens Traybake | `auditedMethods.js` |
| `sweet-chilli-peanut-chicken-noodle-salad` | Sweet Chilli Peanut Chicken Noodle Salad | `auditedMethods.js` |
| `hidden-veg-tomato-pasta` | Hidden Veg Tomato Pasta | `auditedMethods.js` |
| `cheesy-tomato-gnocchi-bake` | Cheesy Tomato Gnocchi Bake | `auditedMethods.js` |
| `hot-honey-baked-feta` | Hot Honey Baked Feta with Tomatoes | `auditedMethods.js` |
| `slow-cooker-bbq-pulled-pork` | Slow Cooker BBQ Pulled Pork | `auditedMethods.js` |
| `simple-coq-au-vin` | Simple Coq au Vin | `auditedMethods.js` |
| `french-chicken-peas-bacon` | French Chicken with Peas and Bacon | `auditedMethodsBatch2.js` |
| `crispy-chilli-chicken-traybake` | Crispy Chilli Chicken Traybake | `auditedMethodsBatch2.js` |
| `lamb-boulangere` | Roast Lamb with Boulangere Potatoes | `auditedMethodsBatch2.js` |
| `honey-soy-chicken-sesame-broccoli` | Honey Soy Chicken with Sesame Broccoli | `auditedMethodsBatch2.js` |
| `grana-schnitzel-sandwich` | Crispy Parmesan Chicken Schnitzel Sandwich | `auditedMethodsBatch2.js` |
| `goats-cheese-spinach-filo-pie` | Goat Cheese, Spinach and Onion Filo Pie | `auditedMethodsBatch3.js` |
| `chicken-provencal-garlic-potatoes` | Chicken Provencal with Sticky Garlic Potatoes | `auditedMethodsBatch3.js` |
| `homemade-rotisserie-chicken` | Homemade Rotisserie-Style Chicken | `auditedMethodsBatch3.js` |
| `creamy-tuscan-bean-skillet` | Creamy Tuscan Bean and Sun-Dried Tomato Skillet | `auditedMethodsBatch3.js` |
| `chipotle-chicken-polenta` | Crispy Chipotle Chicken with Cheesy Polenta | `auditedMethodsBatch3.js` |

---

## Extra recipes still needing individual audit

These are still relying on the generic fallback method generator or short placeholder recipe text.

| Priority | Recipe ID | Recipe | Reason to prioritise |
|---:|---|---|---|
| 1 | `korean-honey-sesame-chicken` | Korean Chilli, Sesame and Honey Chicken | Sticky glaze timing matters; easy to burn |
| 2 | `chicken-chow-mein` | Chicken Chow Mein | Needs precise noodle and stir-fry timing |
| 3 | `crispy-chilli-beef` | Crispy Chilli Beef | Needs careful coating/frying/glazing method |
| 4 | `steak-tagliatelle` | Steak Tagliatelle | Steak resting and sauce timing matter |
| 5 | `cheese-and-onion-pie` | Firm Cheese and Onion Pie | Important user-favourite recipe; should match benchmark style |
| 6 | `garlic-tomato-cheese-pizza-bread` | Punchy Garlic Tomato Cheese Pizza Bread | Pizza steel process needs detail |
| 7 | `thai-chicken-noodle-soup` | Thai-Style Chicken Noodle Soup | Needs proper broth sequencing and seasoning cues |
| 8 | `popl-style-smash-burgers` | Aged Beef Smash Burgers | Needs precise smash-burger timing and sauce method |
| 9 | `cast-iron-harissa-chicken` | Cast Iron Harissa Chicken with Lemon Yoghurt | Needs cast iron/oven sequencing |
| 10 | `baked-feta-lamb-kofta-platter` | Baked Feta and Lamb Kofta Platter | Multi-component platter needs sequencing |
| 11 | `semolina-chicken-tenders-caesar` | Semolina Chicken Tenders with Lighter Caesar Salad | Needs coating and bake/air-fry detail |
| 12 | `courgette-harissa-lemon-yoghurt` | Charred Courgettes with Harissa and Lemon Yoghurt | Needs texture cues and pan/oven timing |
| 13 | `twenty-four-hour-pizza-night` | 24-Hour Homemade Pizza Night | High-value recipe; needs full dough process |
| 14 | `mediterranean-summer-platter` | Mediterranean Summer Sharing Platter | Multi-component platter needs timing order |
| 15 | `healthy-fish-taco-bowls` | Healthy Fish Taco Bowls | Fish cooking and bowl assembly need detail |
| 16 | `lamb-harissa-flatbreads` | Harissa Lamb Flatbreads | Needs lamb browning, veg charring and build order |

---

## Next recommended batch

The next batch should be:

1. `korean-honey-sesame-chicken`
2. `chicken-chow-mein`
3. `crispy-chilli-beef`
4. `steak-tagliatelle`
5. `cheese-and-onion-pie`

This batch contains three fakeaway/high-use meals, one steak pasta where timing matters, and the cheese and onion pie that should become the benchmark recipe inside the app.

---

## Later audit needed

After all methods are rewritten, complete a separate nutrition audit:

- calories per serving
- protein per serving
- 5-a-day count
- prep time vs cook time
- freezer-friendly flag
- leftover suitability
- family-friendly rating
