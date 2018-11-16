import React, { Component } from 'react'

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
      
       {this.state.customers && this.state.customers.map((person, _id) => (
            <div key={_id}>{person.name} | {person.email} </div> 
            
        ))
        }
        
      </div>
    )
  }
}
