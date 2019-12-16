import React from 'react';
import '../assets/loginForm.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: ''};
    }

    mySubmitHandler = (event) => {
       console.log(this.state)
        
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    render() {
        return (
        <div className="container">
            <form className="loginForm" onSubmit={this.mySubmitHandler}>

                <h2 className="col text-center"><span>Dealer </span><b>Login</b></h2><br></br>

                <div className="form-group">
                    <input
                    className="form-control"
                    type='email'
                    name='email'
                    onChange={this.myChangeHandler}
                    placeholder="Enter email address"
                    />
                </div>

                <div className="form-group">
                    <input
                    className="form-control"
                    type='password'
                    name='password'
                    onChange={this.myChangeHandler}
                    placeholder="Enter password"
                    />
                </div>

                <div className="col text-center">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
            <br></br>
        </div>
        );
    }
}

export default LoginForm;