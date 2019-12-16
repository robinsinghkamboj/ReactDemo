import React from 'react';

import RegistrationForm from './views/registrationForm';
import Home from './views/home';

import { Route } from 'react-router-dom';
import LoginForm from './views/loginForm';
import EditForm from './views/edit';

function MyRoutes() {
    return(
        <div>
            <Route exact path='/registrationForm' component={RegistrationForm} />
            <Route path='/loginForm' component={LoginForm} />
            <Route path='/home' component={Home} />
            <Route path='/edit/:id' component={EditForm} />
        </div>
    )
}

export default MyRoutes;
