import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import AuthFormContainer from './components/auth/AuthContainer';
import SignUpForm from './components/auth/SignUpForm';
import Profile from '../src/components/common/Profile';
import Principal from '../src/components/common/Principal';

const Router = ({setUser, user}) => (
    <Switch>
        <Route exact path={"/"} component={Home} />
        <Route  path={"/login"} component={AuthFormContainer} />
        <Route  path={"/register"} component={SignUpForm} />
        <Route  path={"/profile"} component={Profile} />
        <Route  path={"/principal"} component={Principal} />
    </Switch>
)

export default Router;