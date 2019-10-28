// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';


const TodoList = props => {
    return(
        <div>
          {props.todo.map(item => (
              <h1>{props.item.task}</h1>
          ))}


        </div>
    )
}


export default TodoList;