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
        fetch( `http://localhost:4000/customer/${id}`,{headers})
        .then(data => data.json())
        .then(data => 
            this.setState({
            customer:data
            })
        )    
    }
    handleDelete = () =>{
        const id = this.props.match.params.id;
        const jwt = localStorage.getItem("Item");
        fetch(`http://localhost:4000/customers/${id}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `jwt ${jwt}`
            },
            
            body: JSON.stringify({_id:id})
        })
        .then(res => res.text())
        .then(res => {
            console.log("Customer deleted");  
            this.setState({
                flag: true
            })            
        })
        .catch (err =>
            console.log(err));
        
    }
  render() {
    if(this.state.flag) return <Redirect to='/' /> 
    return (
      <div>
        <h1>Are you sure to delete ? </h1>
        { this.state.customer && this.state.customer.name }   |      
        { this.state.customer && this.state.customer.email }  |        
        <br/>
        <hr/>
        <button onClick={ this.handleDelete}>Delete</button>
        <br/>
        <Link to='/'>Go back</Link>    
      </div>
    )
  }
}
