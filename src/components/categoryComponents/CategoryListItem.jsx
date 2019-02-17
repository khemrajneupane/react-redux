import React, { Component } from "react";
import CategoryItem from "./CategoryItem";

export default class CategoryListItem extends Component {
  render() {
    return (
      <li>
        <CategoryItem item={this.props.item} />
      </li>
    );
  }
}
