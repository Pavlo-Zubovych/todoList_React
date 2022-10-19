import React from 'react';
import './TodoList.css';
import Todo from '../Todo';
// import classNames from 'classnames';

const TodoList = ({ todos, onDeleteTodo, onDoneTodo }) => (
  <ul className='TodoList'>
    {todos.map(({ id, text, complited }) => (
      <li key={id} className='TodoList__item' onClick={() => onDoneTodo(id)}>
        <Todo
          complited={complited}
          text={text}
          ondelete={() => onDeleteTodo(id)}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
