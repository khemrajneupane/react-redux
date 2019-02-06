import React, { Component } from 'react';
import Categories from "./Views/CategoryViews/Categories";
import './App.css';
//This main class calls the Categories class which
//contains final view to be displayed in the index.html (in public folder)
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
