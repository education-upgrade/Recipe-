import { recipes as baseRecipes } from './recipes.js';
import { extraRecipes } from './extraRecipes.js';
import { getRecipeMethodStatus, isRecipeAudited } from './recipeDetails.js';
import './styles.css';
import './plannerExtras.css';
import './referenceLayout.css';
import './tightMobile.css';
import './filterPanel.css';
import './twoColumnCards.css';

const recipes = [...baseRecipes, ...extraRecipes];

export default function AdminAudit() {
  const rows = recipes
    .map((recipe) => ({
      id: recipe.id,
      title: recipe.title,
      protein: recipe.protein,
      cuisine: recipe.cuisine,
      status: getRecipeMethodStatus(recipe),
      audited: isRecipeAudited(recipe),
    }))
    .sort((a, b) => Number(a.audited) - Number(b.audited) || a.title.localeCompare(b.title));

  const auditedCount = rows.filter((row) => row.audited).length;
  const genericCount = rows.length - auditedCount;
  const coverage = rows.length ? Math.round((auditedCount / rows.length) * 100) : 0;

  return (
    <main>
      <header className="hero">
        <p className="eyebrow">Admin Audit</p>
        <h1>Recipe method coverage</h1>
        <p>Live check of which recipes use audited methods and which still need individual rewriting.</p>
      </header>

      <section className="panel">
        <div className="nutrition-grid">
          <div><strong>{rows.length}</strong><span>Total recipes</span></div>
          <div><strong>{auditedCount}</strong><span>Audited</span></div>
          <div><strong>{genericCount}</strong><span>Generic / short</span></div>
          <div><strong>{coverage}%</strong><span>Coverage</span></div>
        </div>

        <div className="shopping-groups">
          <section className="shopping-group">
            <h3>Needs attention</h3>
            <ul className="shopping-list shopping-list--interactive">
              {rows.filter((row) => !row.audited).map((row) => (
                <li key={row.id}>
                  <div className="shopping-check" style={{ cursor: 'default' }}>
                    <span className="shopping-checkbox">!</span>
                    <span>{row.title} — {row.status}</span>
                  </div>
                </li>
              ))}
              {genericCount === 0 && <li>All recipes are audited.</li>}
            </ul>
          </section>

          <section className="shopping-group">
            <h3>Audited recipes</h3>
            <ul className="shopping-list shopping-list--interactive">
              {rows.filter((row) => row.audited).map((row) => (
                <li key={row.id}>
                  <div className="shopping-check" style={{ cursor: 'default' }}>
                    <span className="shopping-checkbox">✓</span>
                    <span>{row.title} — {row.status}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
