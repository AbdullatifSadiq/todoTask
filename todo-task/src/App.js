import { useState } from 'react';
import './App.css';
import TodoItem from './Components/TodoItem/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [tempTodos, setTempTodo] = useState([]);
  const [text, setText] = useState('');
  const [edit, setEdit] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleTodo = (e) => {
    e.preventDefault();

    const todo = {
      id: new Date(),
      text: text,
      completed: false,
    };
    setTodos([...todos, todo]);
    setTempTodo([...todos, todo]);
    setText('');
  };

  const removeTodo = (index) => {
    const newTodoItems = [...todos];
    newTodoItems.splice(index, 1);
    setTodos(newTodoItems);
    setTempTodo(newTodoItems);
  };

  const updateTodoItem = (e, index, text) => {
    e.preventDefault();
    const newTodoItems = [...todos];
    const item = newTodoItems[index];
    let todoObj = { text: text, completed: item.completed };
    newTodoItems.splice(index, 1, todoObj);
    setTodos([...newTodoItems]);
    setTempTodo([...newTodoItems]);
    setEdit(false);
  };

  const completeTodoItem = (index) => {
    const newTodoItems = [...todos];
    newTodoItems[index].completed === false
      ? (newTodoItems[index].completed = true)
      : (newTodoItems[index].completed = false);
    setTodos(newTodoItems);
    setCompleted(false);
  };

  const handleTab = (tab) => {
    switch (tab) {
      case 'completed':
        const completed = todos.filter((todo) => todo.completed === true);
        setTempTodo(completed);
        break;
      case 'active':
        const activeTodos = todos.filter((todo) => todo.completed === false);
        setTempTodo(activeTodos);
        break;
      case 'all':
        setTempTodo(todos);
        break;
      default:
        break;
    }
  };

  const handleClearCompleted = () => {
    const new_todo = todos.filter((todo) => todo.completed === false);
    setTodos(new_todo);
    setTempTodo(new_todo);
  };

  return (
    <div className='app'>
      <h1 className='header'>todos</h1>
      <div className='main'>
        <div className='input__container'>
          <form onSubmit={handleTodo}>
            <input
              type='text'
              placeholder='what needs to be done?'
              value={text}
              onChange={(e) => setText(e.target.value)}
              className='main__input'
            />
          </form>
        </div>
        <div className='todo__items'>
          {tempTodos.map((todo, idx) => {
            return (
              <TodoItem
                todo={todo}
                key={idx}
                removeTodo={removeTodo}
                updateTodoItem={updateTodoItem}
                completeTodoItem={completeTodoItem}
                index={idx}
                edit={edit}
                setEdit={setEdit}
                completed={completed}
                setCompleted={setCompleted}
              />
            );
          })}
        </div>
      </div>
      {todos.length > 0 && (
        <div className='footer'>
          <div className='task__count'>{todos.length} item(s) left</div>
          <div className='tabs'>
            <p className='tab' onClick={() => handleTab('all')}>
              All
            </p>
            <p className='tab' onClick={() => handleTab('active')}>
              Active
            </p>
            <p className='tab' onClick={() => handleTab('completed')}>
              Completed
            </p>
          </div>
          <div
            className='clear__completed'
            onClick={() => handleClearCompleted()}
          >
            {' '}
            Clear Completed
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
