import { useState } from 'react';
import Footer from './Components/Footer/Footer';
import TodoItem from './Components/TodoItem/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [id, setId] = useState(1);

  const handleTodo = (e) => {
    e.preventDefault();

    const todo = {
      id: id,
      text: text,
      completed: false,
    };
    setTodos([...todos, todo]);
    setId(id + 1);
    setText('');
  };

  const removeTodo = (id) => {
    const new_todos = todos.filter((todo) => todo.id !== id);
    setTodos([...new_todos]);
  };

  // const updateTodo = (todo) => {
  //   const old_todo = todos.filter((oldTodo) => oldTodo.id !== todo.id);
  //   old_todo[todo.id - 1] = todo;
  //   setTodos([...old_todo]);
  // };

  return (
    <div className='app'>
      <h1 className='header'>todos</h1>
      <div className='todo__items'>
        {/* input */}
        <div className='todo__input'>
          <form onSubmit={handleTodo}>
            <input
              type='text'
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder='what needs to be done?'
            />
          </form>
        </div>

        {/* todo component */}
        {todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              removeTodo={removeTodo}
              // updateTodo={updateTodo}
            />
          );
        })}

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
