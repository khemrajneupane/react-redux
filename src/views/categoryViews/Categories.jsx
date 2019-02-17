import React, { Component } from "react";
import CategoryList from "../../components/categoryComponents/CategoryList";
import CategoryAdd from "../../components/categoryComponents/CategoryAdd";

export default class Categories extends Component {
  render() {
    return (
      <div>
        <h2>My Categories</h2>
        <CategoryAdd />
        <CategoryList />
      </div>
    );
  }
}
