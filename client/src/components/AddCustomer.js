import React, { Component } from 'react'

import { Redirect } from 'react-router-dom';
export default class AddCustomer extends Component {
    state = {
        name: null,
        email: null,
        flag: false
    }
    handleChange = (e) => {
        console.log([e.target.name]);
        this.setState({
            [e.target.name]:e.target.value,
        })  
    }
    handleClick = (e) =>{
        e.preventDefault();
        console.log(this.state);
        fetch('http://localhost:4000/customers', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res)
        .then(res => {
            console.log("Customer added");  
            this.setState({
                flag:true
            })
        })
        .catch (err =>
            console.log(err));     
    }
 render() {
    if(this.state.flag) return <Redirect to='/' /> 
    return (
      <div>
          <form>
              <input type="text" name="name" onChange={this.handleChange}/>
              <input type="text" name="email" onChange={this.handleChange}/>
              <button type="submit" onClick={this.handleClick}>Send</button>
          </form>
      </div>
    )
  }
}
