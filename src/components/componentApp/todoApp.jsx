import React, { Component } from 'react';
import List from '../../container/List';
import AddToList from '../../container/AddToList';

export default class TodoApp extends Component {
    render() {
        return (
            <div>
                <AddToList />
                <List />
            </div>
        );
    }
}