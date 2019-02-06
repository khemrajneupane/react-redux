import React, { Component } from 'react';
import FetchTestCategories from '../../Models/FetchTestCategories';
import CategoryItems from './CategoryItems';
class CategoryList extends Component {
    constructor(props){
        super(props);
        this.state = {Categories:[]};
    }
    componentDidMount(){
        this.setState({
            Categories:FetchTestCategories()
        })
    }
    render() {
        const mycategories = this.state.Categories.map((item,index)=>{
           
               return <CategoryItems key={index} category={item}/>
               
                    
        });
        
        return (
            <div>
             <ul>{mycategories}</ul>
            </div>
        );
    }
}

export default CategoryList;