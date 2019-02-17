import React, { Component } from 'react';
import {fetchAllCategories} from '../../actions/category';
import CategoryListItems from './CategoryListItems';
import {connect} from 'react-redux';
//import {fetchTestCategories, fetchAllCategories} from '../../actions/category';
//This CategoryList gets (mounts) all the object instances called in FetchTestCategories function
//later, it puts them in an unordered list.
class CategoryList extends Component {
   /* constructor(props) {
        super(props);
        //this.state = { Categories: [] };
    }*/
    componentDidMount() {
        this.props.categoriesFetchAll();
        //this.setState({
        //    Categories: FetchTestCategories()
       // })
    }
    


    render() {
        const mycategories = this.props.categories.categoryList.map((item, index) => {

            return <CategoryListItems item={item} index={index} />
        });

        return (
            <div>
                <ul>{mycategories}</ul>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch =>({
    categoriesFetchAll: ()=>{
        dispatch(fetchAllCategories())
    }
})
const mapStateToProps = state => ({
    categories: state.categories,
  });
export default connect(mapStateToProps,mapDispatchToProps)(CategoryList);