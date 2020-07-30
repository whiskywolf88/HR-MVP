import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chicken: null,
      beef: null,
      fish: null,
      vegetarian: null,
    };
  }

  render() {
    return( <>
    <form><label for="search"><input></input><button type="submit">Get Cookin'!</button></label></form>
    </>)
  }
}

export default Search;