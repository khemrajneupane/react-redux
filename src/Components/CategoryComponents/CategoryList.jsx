import React, { Component } from 'react';
import FetchTestCategories from '../../Models/FetchTestCategories';
import CategoryItems from './CategoryItems';
//This CategoryList gets (mounts) all the object instances called in FetchTestCategories function
//later, it puts them in an unordered list.
class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = { Categories: [] };
    }
    componentDidMount() {
        this.setState({
            Categories: FetchTestCategories()
        })
    }
    render() {
        const mycategories = this.state.Categories.map((item, index) => {

            return <CategoryItems key={index} category={item} />
        });

        return (
            <div>
                <ul>{mycategories}</ul>
            </div>
        );
    }
}

export default CategoryList;