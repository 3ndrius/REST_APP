import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
export default class Customers extends Component {
    state = {
        customers: null,
        flag:false
    }
    componentDidMount = () => {
        fetch('http://localhost:4000/customers')
        .then(data => data.json())
        .then(data => 
            this.setState({
            customers:data
            })
        )    
        console.log(localStorage.getItem("Item"));
    }
  render() {
    if(this.state.flag) return <Redirect to='/' /> 
    return (
      <div>
          <div>
              <Link to='/login'>Login</Link>
              <Link to='register'>Register</Link>
              <hr/>
              <br/>
          </div>
       {
           this.state.customers && this.state.customers.map((person) => (
            <div key={person._id}> 
                <Link to={'/customer/' + person._id}><div>{person.name} | {person.email} </div> </Link>
                <Link to={'/update/' + person._id}> <button>Update</button> </Link>
                <Link to={'/delete/' + person._id}> <button>Delete</button> </Link>
            </div>  
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
