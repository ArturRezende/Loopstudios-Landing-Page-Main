import React, { Component } from "react";

//images
import HeroMobile from "./img/image-hero-mobile.jpg";
import HeroDesktop from "./img/image-hero-desktop.jpg";
import Logo from "./img/logo.svg";
import ShowMenu from "./img/icon-hamburger.svg";
import HideMenu from "./img/icon-close.svg";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changeImage: false,
      menu: false,
    };

    this.menuControl = React.createRef();
  }

  componentDidMount() {
    window.onresize = () => {
      if (window.innerWidth > 599) {
        this.menuControl.current.classList.remove("slideOutLeft");
        this.menuControl.current.style.transform = "translateX(0)";
      } else {
        this.menuControl.current.classList.remove("slideInLeft");
        this.menuControl.current.style.transform = "translateX(-100%)";
      }
    };
  }

  handleClickMenu() {
    this.setState({ changeImage: !this.state.changeImage });
    if (this.state.menu === false) {
      this.menuControl.current.classList.remove("slideOutLeft");
      this.menuControl.current.classList.add("slideInLeft");
      return this.setState({ menu: true });
    } else {
      this.menuControl.current.classList.add("slideOutLeft");
      this.menuControl.current.classList.remove("slideInLeft");
      return this.setState({ menu: false });
    }
  }

  render() {
    return (
      <header className="header">
        {/* image hero-modile */}
        <img
          className="header__hero header__hero--mobile"
          src={HeroMobile}
          alt="loopstudios-img-hero-mobile"
        />

        {/* image hero-desktop */}
        <img
          className="header__hero header__hero--desktop"
          src={HeroDesktop}
          alt="loopstudios-img-hero-desktop"
        />

        {/* contents */}
        <div className="container header__contents">
          <a href="index.html" className="header__logo">
            <img src={Logo} alt="loopstudios-logo" />
          </a>

          {/* menu control */}
          <button
            type="button"
            className="header__menuControl"
            onClick={() => this.handleClickMenu()}
          >
            <img
              src={this.state.changeImage ? HideMenu : ShowMenu}
              alt="icon-hamburger-menu"
            />
          </button>

          {/* menu navigation */}
          <nav className="header__navbar" ref={this.menuControl}>
            <ul>
              <li>
                <a href=" #">About</a>
              </li>
              <li>
                <a href=" #">Careers</a>
              </li>
              <li>
                <a href=" #">Events</a>
              </li>
              <li>
                <a href=" #">Products</a>
              </li>
              <li>
                <a href=" #">Support</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* description */}
        <div className="header__hero-description">
          <p>Immersive experiences that deliver</p>
        </div>
      </header>
    );
  }
}

export default Header;
