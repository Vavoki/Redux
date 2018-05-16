import React, { Component } from 'react';

export default class ListItem extends Component {
    constructor()
    {
        super();
        this.state = {
            edit:false,
        }
    }
    onRemove = () => {
        this.props.removeItem(this.props.item.id);
    }

    onEdit = () => {
        this.setState({edit:true});
        //console.log(this.props.editItem("work", this.props.item.id));
    }

    onSave = () => {
        const value = this.value;
        this.props.editItem(value, this.props.item.id);
        this.setState({edit:false});
    }
    renderTodo () {
        // const todoClass = this.props.item.done ? 'done' : null; className={todoClass}

        return(
            <li className='list-group-item item-container'>
                <div>
                    {this.props.item.value}
                    <button type='button' className='close' onClick={this.onRemove}>delete</button>
                    <button type='button' className='close' onClick={this.onEdit}>edit</button>
                </div>
            </li>
        );
    }
    renderEdit ()  {
        return (
            <div>
                <textarea className="edit-text" ref = { (node) => this.value = node } defaultValue={this.props.item.value}></textarea>
                <button className="button" onClick={this.onSave}>Save</button>
            </div>
        );
    }
    render() {
            return (this.state.edit) ? this.renderEdit() : this.renderTodo();
    }
}