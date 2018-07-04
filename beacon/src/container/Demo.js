
import React, { Component } from 'react';

class Demo extends Component {
	constructor(props){
		super(props);
		this.state={}   
	}

  submitLogin(event){
    event.preventDefault();
   let email = event.target.email.value,
   password = event.target.password.value;
  }

  render() {
    let {restaurantList} =this.state;
    return (
     <div className="row">
      <div className="col-sm-12" >
      <h1>Demo page</h1>
           </div>
	 </div>
    );
  }
}

export default Demo



