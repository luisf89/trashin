import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../services/auth";
import { withRouter } from "react-router-dom";

class NavbarWithUser extends Component {
  render() {
    const { location } = this.props;
    return (
      <nav className="uk-navbar-container" uk-navbar="true">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#">Recipes</Link>
            </li>
            <li>
              <Link to="#">Upload</Link>
            </li>
          </ul>
        </div>

        {location.pathname === "/" ? (
          <div />
        ) : (
          <div className="uk-navbar-center">
            <Link to="/">
              <img
                src="https://www.peppapig.com/wp-content/uploads/sites/3/2019/02/peppa_george_characters.png"
                alt="morfapp-logo"
                style={{ height: "50px" }}
              />
            </Link>
          </div>
        )}

        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li>
              <Link to="#">Profile</Link>
            </li>
            <li onClick={logout}>
              <Link to="#">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(NavbarWithUser);