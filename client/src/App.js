import React, { Component } from 'react';
import {BrowserRouter, Switch, Route}  from "react-router-dom";
import './App.css';

import Customers from './components/Customers';
import AddCustomer from './components/AddCustomer';
import SingleCustomer from './components/SingleCustomer';
import UpdateCustomer from './components/UpdateCustomer';
import DeleteCustomer from './components/DeleteCustomer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Customers}/>
            <Route path='/add' exact component={AddCustomer} />         
            <Route path='/update/:id' exact component={UpdateCustomer} />  
            <Route path='/customer/:id' exact component={SingleCustomer} />         
            <Route path='/delete/:id' exact component={DeleteCustomer} />         
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
