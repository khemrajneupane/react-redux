import React, { Component } from "react";

export default class CategoryItem extends Component {
  render() {
    return (
      <span>
        {`Category: ${this.props.item.name}, budget: ${
          this.props.item.budget
        } euros`}
      </span>
    );
  }
}
