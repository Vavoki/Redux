import React, { Component } from 'react';
import './style.css';
export default class ListItem extends Component {
    constructor()
    {
        super();
        this.state = {
            edit:false,
        }
    }
    onRemove = () => {
        const confirm = window.confirm("U really want delete this task?");
        if(confirm) {
            this.props.removeItem(this.props.item.id);
        }
    }

    onEdit = () => {
        console.log(this.props.item.done);
        if(this.props.item.done === false) {
            this.setState({edit: true});
        } else {
            alert("U cant edit completed task");
        }
    }

    onSave = () => {
        const value = this.input.value;
        this.props.editItem(value, this.props.item.id);
        this.setState({edit:false});
    }
    onChecked = () => {
        this.props.toggleItem(this.props.item.id);
    }

    renderTodo () {
        const checked = "checked";
        return(
            <li className='list-group-item item-container'>
                <div>
                    <input id="checkBox" type="checkbox" onClick={this.onChecked}/>
                    <span className={this.props.item.done ? checked : ""}>{this.props.item.value}</span>
                    <button type='button' className='close' onClick={this.onRemove}>delete</button>
                    <button type='button' className='close' onClick={this.onEdit}>edit</button>
                </div>
            </li>
        );
    }
    renderEdit ()  {

        return (
            <div>
                <textarea className="edit-text" ref = { (node) => this.input = node } defaultValue={this.props.item.value}></textarea>
                <button className="button" onClick={this.onSave}>Save</button>
            </div>
        );
    }
    render() {
            console.log(this.props.item);
            return (this.state.edit) ? this.renderEdit() : this.renderTodo();
    }
}