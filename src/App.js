import React from 'react';
import { Component } from 'react';

// import styles from './App.module.css';
// import ToDoItem from './ToDoItem/ToDoItem';
import ToDoForm from './ToDoForm/ToDoForm';
import TodoList from './TodoList/TodoList';
import intialTodos from './todos.json';
import shortid from 'shortid';

class App extends Component {
  state = {
    todos: intialTodos,
  };

  addTodo = (text) => {
    console.log(text);

    const todo = {
      id: shortid.generate(),
      text: text,
      complited: false,
    };

    this.setState((prevState) => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  deleteTodo = (todoId) => {
    this.setState((prevstate) => ({
      todos: prevstate.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  doneTodo = (todoId) => {
    // console.log(this.state.todos);
    console.log(`Клікнули по завданню №${todoId}`);

    // this.setState((prevstate) => ({
    //   todos: prevstate.todos.map((todo) => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         complited: !todo.complited,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === todoId ? { ...todo, complited: !todo.complited } : todo
      ),
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
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
        <h1>to_Dolist</h1>
        <div>
          <p>Загальна кількість: {totalTodoCount}</p>
          <p>Виконано: {completedTodoCount}</p>
        </div>

        <ToDoForm onSubmit={this.addTodo} />
        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onDoneTodo={this.doneTodo}
        />
        {/* <ToDoItem /> */}
      </div>
    );
  }
}

export default App;
