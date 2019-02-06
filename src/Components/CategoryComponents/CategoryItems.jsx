import React, { Component } from 'react';

class CategoryItems extends Component {
    constructor(props){
        super(props);
        this.state={
            category:props.category
        }
    }
    render() {
        return (
            <li>ID: {this.state.category.id}, Name: {this.state.category.name}, Budget: {this.state.category.budget}<br /></li>
        );
    }
}

export default CategoryItems;