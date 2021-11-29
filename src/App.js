import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },

  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },

  {
    task: 'Clean Living-Room',
    id: 123456,
    completed: false
  }
];





class App extends React.Component {
  constructor() {
    super();
    this.state  = {
      todo: list
    }
  };

  toggleItem = id => {
    const newList = this.state.todo.map(item => {
      if( item.id === id) {
        return {
          ...item,
          done: !item.done
        }

      } else {
        return(item);
      }

    })
    this.setState({
      todo: newList
    })
  };

  addItem = task => {
    const newItem = {
      task: task,
      id: this.state.todo.length,
      completed: false
    }

    this.setState({
      todo: [...this.state.todo, newItem]
    })
  }
  clearDone = event => {
    event.preventDefault();
    const newList = this.state.todo.filter(item => {
      return(item.done === false)
    })

    this.setState({
      todo: newList
    })
  }
  render() {
    return (
      <div className="App">
          <h2>Welcome to Your Todo App!</h2>
          <h3>Add Anything You'd Like!</h3>
          <TodoList clearDone = {this.clearDone} 
                    todo = {this.state.todo}
                    toggleItem = {this.toggleItem}
          />

        <div className = "formList">
          <TodoForm addItem = {this.addItem}
                    clearDone = {this.clearDone}
          />
        </div>
      </div>
    )
  }
}

export default App;