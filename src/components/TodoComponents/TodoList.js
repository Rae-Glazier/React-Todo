import React from "react";

import Todo from './Todo';

const TodoList = props => {
    console.log('todo list working')
    return(
        <div className='todo-list'>
            {props.todos.map(item => (
        <Todo
          key={item.id}
          item={item}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
        </div>
    )
}

export default TodoList;
