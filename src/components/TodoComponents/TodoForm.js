import React from 'react';

class ToDoForm extends React.Component{
    constructor() {
        super();
        this.state = {
            newItem: ''
        };
    }

    handleChanges = e => {
        this.setState({ newItem: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.newItem);
        this.setState({
            newItem: ''
        });
    };

    render() {
        console.log('rendering');
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    value = {this.state.newItem}
                    onChange = {this.handleChanges}
                    type = 'text'
                    name = 'item'
                />
                <button>Add</button>
            </form>
        );
    }
}

export default ToDoForm;