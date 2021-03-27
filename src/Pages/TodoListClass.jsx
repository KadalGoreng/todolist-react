import React from "react";

import Paper from "../components/paper/PaperClass";
import Header from "../components/header/HeaderClass";
import TodoForm from "../components/todoform/TodoFormClass";
import Todos from "../components/todos/TodosClass";

import Container from "../Layout/Container";

class TodoList extends React.Component {
  state = {
    todos: [],
    showAdd: false
  };

  componentDidMount() {
    const todosStateLocalStorage =
      JSON.parse(localStorage.getItem("todos")) || [];

    const showAddStateLocalStorage =
      JSON.parse(localStorage.getItem("showAdd")) || false;
    this.setState({
      todos: todosStateLocalStorage,
      showAdd: showAddStateLocalStorage
    });
  }

  componentDidUpdate() {
    const { todos, showAdd } = this.state;
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("showAdd", JSON.stringify(showAdd));
  }

  addTodo = (value) => {
    // const { todos } = this.state;

    if (this.state.todos.length <= 9) {
      const addedTodo = [
        ...this.state.todos,
        { text: value, isCompleted: false }
      ];

      this.setState({
        todos: addedTodo
      });
    } else {
      alert("Only 10 todos");
    }
  };

  completeTodo = (index) => {
    const addedTodo = [...this.state.todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    this.setState({
      todos: addedTodo
    });
  };

  clearTodos = () => {
    if (this.state.showAdd) {
      alert("Click finish before clear");
      return;
    }

    this.setState({
      todos: []
    });
  };

  showAddToggle = () => {
    this.setState((prevState) => ({ showAdd: !prevState.showAdd }));
  };

  render() {
    const { todos, showAdd } = this.state;
    return (
      <Paper>
        <Container
          flexDirection="column"
          justifyContent="space-between"
          height="730px"
        >
          <Header
            showAddToggle={this.showAddToggle}
            showAdd={showAdd}
            clearTodos={this.clearTodos}
          />
          <TodoForm addTodo={this.addTodo} showAdd={showAdd} />
          <Todos todos={todos} completeTodo={this.completeTodo} />
        </Container>
      </Paper>
    );
  }
}

export default TodoList;
