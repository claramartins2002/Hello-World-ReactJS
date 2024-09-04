import { Component } from "react";
import P from 'prop-types';
import React from "react";
import './styles.css';
export class Button extends Component {
    render() {
        const { text, onClick, disabled } = this.props;
        return (
            <button disabled={disabled} className="button" onClick={onClick}>{text}</button>
        );

    }

}

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
Button.defaultProps = {
  disabled: false
}
