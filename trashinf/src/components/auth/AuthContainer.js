import React, {Component} from 'react';
import AuthForm from './AuthForm';
import {login, register} from '../../services/auth';

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
            console.log('funcione', token,user)
            localStorage.setItem("TOKEN", token);
            localStorage.setItem("USER", JSON.stringify(user))
            this.props.history.push("/");
        })
        .catch(err=>console.log('err',err))
      }


    
 handleChange = (event) => {
     let {auth} = this.state

    let { name, value } = event.target;
    auth[name]= value

    this.setState({auth})
    
}

    

    render(){
       let {handleChange,handleSubmit} = this
       const {pathname} = this.props.location;
        return(
            <div>
                <div className="uk-flex uk-flex-center">
                    <AuthForm handleSubmit={handleSubmit} handleChange={handleChange} label={ pathname === "/login" ? 'Inicia sesión ' : 'Registrate'} />
                </div>
            </div>
        )
    }
}
export default AuthFormContainer;