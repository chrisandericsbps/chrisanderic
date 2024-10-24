const recipe = document.querySelector('.recipe');
const el = document.getElementById('select_style');
el.addEventListener('change', (e) => {
  recipe.classList.remove('recipe--old-style', 'recipe--modern')
  recipe.classList.add(`recipe--${e.target.value}`);
})