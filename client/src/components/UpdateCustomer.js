import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
export default class UpdateCustomer extends Component {
    state = {
        name: '',
        email: '',
        flag: false
    }
    componentDidMount =() =>{
        const id = this.props.match.params.id;
        fetch( `http://localhost:4000/customer/${id}`)
        .then(data => data.json())
        .then(data => 
            this.setState({
            name:data.name,
            email: data.email
            })
        )   
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        }) 
    }
    handleClick = (e) =>{
        e.preventDefault();
        const id = this.props.match.params.id;
        fetch(`http://localhost:4000/customers/${id}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res)
        .then(res => {
            console.log("Customer updated");         
            console.log(res);   
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
          <h1>Update</h1>
          <form>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
              <input type="text" name="email" value={this.state.email}  onChange={this.handleChange} />
              <button type="submit" onClick={this.handleClick}>Update</button>
          </form>
      </div>
    )
  }
}