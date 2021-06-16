import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card.jsx";
import styles from "./style.css";

class CardList extends Component {
  render() {
    const { productInfo, handler } = this.props;

    return (
      <div className="card-list">
        {productInfo.map((laptop) => {
          return <Card laptopInfo={laptop} modalHandler={handler} />;
        })}
      </div>
    );
  }
}

CardList.propTypes = {};

export default CardList;
