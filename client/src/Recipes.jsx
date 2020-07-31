import React from "react";
import RecipeModal from "./RecipeModal";

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: { ingredientLines: [] },
      recipeModal: false,
    };
    this.showRecipeModal = this.showRecipeModal.bind(this);
  }

  showRecipeModal() {
    this.state.recipeModal
      ? this.setState({ recipeModal: false })
      : this.setState({ recipeModal: true });
  }

  setRecipe(recipe) {
    this.setState({
      recipe: recipe,
    });
  }

  render() {
    const { recipes } = this.props;
    return (
      <div>
        <div>
          <RecipeModal
            show={this.state.recipeModal}
            onHide={() => this.showRecipeModal()}
            recipe={this.state.recipe}
          />
        </div>
        <div className="recipes-container">
          {recipes.map((item, index) => {
            let { recipe } = item;
            console.log(recipe);
            return (
              <div
                key={index}
                className="recipe-card"
                onClick={this.showRecipeModal}
                onMouseEnter={() => this.setRecipe(recipe)}
              >
                <h3 className="recipe-name">{recipe.label}</h3>
                <img src={recipe.image}></img>
                {/* <p className="ingredients-list">{recipe.ingredients}</p> */}
                <ul>
                  <li className="recipe-ingredients">
                    {recipe.ingredientLines.length}
                    {" ingredients"}
                  </li>
                  <li className="recipe-time">
                    {recipe.totalTime > 0
                      ? recipe.totalTime + " minutes prep time"
                      : "click for details"}
                    {/* {" minutes prep time"} */}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

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
