import React, { Component } from "react";
import logo from "./earworm.jpeg";
import "./App.css";

class App extends Component {
  state = {
    count: 0
  };
  // componentDidMount = () => {
  //   setInterval(() => {
  //     this.setState({
  //       count: this.state.count + 1
  //     });
  //   }, 500);
  // };

  render() {
    return <div className="App">Hello</div>;
  }
}

export default App;
