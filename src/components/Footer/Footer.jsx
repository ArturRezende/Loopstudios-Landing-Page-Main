import React, { Component } from "react";

//images
import Logo from "./img/logo.svg";
import IconFacebook from "./img/icon-facebook.svg";
import IconTwitter from "./img/icon-twitter.svg";
import IconPinterest from "./img/icon-pinterest.svg";
import IconInstagram from "./img/icon-instagram.svg";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container footer__container">
          {/* footer-menu */}
          <div className="footer__navigation">
            <a href="index.html" className="footer__logo">
              <img src={Logo} alt="loopstudios-logo-footer" />
            </a>

            <ul className="footer__menu">
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
          </div>

          {/* social networks */}
          <div className="footer__social-networks">
            <ul>
              <li>
                <a href=" #">
                  <img src={IconFacebook} alt="loopstudios-facebook-icon" />
                </a>
              </li>
              <li>
                <a href=" #">
                  <img src={IconTwitter} alt="loopstudios-twitter-icon" />
                </a>
              </li>
              <li>
                <a href=" #">
                  <img src={IconPinterest} alt="loopstudios-pinterest-icon" />
                </a>
              </li>
              <li>
                <a href=" #">
                  <img src={IconInstagram} alt="loopstudios-instagram-icon" />
                </a>
              </li>
            </ul>
            <p>© 2021 Loopstudios. All rights reserved</p>
          </div>
        </div>

        {/* attribution */}
        <div className="attribution">
          <span>Challenge by </span>
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          <span> Coded by</span>
          <a href="https://www.frontendmentor.io/profile/ArturdaSilvaRezende">
            {" "}
            Artur da Silva Rezende
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
