const recipes = [
  {
    title: "Tarte",
    ingredients: ["farine", "sucre", "beurre", "pomme", "oeuf"],
  },
  {
    title: "Pain",
    ingredients: ["farine"],
  },
  {
    title: "Choux",
    ingredients: ["farine", "sucre", "beurre", "oeuf", "creme"],
  },
];

const bakeryIngredients = new Set();

recipes.forEach((recipe) => {
  recipe.ingredients.forEach((ingredient) => {
    bakeryIngredients.add(ingredient);
  });
});
console.log(Array.from(bakeryIngredients));
