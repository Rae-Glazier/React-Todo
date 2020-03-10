import React from "react";

const Todo = props => {
    console.log(props.item)
    return(
        <div onClick={() => props.toggleCompleted(props.item.id)}
        className={`item${props.item.completed ? " completed" : ""}`}>
            <p>{props.item.task}</p>
        </div>
        // <h1>test</h1> 
    )
}

export default Todo;