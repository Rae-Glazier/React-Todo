import React from 'react';

const ToDo = props => {
    return (
        <div className={`todo${props.todo.completed ? 'completed' : ''}`}>
            <p>{props.todo.name}</p>
        </div>
    );
};

export default ToDo; 