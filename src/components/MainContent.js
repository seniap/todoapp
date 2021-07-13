import React, {useEffect, useState} from 'react';
import DateToday from './Date';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const LOCAL_STORAGE_KEY = 'react-todo-list-todos';

function MainContent() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  };

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  };

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  function editTodo(todoToEdit) {
    setTodos(todos.map(todo => {
      if(todo.id === todoToEdit.id) {
        return todoToEdit;
      }
      return todo;
    }));
  };

  return (
    <div className='content'>
      <h1><DateToday /></h1>
      <TodoForm addTodo={addTodo} />
      <TodoList 
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default MainContent;
