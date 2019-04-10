import React, { Component } from 'react';
import Todos from './Todos'
import AddTask from './AddTask'

class App extends Component {
  state ={
    todos: [
      {id:1, content: 'Finish homework'},
      {id:2, content: 'Clean room'},
    ]
  }
  deleteList =(id) => {
    const todos=this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="App">
        <div className="todos collection">
        <h1 className="center red-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteList={this.deleteList}/>
        <AddTask AddTask={this.AddTask} />
        </div>
         
      </div>
    );
  }

  AddTask=(todo)=>{
    todo.id=Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
}

export default App;
