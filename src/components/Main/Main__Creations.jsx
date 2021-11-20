import React, { Component } from "react";
import CreationsDesktop from "./Creations_Desktop";
import CreationsMobile from "./Creations__Mobile";

class MainCreations extends Component {
  render() {
    return (
      <section className="main-creations">
        <div className="main-creations__title">
          <h1>Our creations</h1>
          <button type="button" className="main-creations__see-all">
            See all
          </button>
        </div>
        <CreationsMobile />
        <CreationsDesktop />
      </section>
    );
  }
}

export default MainCreations;
