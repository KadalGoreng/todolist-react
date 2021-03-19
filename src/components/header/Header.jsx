/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from "@emotion/react";
// import React from "react";
import PropTypes from "prop-types";

import Button from "../button/Button";
import Container from "../../Layout/Container";
import Item from "../../Layout/Item";

// import styles from "./header.module.css";
import * as styles from "./header.styles";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();

  return (
    <section className="header-component">
      <Container alignItems="flex-start">
        <Item flex={1}>
          <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
        </Item>
        <Item flex={2}>
          <h1 css={styles.headerTitle({ theme })}>Todo List</h1>
        </Item>
        <Item flex={1} align="right">
          <Button
            text="Clear"
            onClick={clearTodos}
            color="redd"
            align="right"
          />
        </Item>
      </Container>
      {/* <button className="header-btn main-black-color" onClick={showAddToggle}>
        {showAdd ? "Finish" : "Add"}
      </button> */}
      {/* <button className="header-btn main-red-color" onClick={clearTodos}>
        Clear
      </button> */}
    </section>
  );
};

Header.propType = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
