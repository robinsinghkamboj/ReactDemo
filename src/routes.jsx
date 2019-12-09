import React from 'react';
// import LoginForm from './views/logIn';
import SignupForm from "./views/signUp";
import EditForm from './views/edit'
import Home from './views/home';
import { Route } from 'react-router-dom';
import Dealers from './views/dealers';
import Companies from './views/companies';



class Dashroutes extends React.Component {
    render(){
        return (
            <div>
                {/* <Route path="/login" component={LoginForm}/> */}
                <Route path="/home" component={Home}/>
                <Route path="/dealers" component={Dealers}/>
                <Route path="/companies" component={Companies}/>
                <Route path="/signup"  component={SignupForm}/>
                <Route path="/edit/:id"  component={EditForm}/>

            </div>
        );
    }
}

export default Dashroutes;
