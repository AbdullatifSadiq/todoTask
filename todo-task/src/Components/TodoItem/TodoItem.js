import React, { useState } from 'react';
import './TodoItem.css';
import Delete from '../../assets/delete.svg';
import Check from '../../assets/check.svg';

function TodoItem({
  todo,
  removeTodo,
  updateTodoItem,
  index,
  completeTodoItem,
  edit,
  setEdit,
}) {
  const [text, setText] = useState(todo.text);

  return (
    <div className='todoitem'>
      <div className='todo__container'>
        <span
          className={`todo__check ${edit && 'hide'}`}
          onClick={() => {
            completeTodoItem(index);
          }}
        >
          {todo.completed && <img src={Check} alt='check' className='check' />}
        </span>
        <div
          onDoubleClick={() => setEdit(todo.id)}
          className='todo__text__container'
        >
          {edit === todo.id ? (
            <form
              onSubmit={(e) => {
                updateTodoItem(e, index, text);
              }}
            >
              <input
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                className='edit__input'
              />
            </form>
          ) : (
            <p className={`todo__text ${todo.completed && 'complete'}`}>
              {todo.text}
            </p>
          )}
        </div>
      </div>
      <img
        src={Delete}
        alt='delete'
        className='delete'
        onClick={() => removeTodo(index)}
      />
    </div>
  );
}

export default TodoItem;
