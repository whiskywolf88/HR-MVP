import React from "react";
import Allergies from "./AllergiesModal";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      allergies: "",
      modal: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  handleChange() {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  showModal() {
    this.state.modal
      ? this.setState({ modal: false })
      : this.setState({ modal: true });
  }

  render() {
    return (
      <div className="recipe-search">
        <div>
          <Allergies
            show={this.state.modal}
            onHide={this.showModal}
            handleChange={this.handleChange}
          />
        </div>
        <form>
          <label htmlFor="search">
            <input
              type="text"
              className="search-bar"
              name="query"
              onChange={this.handleChange}
            ></input>
            <button
              className="search-button"
              onClick={(event) =>
                this.props.getRecipes(event, this.state.query, this.state.allergies)
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
