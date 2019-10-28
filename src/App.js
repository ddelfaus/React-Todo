import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor(){
  super();
  this.state = {


    data: [
      
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
    ],
    todo:''

  };

}
addTodo = e => {
  e.preventDefault();
  const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
  this.setState({ 
    data: [...this.state.data, newTodo], 
    todo: '' 
  });
};

changeTodo = e => this.setState({ [e.target.name]: e.target.value });

toggleTodoComplete = id => {
  let data = this.state.data.slice();
  data = data.map(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
      return todo;
    } else {
      return todo;
    }
  });
  this.setState({ data });
};

clearCompletedTodos = e => {
  e.preventDefault();
  let data = this.state.data.filter(item => !item.completed);
  this.setState({ data });
};

  render() {
    return (
      <div>

        <h1> Things to Do!</h1>
        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          data={this.state.data}
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearCompletedTodos}
        />
      </div>
    );
  }
}

export default App;
