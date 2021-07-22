import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import './TodoForm.scss';

function TodoForm({addTodo}) {
  const [todo, setTodo]= useState({
    id: '',
    task:'',
    completed: false
  });

  function handleInputChange(e) {
    //const newTodo = {...todo, task: e.target.value};
    //setTodo(newTodo);
    setTodo({...todo, task: e.target.value});
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({...todo, id: uuidv4() });
      //Reset task input
      setTodo({...todo, task:''});
    }
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        name='task'
        type='text'
        placeholder='My new task will be...'
        value={todo.task}
        onChange={handleInputChange}
      />
      <button className='add-btn' type='submit'></button>
    </form>
  );
};

export default TodoForm;
