import * as React from 'react';
import { Link } from "react-router-dom";

class Footer extends React.Component {
  state = {
    email: "",
    isFooterDDShowing: false
  };

  handleOnChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    //Do something with the state.
    document.getElementById("footerSubscribe").reset();
  }

  renderLinkBoxes() {
    return [
      <div key="1" className="footer-linkbox">
        <div className="footer-subtitle">Contact Us</div>
        <a className="footer-link" href="mailto:admin@chingu.io">
          admin@chingu.io
        </a>
      </div>,
      <div key="2" className="footer-linkbox">
        <div className="footer-subtitle">Company</div>
        <a className="footer-link" href="mailto:admin@chingu.io">
          Contact Us
        </a>
        {/* TODO: uncomment when complete <Link className="footer-link" to="/help">
          Help Page
        </Link> */}
        <Link className="footer-link" to="/team">
          Our Team
        </Link>
        <Link className="footer-link" to="/privacy">
          Privacy Policy
        </Link>
      </div>,
    ];
  }

  renderSocialIcons() {
    return (
      <div className="connection">
        <a className="connection-icon" href="https://medium.com/chingu">
          <i className="fab fa-medium-m fa-2x" />
        </a>
        <a
          className="connection-icon"
          href="https://www.youtube.com/channel/UCS7zmJXbe7FgTC3sHlUf4jw"
        >
          <i className="fab fa-youtube fa-2x" />
        </a>
        <a
          className="connection-icon"
          href="https://github.com/Chingu-cohorts"
        >
          <i className="fab fa-github fa-2x" />
        </a>
        <a
          className="connection-icon"
          href="https://twitter.com/ChinguCollabs"
        >
          <i className="fab fa-twitter fa-2x" />
        </a>
      </div>
    );
  }

  renderDesktopFooter() {
    return (
      <div className="footer">
          {this.renderLinkBoxes()}
          {this.renderSocialIcons()}
      </div>
    );
  }

  openDropDown() {
    this.setState({
      isFooterDDShowing: !this.state.isFooterDDShowing
    });
  }

  toggleFooter() {
    this.setState({
      isFooterDDShowing: false
    });
  }

  renderMobileDropDown() {
    return (
      <div className="footer-dropdown">
        <div
          className={
            this.state.isFooterDDShowing
              ? "footer-dropdown-links"
              : "footer-dropdown-hidden"
          }
          onClick={() => this.toggleFooter()}
        >
          <div disabled className="footer-dropdown-title">
            Company
          </div>
          <Link className="footer-link" to="/team">
            Our Team
          </Link>
          <a className="footer-link" href="/privacy">
            Privacy Policy
          </a>
          <Link className="footer-link" to="/help">
            Help Page
          </Link>
          <a className="footer-link" href="mailto:admin@chingu.io">
            Contact Us
          </a>
        </div>
        <button className="footer-btn" onClick={() => this.openDropDown()}>
          Site Navigation
        </button>
      </div>
    );
  }

  renderMobileFooter() {
    return (
      <div className="footer">
        {this.renderSocialIcons()}
        {this.renderMobileDropDown()}
      </div>
    );
  }
  render() {
    return (
      <div className="footer-wrapper">
        <div
          className={
            this.state.isFooterDDShowing
              ? "footer-overlay"
              : "footer-dropdown-hidden"
          }
          onClick={() => this.toggleFooter()}
        />
        <div className="footer-desktop">{this.renderDesktopFooter()}</div>
        <div className="footer-mobile">{this.renderMobileFooter()}</div>
      </div>
    );
  }
}

export default Footer;
