import React, {Component} from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class NavbarNoUser extends Component {
    render() {
      const { location } = this.props;
      return (
        <nav className="uk-navbar-container navbar" uk-navbar="true">
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/profile">Perfil</Link>
              </li>
            </ul>
            
            <Link className="titulo uk-navbar-item uk-logo uk-navbar-center" to="/">TrashIn</Link>
          </div>
  
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  }
  
  export default withRouter(NavbarNoUser);