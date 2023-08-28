import React, {useState, useEffect} from "react"
import Todo from "../Todo/Todo";
import './list.scss'

const List = ({ todos, onEdit, onDelete }) => {
    return (
      <ul className="list-items">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </ul>
    );
  };
export default List