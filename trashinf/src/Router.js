import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import AuthFormContainer from './components/auth/AuthContainer';
import SignUpForm from './components/auth/SignUpForm';
import Profile from '../src/components/common/Profile';
import Principal from '../src/components/common/Principal';

const Router = ({setUser, user}) => (
    <Switch>
        <Route path="/" render={(props) => <Home user={user} {...props} />} />
        <Route path="/login" render={(props) => <AuthFormContainer {...props} setUser={setUser} user={user} />} />
        <Route path="/signup" render={(props) => <SignUpForm {...props} setUser={setUser} user={user} />} />
        <Route path="/profile" render={(props) => <Profile {...props} setUser={setUser} user={user} />} />
        <Route path="/principal" render={(props) => <Principal {...props} setUser={setUser} user={user} />} />
    </Switch>
)

export default Router;