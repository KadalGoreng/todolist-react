import React from "react";
import { withTheme } from "@emotion/react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  font-size: 1.8rem;
  font-family: "Bungee", sans-serif;
  color: ${(props) => props.textColor};
  text-align: ${(props) => props.align};

  /* width: 24%; */
  padding: 16px;
  cursor: pointer;
  background: unset;
  border: unset;
  outline: unset;
`;

class Button extends React.Component {
  render() {
    const { text, onClick, color, align, theme } = this.props;
    const {
      color: { primary }
    } = theme;

    let textColor;
    switch (color) {
      case "black":
        textColor = primary.black;
        break;
      case "redd":
        textColor = primary.red;
        break;
      default:
        textColor = primary.black;
    }

    return (
      <StyledButton textColor={textColor} align={align} onClick={onClick}>
        {text}
      </StyledButton>
    );
  }

  static defaultProps = {
    text: "Button",
    color: "black",
    align: "left"
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(["black", "redd"]),
    align: PropTypes.oneOf(["left", "right"])
  };
}

export default withTheme(Button);
