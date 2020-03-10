import React from "react";

class TodoForm extends React.Component {
    constructor() {
      super();
      this.state = {
        item: ""
      };
    }
    handleChanges = e => {
      this.setState({
        item: e.target.value
      });
    };
  

    handleSubmit = e => {
      e.preventDefault();
      this.handleSubmit(this.state.item);
      this.setState({
        item: ""
      });
    };
  
    render() {
    //   console.log("rendering form");
      return (
          <div>
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="item"
                    value={this.state.item}
                    placeholder='...todo'
                    onChange={this.handleChanges}
                />
                <button type='submit'>Add</button>
            </form>
            <button>Clear</button>
          </div>
        
        
      );
    }
  }
  
  export default TodoForm;