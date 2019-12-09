import React from 'react';
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
//   } from 'reactstrap';
  

class Companies extends React.Component{

    render(){
        return(
            <div className="conatiner">
                <div className="card col text-center cards" >
                    <img src="..." className="card-img-top" alt="..."></img>
                    <div className="card-body ">
                        <h5 className="card-title">Comapny Name</h5>
                        <p className="card-subtitle">Number of Dealers</p>
                    </div>
            </div>
            </div>
        )
    }
}

export default Companies;