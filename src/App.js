import React from 'react';

import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';
import styled from 'styled-components'; 


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
  text-decoration: underline;
`;

const Main = styled.section`
  padding: 4em;
  background: palevioletred;
  text-align: center;
  color: white;
  margin: 10%;
`;




class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    todos: []
  };

  componentDidMount = () => {
    const localToDos = JSON.parse(localStorage.getItem("todoList"));
    this.setState({
      todos: localToDos || []
    });
  };

  handleSubmit = (e, newTask) => {
    e.preventDefault();
    let taskShape = {
      task: newTask,
      id: Date.now(),
      completed: false
    };

    const newToDoList = [...this.state.todos, taskShape];

    this.setState({
      todos: newToDoList
    });
    localStorage.setItem("todoList", JSON.stringify(newToDoList));
  };

  toggleCompleted = id => {
    const toDoById = this.state.todos.map(todo => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    this.setState({
      todos: toDoById
    });
    localStorage.setItem("todoList", JSON.stringify(toDoById));
  };

  clearCompleted = () => {
    const completed = this.state.todos.filter(todo => {
      return todo.completed === false;
    });
    this.setState({
      todos: completed
    });
    localStorage.setItem("todoList", JSON.stringify(completed));
  };

  render() {
    if (!this.state.todos) return <h1>loading to dos... </h1>;
    return (
      <Main>
        <Title>Rae's Todo App!</Title>
        <ToDoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
        />
        <ToDoForm
          handleSubmit={this.handleSubmit}
          clearCompleted={this.clearCompleted}
        />
      </Main>
    );
  }
}

export default App;
