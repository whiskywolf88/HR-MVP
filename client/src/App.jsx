import React from "react";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>Hello {name}</h1>
      </div>
    );
  }
}

export default App;
