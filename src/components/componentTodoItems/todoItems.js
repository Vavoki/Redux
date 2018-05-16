import React, { Component } from 'react';

export default class ListItem extends Component {
    onRemove = () => {
        this.props.removeItem(this.props.item.id);
    }

    onEdit = () => {

    }


    render () {
        const todoClass = this.props.item.done ? 'done' : null;

        return(
            <li className='list-group-item item-container'>
                <div className={todoClass}>
                    {this.props.item.value}
                    <button type='button' className='close' onClick={this.onRemove}>delete</button>
                    <button type='button' className='close' onClick={this.onEdit}>delete</button>
                </div>
            </li>
        );
    }
}