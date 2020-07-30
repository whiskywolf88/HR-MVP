import React from "react";
import Search from "./Search";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name } = this.props;
    return (
      <>
        <h1>Hello {name}</h1>
        <div>
          <Search />
        </div>
      </>
    );
  }
}

export default App;
