import React from 'react';
import '../assets/registrationForm.css';
import axios from 'axios';


class RegistrationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        companyid: 0,
        placeid: 0,
        fullname: '',
        email: '',
        mobile: '',
        address: '',
        email1: '',
        mobile1: '',
        isservicecenter: 0,
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

    toggleChange = (event) => {
        this.setState({isservicecenter: !this.state.isservicecenter})
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        var _this = this;
        axios.post("http://baredex-admin.nextpageit.net/api/1.1/tables/dealers/rows?access_token=lEEtA4JUmEeNxj890XENDGct7ubLqmII",
        {
            companyid: _this.state.companyid,
            placeid: _this.state.placeid,
            fullname: _this.state.fullname,
            email: _this.state.email,
            mobile: _this.state.mobile,
            address: _this.state.address,
            email1: _this.state.email1,
            mobile1: _this.state.mobile1,
            isservicecenter: _this.state.isservicecenter,
        })
        .then(res => {
            console.log(res)
        })

    }

    render() 
    {
        return (

            <div className="container">
                <form className="registrationForm" onSubmit={this.onSubmitHandler}>

                <h1 className="col text-center"><span>Dealer</span> Registration</h1>
                <hr/>
                <br/>

                <div className="form-group">
                    <select name="companyid" className="form-control" onChange={this.onChangeHandler}>
                    <option value="" hidden>-- Select Company --</option>
                    {this.state.companies.map((comp, index) =>
                        <option value={comp.id} key={index}>{comp.company_name}</option>)}
                    </select>
                </div>

                <div className="form-group">
                    <select name="placeid" className="form-control" onChange={this.onChangeHandler}>
                    <option value="" hidden>-- Select Place --</option>
                    {this.state.places.map((pla, index) =>
                        <option value={pla.id} key={index}>{pla.place_name}</option>)}
                    </select>
                </div>

                <div className="form-group">
                    <input 
                    type="text" 
                    className="form-control" 
                    name="fullname" 
                    placeholder="Enter your name" 
                    onChange={this.onChangeHandler}></input>
                </div>

                <div className="form-group">
                    <input 
                    type="email" 
                    className="form-control" 
                    name="email" 
                    placeholder="Enter e-mail address" 
                    onChange={this.onChangeHandler}></input>
                </div>

                <div className="form-group">
                    <input 
                    type="tel" 
                    className="form-control" 
                    name="mobile" 
                    placeholder="Enter mobile number" 
                    onChange={this.onChangeHandler}></input>
                </div>

                <div className="form-group">
                    <input 
                    type="email" 
                    className="form-control" 
                    name="email1" 
                    placeholder="Alternate Email, if any" 
                    onChange={this.onChangeHandler} ></input>
                </div>

                <div className="form-group">
                    <input 
                    type="tel" 
                    className="form-control" 
                    name="mobile1" 
                    placeholder="Alternate Mobile, if any" 
                    onChange={this.onChangeHandler}></input>
                </div>

                <div className="form-group">
                    <textarea t
                    ype="text" 
                    className="form-control" 
                    name="address" 
                    placeholder="Enter your parmanent address here..." 
                    onChange={this.onChangeHandler}></textarea>
                </div>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="checkbox" name="isservicecenter" onChange={this.toggleChange}></input>
                    <label className="form-check-label" htmlFor="checkbox">Have own service center?</label>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">Register</button>

                </form>
                <br/>
            </div>
        )
    }
}



export default RegistrationForm;


