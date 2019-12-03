import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px dashed white;
  color: palevioletred
  background: white
  border-radius: 5px;
`;

class ToDoForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        newTask: ''
      };
    }
  
    handleInput = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.setState({
        newTask: ''
      });
      this.props.handleSubmit(e, this.state.newTask);
    };
  
    render() {
      return (
        <>
          <form onSubmit = {this.handleSubmit}>
            <input
              value = {this.state.newTask}
              name = "newTask"
              placeholder = "new task"
              onChange = {this.handleInput}
            />
            <Button type = "submit"> Add Task </Button>
          </form>
          <Button onClick = {this.props.clearCompleted}> Clear Completed </Button>
        </>
      );
    }
  }
  
  export default ToDoForm;