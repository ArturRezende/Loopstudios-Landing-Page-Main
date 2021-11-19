import React, { Component } from "react";

//images
import ImageInteractive from "./img/image-interactive.jpg";

class Main__Leader extends Component {
  render() {
    return (
      <section className="main-leader">
        <div className="container">
          <div className="main-leader__container">
            <figure className="main-leader__contents">
              <img src={ImageInteractive} alt="img-interactive" />
              <figcaption>
                <h2>The leader in interactive VR</h2>
                <p>
                  Founded in 2011, Loopstudios has been producing world-class
                  virtual reality projects for some of the best companies around
                  the globe. Our award-winning creations have transformed
                  businesses through digital experiences that bind to their
                  brand.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    );
  }
}

export default Main__Leader;
