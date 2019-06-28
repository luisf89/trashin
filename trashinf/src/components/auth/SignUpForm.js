import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signup } from "../../services/auth";
import Navbar from "../../components/common/NavSL"
import './Forms.css'

class SignUpForm extends Component {
  state = {
    auth: {
      name: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      passwordConfirm: ""
    }
  };

  handleFormSubmit = e => {
    e.preventDefault();
    
    const { auth } = this.state;
    if (!auth.email.length) {
      return this.setState({ error: "You must enter an email" });
    }
     this.onSignup();
  };

  onSignup = () => {
    console.log('Perro',this.props)
    
    const { auth } = this.state;
    signup(auth)
      .then(({ token, user }) => {
        localStorage.setItem("TOKEN", token);
        localStorage.setItem("USER", JSON.stringify(user));
        this.props.history.push("/");
        console.log(this.props.history);
      })
      .catch(error => {
        console.log('El error',error)
        return this.setState({ error: error.message });
      });
  };

  handleChange = (e) => {
    const { auth } = this.state;
    let field = e.target.name;
    auth[field] = e.target.value;
    this.setState({ auth });
  };

  render() {
    //onsole.log('el history',this.props.history);
    const {name, lastName, email, username, password, passwordConfirm} = this.state.auth
    return (
      <div className="nav-bg custom-form main-container">
        <Navbar></Navbar>
        <h2 className="signup">Sign Up</h2>
        <form className="uk-form-stacked" onSubmit={this.handleFormSubmit}>
          <p>
            <input
              className="uk-input uk-form-width-medium"
              placeholder="First Name"
              type="text"
              name="name"
              value={name}
              onChange={e => this.handleChange(e)}
            />
          </p>

          <p>
            <input
              className="uk-input uk-form-width-medium"
              placeholder="Last Name"
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => this.handleChange(e)}
            />
          </p>

          <p>
            <input
              className="uk-input uk-form-width-medium"
              placeholder="E-mail"
              type="email"
              name="email"
              value={email}
              onChange={e => this.handleChange(e)}
            />
          </p>

          <p>
            <input
              className="uk-input uk-form-width-medium"
              placeholder="Username"
              type="text"
              name="username"
              value={username}
              onChange={e => this.handleChange(e)}
            />
          </p>

          <p>
            <input
              className="uk-input uk-form-width-medium"
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={e => this.handleChange(e)}
            />
          </p>
          <p>
            <input
              className="uk-input uk-form-width-medium"
              placeholder="PasswordConfirm"
              type="password"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={e => this.handleChange(e)}
            />
          </p>
        
          <div>
            <button type="submit" onClick={this.handleFormSubmit} className="uk-button button uk-button-primary">Registrarse</button>
          </div>
        </form>

        <p className="color">
          Already have an account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}

export default SignUpForm;