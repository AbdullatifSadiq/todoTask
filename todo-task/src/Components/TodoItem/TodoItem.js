import React, { useState } from 'react';
import { FaRegCheckCircle, FaTimes } from 'react-icons/fa';
import './TodoItem.css';

function TodoItem({ todo, removeTodo }) {
  const [edit, setEdit] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newTodo = {
    //   id: todo.id,
    //   text: newText,
    //   completed: todo.completed,
    // };
    todo.text = newText;
    setEdit(false);
    setNewText('');
  };

  return (
    <div className='todo' onDoubleClick={() => setEdit(true)}>
      <div onClick={() => setCompleted(!completed)} className='complete__btn'>
        {!edit && completed ? (
          <FaRegCheckCircle />
        ) : (
          <span className='circle'></span>
        )}
      </div>

      {edit ? (
        <div className='edit__input'>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type='text'
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
          </form>
        </div>
      ) : (
        <div className='main__todo'>
          <span className={`todo__text ${completed && 'completed'}`}>
            {todo.text}
          </span>
        </div>
      )}

      <div onClick={() => removeTodo(todo.id)} className='delete__btn'>
        <FaTimes />
      </div>
    </div>
  );
}

export default TodoItem;
