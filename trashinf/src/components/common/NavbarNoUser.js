import React, {Component} from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import img from '../../images/LogoTrashIn.png'
import './Footer.css'


class NavbarNoUser extends Component {
    render() {
      const { location } = this.props;
      return (
        <nav className="nav-m uk-navbar-container uk-navbar-transparent " uk-navbar="true">
          <div className="uk-navbar-left">
            {/* <ul className="uk-navbar-nav">
              <li className="uk-active">
                <Link className="uk-navbar-item" to="/">Inicio</Link>
              </li>
              <li>
                <Link className="uk-navbar-item" to="/profile">Perfil</Link>
              </li>
            </ul> */}
            
            <Link className="titulo uk-navbar-item uk-logo" to="/">TrashIn<img src={img} className="logo" width="50px" height="50px" /></Link>
          </div>
  
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <Link className="uk-navbar-item" to="/register">Signup</Link>
              </li>
              <li>
                <Link className="uk-navbar-item" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  }
  
  export default withRouter(NavbarNoUser);