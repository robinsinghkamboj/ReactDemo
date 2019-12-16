import React from 'react';
import axios from 'axios';

import '../assets/home.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dealers: []
        };
    }

    componentDidMount() {
        var _this = this;
        axios.get('http://baredex-admin.nextpageit.net/api/1.1/tables/dealers/rows?access_token=2LwqyUz3gN9uwvn0MP7Q71KtwTKBFUgc')
        .then(function (response) {
            _this.setState({dealers: response.data.data});    
            console.log(_this.state.dealers)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }


    render() {
        return (
        <div className="container">

            {this.state.dealers.map((dealer)=> 
                <div key={dealer.id}>{dealer.fullname} - 
                    {dealer.email} - 
                    {dealer.address}
                </div>
            )}
            
        </div>
        );
    }
}

export default Home;