import React from 'react';

const item = props => {
    return (
        <div className={`item${props.item.completed ? 'completed' : ''}`}>
            <p>{props.item.name}</p>
        </div>
    );
};

export default item; 