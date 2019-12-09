import React from 'react';
import './login.css';

class LoginForm extends React.Component{

  constructor (props){
      super(props);
      this.state ={}
  }

  myChangeHandler = (event) => {
  }

  onSubmitHandler = (event) => {
    }

  render(){
    return(
<div className="container ">
      
      <form onSubmit={this.onSubmitHandler} className="form">
      <h2> Dealer Login</h2>
        <div className="form-group">
          <input type="email" className="form-control" name="email" placeholder="Dealer E-mail" onChange={this.myChangeHandler} ></input>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" name="password" placeholder="Enter Password" onChange={this.myChangeHandler} ></input>
        </div>
      <input type="submit" className="btn button" value="Log In"></input>
        
      </form>
      {this.state.message}
    </div>
     ) }
  }


  
export default LoginForm;


