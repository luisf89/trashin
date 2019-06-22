import React, {Component, useState} from 'react';
import {login, register} from '../../services/auth';
import { Link } from "react-router-dom";

function AuthForm() {
    const [user, setUser] = useState({})
    
    const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;
        setUser({[name]: value,})

    }
    const hanldeClick = (event) => {
        event.preventDefault();
        console.log('el click')
        console.log('>>>>>>>',user)
    }
}

class AuthFormContainer extends Component{

    state = {
        auth: {
            email: "",
            password: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const {auth} = this.state;
        const {pathname} = this.props.location;
        if(!auth.email.length) return this.setState({error: "Debes agregar una tarea"})
        pathname === "/login" ? this.onLogin() : this.onRegister();
      }

      onLogin = () => {
        const {auth} = this.state;
        login(auth)
        .then(({token, user}) => {
            localStorage.setItem("TOKEN", token);
            localStorage.setItem("USER", JSON.stringify(user))
        })
        .catch()
      }

    render(){
        console.log(this.props);
        return(
            <div>
                <div className="uk-flex uk-flex-center">
                    <AuthForm/>
                </div>
            </div>
        )
    }
}
export default AuthFormContainer;