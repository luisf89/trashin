import React, {Component} from "react";
import {FooterH} from '../common/Footer';
import {getMyPosts} from '../../services/auth';
import {editPerfil} from '../../services/auth';
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import UIkit from 'uikit';
import Navbar from "./Navbar";
import './Profile.css'
import UpdateModal from '../common/user/UpdateModal'
import {ListProfile} from '../common/user/ListProfile'

class Profile extends Component {

    state = {
        modal4Visible:false,
        user: JSON.parse(localStorage.getItem('USER')),
        principals: []
    };

    componentWillMount () {
        this.readPost()
    //     const user = JSON.parse(localStorage.getItem('USER'));
    //     console.log(localStorage)
    //     const token = localStorage.getItem('TOKEN');
    //     if (token) {
    //         /* nombrefuncion(datos).then(respuesta=>{ haces funciones o lo que sea o un console}).catch(err=>{console.log(err}) */
    //         getMyPost(user._id).then(res=>{
    //             this.setState({projects:res.data});
    //         }).catch(err=>{
    //             console.log("error:",err)
    //         });

    //         this.setState({user})
    //     }else{
    //         this.props.history.push('/')
    //     }
     };

    readPost=(post)=>{
        let { _id } = this.state.user
        getMyPosts(_id).then(res => {
            console.log('ressss',res)
            this.setState({principals:res})
        }).catch(error=>console.log(error))
    }

    updateProfile = (patch) => {
        editPerfil().then(res => {
            this.setState({user:res.post})
        }).catch(error=>console.log(error))
    }

    modalUpdateProfile=()=>{
        let {modal4Visible}=this.state;
        modal4Visible =! modal4Visible;
        console.log("modal",modal4Visible)
        this.setState({modal4Visible})
    }
    setUser=(user)=>{
        this.setState({user})
    }

    render() {
        const { location } = this.props
        let {user, principals, modal4Visible, id} =this.state;
        let {updateProfile , setUser}= this
        console.log('userrrrrr',user)
        return (
            <div>
                <Navbar></Navbar>
                <h1 className="card">Perfil</h1>
            <div>
                <div className="uk-card uk-position-center uk-card-default uk-width-1-2@m">
                    <div className="uk-card-header">
                        <div className="uk-grid-small uk-flex-middle" uk-grid="true">
                            <div className="uk-width-auto">
                                <img className="uk-border-circle" width="200" height="200" src={user.photo} />
                            </div>
                        </div>
                    </div>
                        <div className="uk-card-body">
                            <p className="name">{user.name}</p>
                            <br />
                            <p className="name">{user.lastName}</p>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
                    <UpdateModal setUser={setUser} open={modal4Visible} close={this.modalUpdateProfile} user={user}/>
                    <div className='align-header'>
                    <h2 className="user">
                        Bienvenido {!user ? "":user.name}!
                    </h2>
                        <div>
                        <button className='button-update' onClick={()=>this.modalUpdateProfile(true)}>Modificar mi perfil</button>
                        </div>
                    </div>
                    <ListProfile
                        principals={principals}
                    />
                    <FooterH/>
            </div>
        );
    }
}

export default Profile