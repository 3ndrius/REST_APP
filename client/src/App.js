import React, { Component } from 'react';

import './App.css';


import Customers from './components/Customers';
import AddCustomer from './components/AddCustomer';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Customers />
      <AddCustomer />
      </div>
    );
  }
}

export default App;
