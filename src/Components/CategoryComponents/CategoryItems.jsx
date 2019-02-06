import React, { Component } from 'react';
//This class does not import other neighbouring files, as 
//it is only a required framework to be used in CategoryList.
class CategoryItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: props.category
        }
    }
    //CategoryItems contains category (items) inside lists
    //with required attributes (id, name, budget)
    //This is in props so that this format can be used in CategoryList.jsx
    //that contains ul where this category list will be put.
    render() {
        return (
            <li>ID: {this.state.category.id}, Name: {this.state.category.name}, Budget: {this.state.category.budget}<br /></li>
        );
    }
}

export default CategoryItems;