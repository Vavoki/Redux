import React, { Component } from 'react';


export default class AddForm extends Component {

    addTodo = () => {
        const str = this.input.value.trim();
        this.props.addItem(str);
        this.input.value = " ";

    }
    render() {
        return (

            <div className="wrapper ">
                <input   className="input" ref = { (node) => this.input = node }  />
                <button className="button"  onClick={this.addTodo}>newToDO</button>
            </div>
        );
    };

}