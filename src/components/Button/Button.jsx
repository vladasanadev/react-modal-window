import React, { Component } from "react";
import styles from "./Button.css";

export default class Button extends React.Component {
  render() {
    const { text, backgroundColor, modalHandler, dataID } = this.props;
    console.log(dataID);
    return (
      <div>
        <button
          id={dataID}
          style={{ backgroundColor: backgroundColor }}
          onClick={modalHandler}
        >
          {text}
        </button>
      </div>
    );
  }
}
