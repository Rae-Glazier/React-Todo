import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

// import './components/TodoComponents/Todo.css';

const data = [
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
      todos: data,
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

  clearCompleted = () =>{
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed;
      })
    })
  }

  addItem = itemName => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: itemName,
          id: Date.now(),
          completed: false
        }
      ]
    })
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
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
          />
      </div>
    );
  }
}

export default App;
