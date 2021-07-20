import React, {useState, useRef, useEffect} from 'react';

function Todo({todo, toggleComplete, removeTodo, editTodo}) {
  //Destructuring assignment
  const [editMode, setEditMode] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(todo);
  const inputEl = useRef(null);

  function handleCheckboxClick() {
    toggleComplete(currentTodo.id);
  };

  function handleRemoveClick() {
    removeTodo(currentTodo.id);
  };

  function handleEditClick() {
    setEditMode(true);
  };

  function handleInputChange(e) {
    setCurrentTodo({...currentTodo, task: e.target.value});
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (currentTodo.task.trim()) {
      editTodo(currentTodo);
      setEditMode(false);
    }
  };

  useEffect(() => {
    if (editMode) {
      inputEl.current.focus();
    }
  }, [editMode]);

  if (editMode) {
    return (
      <div className="todo-item">
        <form className="edit-form" onSubmit={handleSubmit} onBlur={handleSubmit} >
          <input ref={inputEl} className="edit-input" type="text" value={currentTodo.task} onChange={handleInputChange} />
          <button className="save-btn"></button>
        </form>
      </div>
    )
  };

  return (
    <div className={todo.completed ? "todo-item completed" : "todo-item"}>
      <div className="task">
        <input type="checkbox" onChange={handleCheckboxClick} checked={todo.completed}/>
        <li>{currentTodo.task}</li>
      </div>
      <div className="buttons">
        <button className="delete-btn" onClick={handleRemoveClick}></button>
        <button className="edit-btn" onClick={handleEditClick}></button>
      </div>
  </div>
  )
}

export default Todo;
