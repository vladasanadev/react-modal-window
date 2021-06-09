import React, { Component } from "react";
import styles from "./Modal.css";
import Button from "../Button/Button";

export default class Modal extends Component {
  render() {
    console.log(this.props);

    return (
      <div onClick={this.props.handler} className="modal" id="simpleModal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="closeBtn" onClick={this.props.handler}>
              &times;
            </span>
            <h2>{this.props.header}</h2>
          </div>
          <div className="modal-body">
            <p>{this.props.text}</p>
          </div>
          <div className="modal-footer">{this.props.actions}</div>
        </div>
      </div>
    );
  }
}
