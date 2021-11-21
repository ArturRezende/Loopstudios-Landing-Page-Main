import React, { Component } from "react";
import MainCreations from "./Main__Creations";

//main components
import MainLeader from "./Main__Leader";

class Main extends Component {
  render() {
    return (
      <main>
        <MainLeader />
        <MainCreations />
      </main>
    );
  }
}

export default Main;
