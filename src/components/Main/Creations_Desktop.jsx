import React, { Component } from "react";

//images
import ImageDeepEarth from "./img/desktop/image-deep-earth.jpg";
import ImageNightArcade from "./img/desktop/image-night-arcade.jpg";
import ImageSoccerTeam from "./img/desktop/image-soccer-team.jpg";
import ImageGrid from "./img/desktop/image-grid.jpg";
import ImageFromAbove from "./img/desktop/image-from-above.jpg";
import ImagePocketBorealis from "./img/desktop/image-pocket-borealis.jpg";
import ImageCuriosity from "./img/desktop/image-curiosity.jpg";
import ImageFisheye from "./img/desktop/image-fisheye.jpg";

class CreationsDesktop extends Component {
  render() {
    return (
      <section className="creations-desktop">
        {/* Image Deep Earth */}
        <figure>
          <div className="creations-desktop__bg"></div>
          <img src={ImageDeepEarth} alt="img-deep-earth" />
          <figcaption>
            <h2>
              <span>Deep</span>
              <span> earth</span>
            </h2>
          </figcaption>
        </figure>

        {/* Image Night Arcade */}
        <figure>
          <div className="creations-desktop__bg"></div>
          <img src={ImageNightArcade} alt="img-night-arcade" />
          <figcaption>
            <h2>
              <span>Night</span>
              <span> arcade</span>
            </h2>
          </figcaption>
        </figure>

        {/* Image Soccer Team */}
        <figure>
          <div className="creations-desktop__bg"></div>
          <img src={ImageSoccerTeam} alt="img-soccer-team" />
          <figcaption>
            <h2>
              <span>Soccer</span>
              <span> team VR</span>
            </h2>
          </figcaption>
        </figure>

        {/* Image Grid */}
        <figure>
          <div className="creations-desktop__bg"></div>
          <img src={ImageGrid} alt="img-grid" />
          <figcaption>
            <h2>
              <span>The</span>
              <span> Grid</span>
            </h2>
          </figcaption>
        </figure>

        {/* Image From Above */}
        <figure>
          <div className="creations-desktop__bg"></div>
          <img src={ImageFromAbove} alt="img-from-above" />
          <figcaption>
            <h2>
              <span>From Up</span>
              <span> Above Vr</span>
            </h2>
          </figcaption>
        </figure>

        {/* Image Pocket Borealis */}
        <figure>
          <div className="creations-desktop__bg"></div>
          <img src={ImagePocketBorealis} alt="img-pocket-borelis" />
          <figcaption>
            <h2>
              <span>Pocket</span>
              <span> borealis</span>
            </h2>
          </figcaption>
        </figure>

        {/* Image Curiosity */}
        <figure>
          <div className="creations-desktop__bg"></div>
          <img src={ImageCuriosity} alt="img-curiosity" />
          <figcaption>
            <h2>
              <span>The</span>
              <span> curiosity</span>
            </h2>
          </figcaption>
        </figure>

        {/* Image Fisheye */}
        <figure>
          <div className="creations-desktop__bg"></div>
          <img src={ImageFisheye} alt="img-fisheye" />
          <figcaption>
            <h2>
              <span>Make it</span>
              <span> fisheye</span>
            </h2>
          </figcaption>
        </figure>
      </section>
    );
  }
}

export default CreationsDesktop;
