import React from 'react';
import { Component } from 'react';

// import styles from './App.module.css';
// import ToDoItem from './ToDoItem/ToDoItem';
// import ToDoForm from './ToDoForm/ToDoForm';
import TodoList from './TodoList/TodoList';
import intialTodos from './todos.json';

class App extends Component {
  state = {
    todos: intialTodos,
  };

  deleteTodo = (todoId) => {
    this.setState((prevstate) => ({
      todos: prevstate.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.complited ? total + 1 : total),
      0
    );

    return (
      <div className='App'>
        <h1>Стан компонета</h1>
        <div>
          <p>Загальна кількість: {totalTodoCount}</p>
          <p>Виконано: {completedTodoCount}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        {/* <ToDoForm /> */}
        {/* <ToDoItem /> */}
      </div>
    );
  }
}

export default App;
