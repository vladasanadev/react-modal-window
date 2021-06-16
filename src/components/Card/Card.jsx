import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";
import styles from "./style.css";
import empty from "../../img/products/star-empty.png";
import full from "../../img/products/star-full.png";
//Star Images

const imagesPath = {
  starEmpty: empty,

  starFull: full,
};

class Card extends Component {
  state = {
    favouriteProd: [],
    isFavourite: false,
  };
  //star function logic

  toggleFavourite = (laptopInfo) => {
    this.setState({
      isFavourite: !this.state.isFavourite,
      favouriteProd: laptopInfo,
    });
    console.log(laptopInfo);
  };
  getImageName = () => (this.state.isFavourite ? "starFull" : "starEmpty");

  render() {
    const imageName = this.getImageName();
    const { laptopInfo, modalHandler } = this.props;
    return (
      <div className="card">
        <img
          className="card__img"
          src={require(`../../img/products/${laptopInfo.image}`).default}
          alt="card"
        />
        <div className="card__info">
          <h1>Name: {laptopInfo.name}</h1>
          <div className="card__rating">
            <p>
              Add to favourite list:{" "}
              {
                <img
                  onClick={(e) => this.toggleFavourite(laptopInfo.name)}
                  className="star"
                  src={imagesPath[imageName]}
                  alt="star"
                ></img>
              }
            </p>
          </div>
          <p>Price:{laptopInfo.price}</p>
        </div>
        <Button
          text={"ADD TO CART"}
          backgroundColor={"darkgray"}
          dataID={laptopInfo.code}
          modalHandler={() => modalHandler()}
        />
      </div>
    );
  }
}

Card.propTypes = {};

export default Card;
