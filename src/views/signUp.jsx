import React from 'react';
import './signUp.css';
import axios from 'axios';


class SignupForm extends React.Component {

  // http://baredex-admin.nextpageit.net/api/1.1/tables/users/rows?access_token=lEEtA4JUmEeNxj890XENDGct7ubLqmII

  constructor(props) {
    super(props);
    this.state = {
      company: 0,
      place: 0,
      name: '',
      email: '',
      mobile: '',
      address: '',
      email1: '',
      mobile1: '',
      isServiceCenter: false,
      companies: [],
      places: []

    }
  }

  componentDidMount() {
    var _this = this;
    axios.get("http://baredex-admin.nextpageit.net/api/1.1/tables/car_comapny/rows?access_token=lEEtA4JUmEeNxj890XENDGct7ubLqmII")
      .then(res => {
        var result = res.data.data
        _this.setState({ companies: result })
      })
    axios.get("http://baredex-admin.nextpageit.net/api/1.1/tables/dealer_places/rows?access_token=2LwqyUz3gN9uwvn0MP7Q71KtwTKBFUgc")
      .then(res => {
        var result = res.data.data
        _this.setState({ places: result })
      })
  }

  onChangeHandler = (event) => {
    var _this = this;
    let nam = event.target.name;
    let val = event.target.value;
    _this.setState({ [nam]: val })

  }

  onSubmitHandler = (event) => {
    event.preventDefault()
    var _this = this;
    axios.post("http://baredex-admin.nextpageit.net/api/1.1/tables/dealers/rows?access_token=lEEtA4JUmEeNxj890XENDGct7ubLqmII",
      {
        companyid: _this.state.company,
        placeid: _this.state.place,
        fullname: _this.state.name,
        email: _this.state.email,
        mobile: _this.state.mobile,
        address: _this.state.address,
        email1: _this.state.email1,
        mobile1: _this.state.mobile1,
        isservicecenter: _this.state.isServiceCenter,
      })
      .then(res => {
        console.log(res)
      })

  }

  render() {

    return (
      <div className="container ">
        <form onSubmit={this.onSubmitHandler}>
          <h1> Dealer SignUp</h1>
          <div className="form-group">
            <select name="company" className="form-control" onChange={this.onChangeHandler}>
              <option value="" hidden>-- Select company --</option>
              {this.state.companies.map((comp, index) =>
                <option value={comp.id} key={index}>{comp.company_name}</option>)}
            </select>
          </div>
          <div className="form-group">
            <select name="place" className="form-control" onChange={this.onChangeHandler}>
              <option value="" hidden>-- Select place --</option>
              {this.state.places.map((pla, index) =>
                <option value={pla.id} key={index}>{pla.place_name}</option>)}
            </select>
          </div>
          {/* <div className="form-group">
          <input type="text" className="form-control" name ="place"  placeholder="Start typing to select a place" onChange={this.onChangeHandler} ></input>
        </div> */}
          <div className="form-group">
            <input type="text" className="form-control" name="name" placeholder="Dealer name" onChange={this.onChangeHandler} ></input>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" name="email" placeholder="Dealer E-mail" onChange={this.onChangeHandler} ></input>
          </div>
          <div className="form-group">
            <input type="tel" className="form-control" name="mobile" placeholder="Dealer Mobile" onChange={this.onChangeHandler} ></input>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" name="email1" placeholder="Alternate Email, if any" onChange={this.onChangeHandler} ></input>
          </div>
          <div className="form-group">
            <input type="tel" className="form-control" name="mobile1" placeholder="Alternate Mobile, if any" onChange={this.onChangeHandler} ></input>
          </div>
          <div className="form-group">
            <textarea type="text" className="form-control" name="address" placeholder="Dealer Address" onChange={this.onChangeHandler} ></textarea>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="checkbox" onChange={this.onChangeHandler}></input>
            <label className="form-check-label" htmlFor="checkbox">Have own service center?</label>
          </div>
          <button type="submit" className="btn ">Register</button>

        </form>

      </div>
    )
  }
}



export default SignupForm;


