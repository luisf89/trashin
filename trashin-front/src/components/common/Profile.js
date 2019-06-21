import React, {Component} from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import UIkit from 'uikit';
import Navbar from "./Navbar";
import img from '../../images/PP.png'

class Profile extends Component {
    render() {
        const { location } = this.props
        return (
            <div>
                <Navbar></Navbar>
                <h1 className="card">Perfil</h1>
                <div class="uk-card uk-position-center uk-card-default uk-width-1-2@m">
                    <div class="uk-card-header">
                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                            <div class="uk-width-auto">
                                <img class="uk-border-circle" width="200" height="200" src={img} />
                            </div>
                        </div>
                    </div>
                        <div class="uk-card-body">
                            <p>Nombre del Usuario</p>
                            <br />
                            <p>Apellido del usuario</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile