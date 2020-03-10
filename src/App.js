import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css';

const todos = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos,
      name: ''
    }
  }

  toggleCompleted = clickedItemId => {
    
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === clickedItemId) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: new Date(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newItem]
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
        <h2> Rae's To-Do App</h2>
        <TodoForm 
          addItem={this.addItem}
          />
        </div>
        <TodoList todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}/>
      </div>
    );
  }
}

export default App;
