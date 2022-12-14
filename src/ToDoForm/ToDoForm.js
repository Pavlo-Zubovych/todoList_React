import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './ToDoForm.module.css';

class ToDoForm extends Component {
  state = {
    task: '',
  };

  handelInput = (event) => {
    const { value } = event.target;
    this.setState({ task: value });
  };

  handelSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.task);
    this.resetInput();
  };

  resetInput = () => {
    this.setState({ task: '' });
  };

  render() {
    const { task } = this.state;
    const nameId = nanoid();

    return (
      <form className={styles.Form} onSubmit={this.handelSubmit}>
        <label className={styles.Label}>
          {/* New_task */}
          <input
            placeholder='Нове завдання' /*New task'*/
            className={styles.Input}
            id={nameId}
            type='text'
            value={task}
            onChange={this.handelInput}
            required
          />
        </label>

        <button type='submit' className={styles.Button}>
          Додати {/* Add task */}
        </button>
      </form>
    );
  }
}

export default ToDoForm;
