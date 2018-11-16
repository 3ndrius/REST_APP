import React, { Component } from 'react'

export default class Customers extends Component {
    componentDidMount = () => {
        fetch('http://localhost:4000/customers')
        .then(data => {
            console.log(data.json());
        })
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
