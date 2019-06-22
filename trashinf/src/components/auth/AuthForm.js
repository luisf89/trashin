import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import { signup } from "../../services/auth";
import Navbar from "../../components/common/NavSL"




const AuthForm=({handleChange,handleSubmit,label}) =>(
            <div className="uk-width-1-1">
             <Navbar></Navbar>
             <h1>Perfil</h1>
        <form className="uk-form-stacked">

            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="email">Email:</label>
                <div className="uk-inline">
                    <span className="uk-form-icon" uk-icon="icon: user"></span>
                    <input name ="email" onChange={handleChange} className="uk-input" type="email" />
                </div>
            </div>

            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="password">Password:</label>
                <div className="uk-inline">
                    <span className="uk-form-icon" uk-icon="icon: lock"></span>
                    <input  name ="password" onChange={handleChange} className="uk-input" type="password" />
                </div>
            </div>

            <div>
                <button  onClick={handleSubmit}className="uk-button uk-button-primary">{label}</button>
            </div>

        </form>
        <p>
          Dont have an account?
          <Link to={"/signup"}> Signup</Link>
        </p>
    </div>  
    )


export default AuthForm
