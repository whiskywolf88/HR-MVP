import React from "react";
import Search from "./Search";
import Recipes from "./Recipes";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recipes: [] };
    this.getRecipes = this.getRecipes.bind(this);
  }

  getRecipes(event, queries) {
    event.preventDefault();
    let recipeResults = [];
    axios
      .get("/recipes", {
        params: { query: queries },
      })
      .then(({ data }) => {
        recipeResults = data.hits;
        this.setState({ recipes: recipeResults }, () =>
          console.log(this.state.recipes)
        );
      })
      .catch((err) => {
        console.error("No recipes found!");
      });
  }

  render() {
    const { name } = this.props;
    return (
      <>
        <h1>Hello {name}</h1>
        <div>
          <Search getRecipes={this.getRecipes} />
          <Recipes recipes={this.state.recipes} />
        </div>
      </>
    );
  }
}

export default App;
