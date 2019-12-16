import React from 'react';
import '../assets/editForm.css';
import axios from 'axios';


class EditForm extends React.Component{

    constructor (props){
        super(props);
        this.state = {
            dealer : {
            companyid:0,
            placeid:0,
            fullname:'',
            email:'',
            mobile:'',
            address:'',
            email1:'',
            mobile1:'',
            isservicecenter: 0
            },
            companies:[],
            places:[]
        }
    }

    componentDidMount(){
        var _this = this;
        var userid = _this.props.match.params.id ;
        axios.get("http://baredex-admin.nextpageit.net/api/1.1/tables/car_comapny/rows?access_token=lEEtA4JUmEeNxj890XENDGct7ubLqmII")
        .then(res => {
            var result = res.data.data
            _this.setState({ companies:result })
        })
        axios.get("http://baredex-admin.nextpageit.net/api/1.1/tables/dealer_places/rows?access_token=2LwqyUz3gN9uwvn0MP7Q71KtwTKBFUgc")
        .then(res => {
            var result = res.data.data
            _this.setState({ places:result })
        })
        axios.get("http://baredex-admin.nextpageit.net/api/1.1/tables/dealers/rows?access_token=2LwqyUz3gN9uwvn0MP7Q71KtwTKBFUgc&filters[id][eq]="+userid)
        .then(res => {
            var abc = res.data.data[0]
            _this.setState({ dealer: abc });
        })
    }

    onChangeHandler = (event) => {
        this.setState({
        dealer: 
        {
            ...this.state.dealer,
            [event.target.name]: event.target.value}
        });
    }

    toggleChange = (event) => {
        this.setState({dealer: { ...this.state.dealer, isservicecenter: !this.state.dealer.isservicecenter }})
    }

    onUpdateHandler = (event) => {
        event.preventDefault()
        var _this = this;
        var userid = _this.props.match.params.id ;

        axios.put(`http://baredex-admin.nextpageit.net/api/1.1/tables/dealers/rows/${userid}?access_token=lEEtA4JUmEeNxj890XENDGct7ubLqmII`, 
        {
            companyid: _this.state.dealer.companyid,
            placeid: _this.state.dealer.placeid,
            fullname: _this.state.dealer.fullname,
            email: _this.state.dealer.email,
            mobile: _this.state.dealer.mobile,
            address: _this.state.dealer.address,
            email1: _this.state.dealer.email1,
            mobile1: _this.state.dealer.mobile1,
            isservicecenter: _this.state.dealer.isservicecenter
        })
        .then(res=>{
        console.log(res)
        })
    }

    render() {
        var _this = this;
        return(

        <div className="container">
            <form className="updationForm" onSubmit={this.onUpdateHandler}>

                <h1 className="col text-center"><span>Dealer</span> Update</h1>
                <hr/>
                <br/>

                <div className="form-group">
                    <select name="companyid" className="form-control" onChange={this.onChangeHandler}  value={_this.state.dealer.companyid}>
                    <option value="" hidden>-- Select company --</option>
                        {this.state.companies.map((comp, index)=> 
                            <option value={comp.id} key={index}>{comp.company_name}</option>
                        )}
                    </select>
                </div>

                <div className="form-group">
                    <select name="placeid" className="form-control" onChange={this.onChangeHandler} value={_this.state.dealer.placeid}>
                    <option value="" hidden>-- Select place --</option>
                        {this.state.places.map((pla, index)=>
                            <option value={pla.id} key={index}>{pla.place_name}</option>
                        )}
                    </select>
                </div>

                <div className="form-group">
                    <input 
                    type="text" 
                    className="form-control" 
                    name ="fullname"  
                    placeholder="Dealer name" 
                    onChange={this.onChangeHandler} 
                    value={_this.state.dealer.fullname}/>
                </div>

                <div className="form-group">
                    <input 
                    type="email" 
                    className="form-control" 
                    name="email" 
                    placeholder="Dealer E-mail" 
                    onChange={this.onChangeHandler} 
                    value={_this.state.dealer.email}></input>
                </div>

                <div className="form-group">
                    <input 
                    type="tel"
                    className="form-control" 
                    name="mobile" 
                    placeholder="Dealer Mobile" 
                    onChange={this.onChangeHandler} 
                    value={_this.state.dealer.mobile}></input>
                </div>

                <div className="form-group">
                    <input 
                    type="email" 
                    className="form-control" 
                    name="email1" 
                    placeholder="Alternate Email, if any" 
                    onChange={this.onChangeHandler} 
                    value={_this.state.dealer.email1}></input>
                </div>

                <div className="form-group">
                    <input 
                    type="tel"
                    className="form-control" 
                    name="mobile1" 
                    placeholder="Alternate Mobile, if any" 
                    onChange={this.onChangeHandler} 
                    value={_this.state.dealer.mobile1}></input>
                </div>

                <div className="form-group">
                    <textarea 
                    type="text" 
                    className="form-control" 
                    name="address" 
                    placeholder="Dealer Address" 
                    onChange={this.onChangeHandler} 
                    value={this.state.dealer.address}></textarea>
                </div>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="checkbox" onChange={this.toggleChange}  checked={_this.state.dealer.isservicecenter}></input>
                    <label className="form-check-label" htmlFor="checkbox">Have own service center?</label>
                </div>
                <br/>

                <button type="submit" className="btn btn-primary">Update</button>
                
            </form>
            <br/>
        </div>
    )}
}
  
export default EditForm;


