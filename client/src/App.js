import React, { Component } from 'react';
import {BrowserRouter, Switch, Route}  from "react-router-dom";
import './App.css';

import Customers from './components/Customers';
import AddCustomer from './components/AddCustomer';
import SingleCustomer from './components/SingleCustomer';





class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Customers}/>
            <Route path='/customer/:id' exact component={SingleCustomer} />  
            <Route path='/add' exact component={AddCustomer} />         
                 
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
