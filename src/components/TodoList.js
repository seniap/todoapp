import React from 'react';
import Todo from './Todo';
import './TodoList.scss';

function TodoList({todos, toggleComplete, removeTodo, editTodo}) {
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <Todo 
          key={todo.id} 
          todo={todo} 
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
