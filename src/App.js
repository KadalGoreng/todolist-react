import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

import TodoList from "./Pages/TodoListClass";
import About from "./Pages/About";

const theme = {
  color: {
    primary: {
      black: "#484848",
      red: "#e06262"
    }
  },
  background: {
    color: {
      primary: "#c9fffa"
    }
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
