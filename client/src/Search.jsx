import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queries: {
        chicken: null,
        beef: null,
        fish: null,
        vegetarian: null,
        option: "",
      },
    };
  }

  render() {
    return (
      <>
        <form>
          <label for="search">
            <input></input>
            <button
              onClick={
                ((event) => event, this.props.getRecipes(this.state.queries))
              }
            >
              Get Cookin'!
            </button>
          </label>
        </form>
      </>
    );
  }
}

export default Search;
