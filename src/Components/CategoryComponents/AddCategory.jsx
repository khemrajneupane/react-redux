import React, { Component } from 'react';

class AddCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: "",
            budget: 0
        };
    }
    inputChanged =event=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    saveCategory = event =>{
        event.preventDefault();
        this.setState({
            id:this.state.id,
            name:this.state.name,
            budget:this.state.budget
        })
 
        
        console.log(this.state);
    }
    render() {
        const addedList =(<li>{this.state.id},{this.state.name},{this.state.budget}</li>);
        return (
            <div>
                <ul>{addedList}</ul>
                <form>
                    <label>Id: </label><input type="number" value = {this.state.id} name="id" onChange={this.inputChanged}></input>                    
                    <label>Name: </label><input type="text" value = {this.state.name} name="name" onChange={this.inputChanged}></input>
                    <label>Budget: </label><input type="number" value = {this.state.budget} name="budget" onChange={this.inputChanged}></input>
                    <input type="button" onClick={this.saveCategory} value="SAVE" />
                </form>

            </div>
        );
    }
}

export default AddCategory;