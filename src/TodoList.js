import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  return (
    <div className="container mt-4">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={newTodo}
            onChange={(event) => setNewTodo(event.target.value)}
            placeholder="Enter a new to-do item"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Item
        </button>
      </form>
      <ul className="list-group mt-4">
        {todos.map((todo, index) => (
          <li className="list-group-item" key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
