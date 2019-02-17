import React, { Component } from "react";
//import { fetchTestCategories as oldOne } from '../../models/Test';
import { fetchAllCategories } from "../../actions/category";
import CategoryListItem from "./CategoryListItem";
import { connect } from "react-redux";

class CategoryList extends Component {
  /*
    constructor(props) {
      super(props);
      //this.state = { categories: [] };
    }
    */

  componentDidMount() {
    //this.setState({ categories: fetchTestCategories() });
    this.props.categoriesFetchAll();
  }

  render() {
    return (
      <div>
        <h4>List of Categories</h4>
        <ol>
          {this.props.categories.categoryList.map(item => (
            <CategoryListItem key={item.id} item={item} />
          ))}
        </ol>
      </div>
    );
  }
}
//sending dispatch to store and getting state from store.

const mapDispatchToProps = dispatch => ({
  categoriesFetchAll: () => {
    dispatch(fetchAllCategories());
  }
});

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);
