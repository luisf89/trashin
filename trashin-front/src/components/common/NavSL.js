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
            </ul>
            
            <Link className="titulo uk-navbar-item uk-logo uk-navbar-center" to="/">TrashIn</Link>
          </div>
        </nav>
      );
    }
  }
  
  export default withRouter(NavbarNoUser);