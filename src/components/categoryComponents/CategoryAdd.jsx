import React, { Component } from "react";
import { connect } from "react-redux";
import { addCategory } from "../../actions/category";

class CategoryAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCategoryObject: { id: null, name: null, budget: null }
    };
  }
  inputFieldValueChanged = event => {
    this.setState({
      newCategoryObject: {
        ...this.state.newCategoryObject,
        [event.target.id]: event.target.value
      }
    });
  };
  addCategoryButtonClicked = () => {
    const category = this.state.newCategoryObject;
    this.props.addCategoryLocal(category);

    // this.props.addCategoryLocal(this.state.newCategoryObject);   // Other way
  };
  render = () => {
    return (
      <div>
        <h4>New Category</h4>
        <p>
          Id:{" "}
          <input id="id" type="text" onChange={this.inputFieldValueChanged} />
          <br />
          Name:{" "}
          <input id="name" type="text" onChange={this.inputFieldValueChanged} />
          <br />
          Budget:{" "}
          <input
            id="budget"
            type="text"
            onChange={this.inputFieldValueChanged}
          />
          <br />
          <button type="button" onClick={this.addCategoryButtonClicked}>
            ADD NEW CATEGORY
          </button>
        </p>
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  addCategoryLocal: category => {
    dispatch(addCategory(category));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CategoryAdd);
