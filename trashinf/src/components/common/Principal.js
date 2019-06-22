import React, {Component} from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import UIkit from 'uikit';
import Navbar from "./Navbar";
import img from '../../images/PP.png'

class Principal extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
            <div className="card-post uk-card uk-card-default uk-card-body uk-width-1-2@m">
                <article className="uk-comment">
                    <header className="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid="true">
                        <div className="uk-width-auto">
                            <img className="uk-comment-avatar" src={img} width="80" height="80" alt="" />
                        </div>
                        <div className="uk-width-expand">
                            <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">Titulo del post</a></h4>
                            <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                <li><a href="#">Nombre</a></li>
                                <li><a href="#">Apellido</a></li>
                            </ul>
                        </div>
                    </header>
                        <div className="uk-comment-body">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                        </div>
                </article>
            </div>
            </div>
            
        )
    }
}

export default Principal