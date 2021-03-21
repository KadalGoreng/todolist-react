import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Container from "../../Layout/Container";
import Todo from "../todo/TodoClass";

const StylesTodoPlaceholderText = styled.div`
  font-family: "Homemade Apple", sans-serif;
  font-size: 24px;
  text-align: center;
  padding: 16px;
`;
const StylesAddButtonPlaceholderText = styled.span`
  font-family: "Bungee", sans-serif;
  font-size: 24px;
`;

class Todos extends React.Component {
  render() {
    const { todos, completeTodo } = this.props;
    return (
      <section className="todos-component">
        <Container flexDirection="column" minHeight="500px">
          {todos.length > 0 &&
            todos.map((todo, index) => {
              return (
                <Todo
                  key={index}
                  text={todo.text}
                  isCompleted={todo.isCompleted}
                  completeTodo={completeTodo}
                  index={index}
                />
              );
            })}
          {todos.length === 0 && (
            <StylesTodoPlaceholderText>
              {[
                "Add todo by clicking ",
                <StylesAddButtonPlaceholderText>
                  Add
                </StylesAddButtonPlaceholderText>,
                " button on the top left corner"
              ]}
            </StylesTodoPlaceholderText>
          )}
        </Container>
      </section>
    );
  }

  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string
      })
    ),
    completeTodo: PropTypes.func.isRequired
  };
}

export default Todos;
