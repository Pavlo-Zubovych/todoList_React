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

    this.props.onSubmit(this.state);
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
          New task
          <input
            className={styles.Input}
            id={nameId}
            type='text'
            value={task}
            onChange={this.handelInput}
            required
          />
        </label>

        <button type='submit' className={styles.Button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ToDoForm;
