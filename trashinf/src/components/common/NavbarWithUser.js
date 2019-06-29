import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../services/auth";
import { withRouter } from "react-router-dom";
import img from "../../images/LogoTrashIn.png"
import './Footer.css'

class NavbarWithUser extends Component {
  render() {
    const { location } = this.props;
    return (
      <nav className="nav-bag nav-m uk-navbar-container" uk-navbar="true">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/principal">Posts</Link>
            </li>
          </ul>
        </div>

        {/* {location.pathname === "/" ? (
          <div />
        ) : ( */}
          <div className="uk-navbar-center">
            <Link className="titulo uk-navbar-item uk-logo" to="/">TrashIn<img src={img} className="logo" width="50px" height="50px" /></Link>
          </div>
        {/* )} */}

        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li>
              <Link to="/profile">Perfil</Link>
            </li>
            <li onClick={logout}>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(NavbarWithUser);