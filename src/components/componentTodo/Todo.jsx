import React from 'react';
import ListItem from '../componentTodoItems/todoItems';

import './style.css';

export default function TodoList(props) {
    const { items, removeItem, editItem } = props;
    const itemsList = items.map((item) => {
        return (
            <ListItem
                key={item.id}
                item={item}
                removeItem={removeItem}
                editItem={editItem}
            />
        );
    });

    return (
        <ul className='list-group'>
            {itemsList}
        </ul>
    );
}