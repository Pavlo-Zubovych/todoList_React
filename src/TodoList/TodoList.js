import React from 'react';
import './TodoList.css';
import classNames from 'classnames';

const TodoList = ({ todos, onDeleteTodo, onDoneTodo }) => (
  <ul className='TodoList'>
    {todos.map(({ id, text, complited }) => (
      <li key={id} className='TodoList__item' onClick={() => onDoneTodo(id)}>
        <p
          className={classNames('TodoList__text', {
            TodoList__text__done: complited,
          })}
        >
          {text}
        </p>
        <button onClick={() => onDeleteTodo(id)}>Видалити</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
