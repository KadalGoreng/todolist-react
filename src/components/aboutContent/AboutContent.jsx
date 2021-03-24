/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Link } from "react-router-dom";

import Container from "../../Layout/Container";
import Item from "../../Layout/Item";
import * as styles from "./About.style";

const AboutContent = () => {
  return (
    <section className="about">
      <Container flexDirection="column">
        <Item align="center">
          <h1 css={styles.aboutPageHeader}>About this Apps</h1>
          <h3 css={styles.aboutPageSubHeader}>
            what i learn by building this apps
          </h3>
        </Item>
        <Item>
          <Container>
            <p css={styles.aboutParagraph}>
              I have learned React from the ground up. I know more about
              component, props, function, emotionn css, styling in react, CSS in
              JS, React Router and React Hooks
            </p>
          </Container>
        </Item>
        <Item align="center">
          <Link to="/">
            <span css={styles.aboutPageHeader}>Back to home</span>
          </Link>
        </Item>
      </Container>
    </section>
  );
};

export default AboutContent;
