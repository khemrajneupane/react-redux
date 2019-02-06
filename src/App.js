import React, { Component } from 'react';
import Categories from "./Views/CategoryViews/Categories";
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        
        <Categories />
      </div>
    );
  }
}

export default App;
