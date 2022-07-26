import React from 'react';
import Todo from '../todo/Todo';

const Todos = (props) => {
    return (
        <div>
          { 

          props.todos.map(todo=> <Todo
          todo={todo}
          key={todo.id}
          id={todo.id}
          onDeleteTodo={props.onDeleteTodo}
          
          ></Todo>)
          
          
          }
        </div>
    );
};

export default Todos;