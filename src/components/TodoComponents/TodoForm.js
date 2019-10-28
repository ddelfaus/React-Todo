import React from 'react';




const TodoForm = props => {
  return (
   
   
   
   
   
   <form>
      <input


        type="text"
        name="todo"
        onChange={props.handleTodoChange}
        
        value={props.value}
        placeholder="things to do"
      />
      <button onClick={props.handleAddTodo}>Add </button>
      <button onClick={props.handleClearTodos}>Clear</button>
    </form>
  );
};


export default TodoForm;