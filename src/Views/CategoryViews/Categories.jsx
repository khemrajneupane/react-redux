import React, { Component } from 'react';
import CategoryList from "../../Components/CategoryComponents/CategoryList";
import CategoryAdd from "../../Components/CategoryComponents/CategoryAdd";
//This Categories class is only works as view, it receives the CategoryList
//and it runs in App.js
class Categories extends Component {
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

export default Categories;