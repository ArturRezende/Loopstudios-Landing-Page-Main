import React, { Component } from "react";

//style
import "./App.scss";

//components
import Header from "./Header/Header";
import Main from "./Main/Main";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
