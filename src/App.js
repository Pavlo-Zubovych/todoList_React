import React from 'react';
import { Component } from 'react';

import styles from './App.module.css';
// import ToDoItem from './ToDoItem/ToDoItem';
import Container from './Container';
import ToDoForm from './ToDoForm';
import TodoList from './TodoList';
import Filter from './Filter';
// import intialTodos from './todos.json';
import shortid from 'shortid';

class App extends Component {
  state = {
    todos: [],
    filter: '',
  };

  addTodo = (text) => {
    // console.log(text);

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
    // console.log(this.state);
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.complited ? total + 1 : total),
      0
    );
  };

  componentDidMount() {
    console.log('componentDidMount');

    const todos = localStorage.getItem('todos');
    const parsedTodis = JSON.parse(todos);

    if (parsedTodis) {
      this.setState({ todos: parsedTodis });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      // console.log('componentDidUpdate + ');
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        <div className='App'>
          <h1 className={styles.Title}>to_Dolist</h1>

          <ToDoForm onSubmit={this.addTodo} />
          <div>
            <span className={styles.Calculation}>
              Загальна кількість: {totalTodoCount}
            </span>{' '}
            <span> Виконано: {completedTodoCount}</span>
          </div>

          <Filter value={filter} onChange={this.changeFilter} />

          <TodoList
            todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onDoneTodo={this.doneTodo}
          />
          {/* <ToDoItem /> */}
        </div>
      </Container>
    );
  }
}

export default App;
