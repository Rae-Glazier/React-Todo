import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';

const list = [
  {
    name: 'Make Bed',
    id: 122019,
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
      list: list,
    };
  }

  addItem = newItemText => {
    const newItem = {
      name: newItemText,
      id: Date.now(),
      completed: false
    };

    this.setState({
      list: [...this.state.list, newItem]
    });
  };

  render() {
    return (
      <div className = 'App'>
        <div className = 'header'>
          <h2>Welcome to your Todo App!</h2>
          <ToDoForm addItem={this.addItem} />
        </div> 
        <TodoList list={this.state.list} />
      </div> 
    );
  }
}

export default App;
