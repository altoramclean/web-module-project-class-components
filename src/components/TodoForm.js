import React from 'react';
class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            input: ""
        }
    }

    handleChanges = event => {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addItem(this.state.input)
    }
    render() {
        return( 
            <form>
                <input 
                   onChange = {this.handleChanges}
                    type = "text"
                    name = "item"
                 
                />

                <button onClick = {this.handleSubmit}>Add a Todo</button>
                <button onClick = {this.props.clearDone}>Clear , You are All Done!</button>
            </form>

        )
    };
};


export default TodoForm; 