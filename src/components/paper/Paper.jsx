/** @jsxRuntime classic */
/** @jsx jsx */
// import React from "react";
import { jsx, useTheme } from "@emotion/react";
import PropTypes from "prop-types";

// import styles from "./paper.module.css";
import * as styles from "./paper.styles";

const Paper = ({ children }) => {
  const theme = useTheme();

  return (
    <div css={styles.paper({ theme })}>
      <div css={styles.frame({ theme })}>{children}</div>
    </div>
  );
};

Paper.PropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Paper;
