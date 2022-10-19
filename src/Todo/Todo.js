import React from 'react';
import classNames from 'classnames';

const Todo = ({ complited, text, onDelete }) => (
  <>
    <p
      className={classNames('TodoList__text', {
        TodoList__text__done: complited,
      })}
    >
      {text}
    </p>
    <button className='Button_delete' onClick={onDelete}>
      Видалити {/*Delete */}
    </button>
  </>
);

export default Todo;
