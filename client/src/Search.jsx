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
      },
      option: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const value = event.target.value;
    this.setState({ option: value });
  }

  render() {
    return (
      <div className="recipe-search">
        <form>
          <label htmlFor="search">
            <input type="text" className="search-bar" onChange={this.handleChange}></input>
            <button
              className="search-button"
              onClick={(event) =>
                this.props.getRecipes(event, this.state.option)
              }
            >
              Get Cookin'!
            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default Search;
