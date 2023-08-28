import Form from './Form/Form'
import List from './List/List';
import './todolist.scss'
import React , { useState, useEffect } from 'react'

const Todolist = () => {
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);
  
    const handleEdit = (todo) => {
      setEditTodo(todo);
    };
  
    const handleDelete = (todoToDelete) => {
      const updatedTodos = todos.filter((todo) => todo.id !== todoToDelete.id);
      setTodos(updatedTodos);
    };
  
    const addTodo = (todo) => {
      if (!todo.text || /^\s*$/.test(todo.text)) {
        return;
      }
  
      if (editTodo) {
        setTodos((prev) =>
          prev.map((item) => (item.id === todo.id ? todo : item))
        );
        setEditTodo(null);
      } else {
        setTodos((prev) => [...prev, todo]);
      }
    };
  
    return (
       <div className='todoList'>
        <h1>⬇️ Add Your Tasks ⬇️</h1>
        <Form onSubmit={addTodo} editTodo={editTodo} />
        <List todos={todos} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    )
  }

  export default Todolist