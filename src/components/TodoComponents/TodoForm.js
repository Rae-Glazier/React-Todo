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
      if(this.state.item !== ''){
        this.props.addItem(this.state.item);
        this.setState({
            item: ""
      });}
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
                    placeholder='...procrastination...'
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
            
          </div>
        
        
      );
    }
  }
  
  export default TodoForm;