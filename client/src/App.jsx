import React from "react";
import Search from "./Search";
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
        params: queries,
      })
      .then((res) => {
        recipeResults.push(res.results);
        this.setState({ recipes: recipeResults });
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
        </div>
      </>
    );
  }
}

export default App;
