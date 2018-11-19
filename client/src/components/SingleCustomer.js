import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';

export default class SingleCustomer extends Component {
    state = {
        customer: ''
    }
    componentDidMount = () => {
        const id = this.props.match.params.id;
        const jwt = localStorage.getItem("Item");
      
        let headers = {"Content-Type": "application/json"};
        if (jwt) {
          headers["Authorization"] = `jwt ${jwt}`;
          console.log("Token: ", jwt);
        }
        fetch( `http://localhost:4000/customer/${id}`, {headers})
        .then(data => data.json())
        .then(data => 
            this.setState({
            customer:data
            })
          
        )    
    }
  render() {
    console.log(localStorage.getItem("auth"));
    return (
      <div>
        {localStorage.getItem("auth") ? <div><p>{this.state.customer.name}</p>  <p>{this.state.customer.email } </p>  <Link to='/'>Go back</Link>   </div>     
       : <div>Unauthorized !! </div>
    }   
      </div>
    )
  }
}
