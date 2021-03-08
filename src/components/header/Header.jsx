import React from "react";
import PropTypes from "prop-types";

import Button from "../button/Button";

import styles from "./header.module.css";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className={styles.header}>
      {/* <button className="header-btn main-black-color" onClick={showAddToggle}>
        {showAdd ? "Finish" : "Add"}
      </button> */}
      <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
      <h1 className={styles.headerTitle}>Todo List</h1>
      {/* <button className="header-btn main-red-color" onClick={clearTodos}>
        Clear
      </button> */}
      <Button text="Clear" onClick={clearTodos} color="redd" align="right" />
    </section>
  );
};

Header.propType = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
