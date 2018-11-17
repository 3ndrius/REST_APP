import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Customers extends Component {
    state = {
        customers: null
    }
    componentDidMount = () => {
        fetch('http://localhost:4000/customers')
        .then(data => data.json())
        .then(data => 
            this.setState({
            customers:data
            })
        )    
    }
  render() {

    return (
      <div>
      
       {this.state.customers && this.state.customers.map((person) => (
            <Link to={'/customer/' + person._id} key={person._id}><div>{person.name} | {person.email} </div> </Link>
            
        ))
        }
        
        <br/>
        <hr/>
       <h1>Add new Customers</h1>
       <Link to={'/add'}><button>Add customer</button></Link>
      </div>
    )
  }
}
