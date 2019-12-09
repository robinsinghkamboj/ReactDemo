import React from 'react';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import SearchField from "react-search-field";
import './header.css'
import Dashroutes from '../routes'
// import {FaUser}  from 'react-icons/fa'


class Header extends React.Component{

  render() {
    return (
        <Router>
            <nav className="navbar ">
                <Link to={'/form'} className="logoLink">
                    <div className="logo">
                        <b>Dream Car </b>
                    </div>
                </Link>
                <SearchField    placeholder="Type here to Search..."  className="searchField"/>
                <div className="navlinks">
                    <Link className="justify-content-end navlink" to={'/home'} > Home </Link> |
                    <Link className="justify-content-end navlink" to={'/dealers'} > Dealers </Link> |
                    <Link className="justify-content-end navlink" to={'/companies'} > Companies </Link> |
                    
                        {/* <Link className="justify-content-end navlink" to={'/login'} > Login </Link> | */}
                        <Link className="justify-content-end navlink" to={'/signup' }> Register</Link>
                </div>
            </nav>
          <hr/>
          <Switch>
            <Dashroutes/>
          </Switch>
      </Router>

    )}
  }

  export default Header