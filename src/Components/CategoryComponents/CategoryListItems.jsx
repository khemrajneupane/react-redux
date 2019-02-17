import React, { Component } from 'react';
//This class does not import other neighbouring files, as 
//it is only a required framework to be used in CategoryList.
class CategoryListItems extends Component {

    //CategoryItems contains category (items) inside lists
    //with required attributes (id, name, budget)
    //This is in props so that this format can be used in CategoryList.jsx
    //that contains ul where this category list will be put.
    render() {
        return (
            <li key = {this.props.index}>
            {`${this.props.item.name} ${this.props.item.budget}`}
            </li>
        );
    }
}

export default CategoryListItems;