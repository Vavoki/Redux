import React, { Component } from 'react';


export default class AddForm extends Component {
    componentDidMount() {
        this.refs.itemValue.focus();
    }

    onSubmit = (event) => {
        event.preventDefault();
        const value = this.refs.itemValue.value;

        if(value) {
            this.props.addItem(value);
            this.refs.form.reset();
        }
    }

    render () {
        return (
            <form ref='form' onSubmit={this.onSubmit}>
                <input type='text' ref='itemValue' className='form-control input' />
                <button type='submit' className='btn btn-default'>Add item</button>
            </form>
        );
    }
}