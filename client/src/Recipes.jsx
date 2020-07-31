import React from "react";

const Recipes = ({ recipes }) => {
  return (
    <div>
      {recipes.map((item, index) => {
        let { recipe } = item;
        console.log(recipe);
        return (
          <div key={index} className="recipe-container">
            <h3 className="recipe-name">{recipe.label}</h3>
            <img src={recipe.image}></img>
            {/* <p className="ingredients-list">{recipe.ingredients}</p> */}
        <p className="recipe">{'- '}{recipe.ingredientLines}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Recipes;

// {uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_3921adf30bb0c9736b9ac30f447f8a63", label: "Roast Beef", image: "https://www.edamam.com/web-img/98a/98aa5d5cc0d88b28c2b9221a099b1a14.jpg", source: "Saveur", url: "http://www.saveur.com/article/Recipes/Roast-Beef", …}
// calories: 7212.227545168801
// cautions: []
// dietLabels: ["Low-Carb"]
// digest: (26) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// healthLabels: (4) ["Sugar-Conscious", "Peanut-Free", "Tree-Nut-Free", "Alcohol-Free"]
// image: "https://www.edamam.com/web-img/98a/98aa5d5cc0d88b28c2b9221a099b1a14.jpg"
// ingredientLines: (2) ["8-lb. shell roast of beef", "Coarse salt and freshly ground black pepper"]
// ingredients: (3) [{…}, {…}, {…}]
// label: "Roast Beef"
// shareAs: "http://www.edamam.com/recipe/roast-beef-3921adf30bb0c9736b9ac30f447f8a63/beef"
// source: "Saveur"
// totalDaily: {ENERC_KCAL: {…}, FAT: {…}, FASAT: {…}, CHOCDF: {…}, FIBTG: {…}, …}
// totalNutrients: {ENERC_KCAL: {…}, FAT: {…}, FASAT: {…}, FATRN: {…}, FAMS: {…}, …}
// totalTime: 127
// totalWeight: 3656.4951564046273
// uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_3921adf30bb0c9736b9ac30f447f8a63"
// url: "http://www.saveur.com/article/Recipes/Roast-Beef"
// yield: 8
