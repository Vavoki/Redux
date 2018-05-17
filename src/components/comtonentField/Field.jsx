import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from "../componentApp/todoApp";
import configureStore from '../../configureStore';
import './style.css';

const initialItems = [];

const store = configureStore({ items: initialItems });

class Field extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <App initialItems={initialItems} />
                </div>
            </Provider>
        );
    };
}

export default Field;

