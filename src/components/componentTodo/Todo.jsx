import React from 'react';
import ListItem from '../componentTodoItems/todoItems';

import './style.css';

export default function TodoList(props) {
    const { items, removeItem, toggleTodoDone } = props;
    const itemsList = items.map((item) => {
        return (
            <ListItem
                key={item.id}
                item={item}
                removeItem={removeItem}
                toggleTodoDone={toggleTodoDone}
            />
        );
    });

    return (
        <ul className='list-group'>
            {itemsList}
        </ul>
    );
}