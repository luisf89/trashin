import React, { useState, Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { signup } from "../../services/auth";
import Navbar from "../../components/common/NavSL"


const AuthForm=({handleChange,handleSubmit,label}) =>(
            <div className=" nav-bg uk-width-1-1">
             <Navbar></Navbar>
             <h1 className="signup">Login</h1>
        <form className="uk-form-stacked">

            <div className="uk-margin">
                <label className="blanco uk-form-label" htmlFor="email">Email:</label>
                <div className="uk-inline">
                    <span className="uk-form-icon" uk-icon="icon: user"></span>
                    <input name ="email" onChange={handleChange} className="uk-input" type="email" />
                </div>
            </div>

            <div className="uk-margin">
                <label className="blanco uk-form-label" htmlFor="password">Password:</label>
                <div className="uk-inline">
                    <span className="uk-form-icon" uk-icon="icon: lock"></span>
                    <input  name ="password" onChange={handleChange} className="uk-input" type="password" />
                </div>
            </div>

            <div>
                <button  onClick={handleSubmit}className="uk-button button uk-button-primary">{label}</button>
            </div>

        </form>
        <p className="blanco">
          No tienes cuenta?
          <Link to={"/signup"}> Signup</Link>
        </p>
    </div>  
    )



export default AuthForm
