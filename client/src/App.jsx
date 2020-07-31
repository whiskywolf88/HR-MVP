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
        this.setState({ recipes: recipeResults });
      })
      .catch((err) => {
        console.error("No recipes found!");
      });
  }

  render() {
    const { name } = this.props;
    return (
      <div className='body'>
        <h1 className='greeting'>Find a Recipe</h1>
        <div>
          <Search getRecipes={this.getRecipes} />
        </div>
        <div >
          <Recipes recipes={this.state.recipes} />
        </div>
      </div>
    );
  }
}

export default App;
