import React, {Component} from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import img from '../../images/LogoTrashIn.png'
import './Footer.css'

class NavbarNoUser extends Component {
    render() {
      const { location } = this.props;
      return (
        <nav className="uk-navbar-container navbar" uk-navbar="true">
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <Link className="blanco" to="/">Inicio</Link>
              </li>
            </ul>
            
            <Link className="titulo uk-navbar-item uk-logo uk-navbar-center" to="/">TrashIn<img src={img} width="80px" height="40px" /></Link>
          </div>
        </nav>
      );
    }
  }
  
  export default withRouter(NavbarNoUser);