<<<<<<< HEAD
import React, { Component } from "react";
import "./App.css";
import Categories from "./views/categoryViews/Categories";

class App extends Component {
  render() {
    return (
      <div className="App">
=======
import React, { Component } from 'react';
import Categories from "./Views/CategoryViews/Categories";
import './App.css';
//This main class calls the Categories class which
//contains final view to be displayed in the index.html (in public folder)
class App extends Component {
  
  render() {
    return (
      <div className="App">
        
>>>>>>> c7a4832db146f6aad0f293b850d7968165104992
        <Categories />
      </div>
    );
  }
}

export default App;
