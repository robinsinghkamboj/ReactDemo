import React from 'react';
import MyRoutes from '../routes';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import SearchField from 'react-search-field';
import '../assets/header.css';

class Header extends React.Component {
    render() {
        return (
            <Router>
                <nav className="navbar">
                    <div>
                        <Link to={'/home'}><img src="data:image/png;base64,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" alt="image1" width="60px" height="60px" /></Link>
                    </div>
                    <div>
                    <SearchField
                        placeholder="Search..."
                        />
                    </div>
                    <div>
                        <Link to={'/home'} className="justify-content-end"> Home </Link><b>|</b>
                        <Link to={'/company'} className="justify-content-end"> Company </Link><b>|</b>
                        <Link to={'/registrationForm'} className="justify-content-end"> Registration </Link>
                        {/* <Link to={'/loginForm'} className="justify-content-end"> Login </Link> */}
                    </div>
                </nav>
                <hr />
                <Switch>
                    <MyRoutes/>
                </Switch>
            </Router>
        );
    }
}

export default Header;