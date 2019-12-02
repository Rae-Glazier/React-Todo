// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Item from './Todo';

const TodoList =  props => {
    return (
        <div className = 'todo-list'>
            {props.list.map( item => (
                <Item key={item.id} item={item} />
            ))}
            <button className='clear-btn' onClick={props.clearCompleted}>
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;