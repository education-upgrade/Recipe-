# Family Dinner Planner

A clean local-first React prototype for planning family dinners.

## What works in this version

- 20 local family dinner recipes
- Discover tab with decision-tree style filters
- Recipe library with search
- Clickable recipe cards with full recipe modal
- Weekly planner for Monday to Sunday
- Planner saved in browser localStorage
- Recipes include servings, ingredient quantities and supermarket categories
- Shopping list combines matching quantities where the item and unit match
- Shopping list is grouped by supermarket section
- No API calls, databases or async loading states

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Build

```bash
npm run build
```

## Current sensible next upgrades

1. Add more recipes and tags such as quick, high protein, low calorie, freezer friendly and fakeaway.
2. Add serving-size adjustment so ingredients scale up or down.
3. Add checkboxes for items already in the cupboard.
4. Add favourites.
5. Add user accounts/database only after the local prototype is stable.
