import React from "react";
import Search from "./Search";
import Recipes from "./Recipes";
import Paginator from "./Paginator";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recipes: [], searched: false };
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
        console.log(data);
        recipeResults = data.hits;
        this.setState({ recipes: recipeResults });
      })
      .then(() => {
        this.setState({ searched: true });
      })
      .catch((err) => {
        console.error("No recipes found!");
      });
  }

  render() {
    const { name } = this.props;
    return (
      <div className="body">
        <h1 className="greeting">Find a Recipe</h1>
        <div>
          <Search getRecipes={this.getRecipes} />
        </div>
        <div>
          <Recipes recipes={this.state.recipes} />
        </div>
        <div className="paginator">
          {this.state.searched ? <Paginator /> : null}
        </div>
      </div>
    );
  }
}

export default App;
