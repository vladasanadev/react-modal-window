import React, { Component, useEffect } from "react";
import Button from "./components/Button/Button.jsx";
import Modal from "./components/Modal/Modal.jsx";
import data from "../src/common-files/data.json";
import shopData from "../src/common-files/products.json";

class App extends React.Component {
  state = {
    show: false,
    modalInfo: {},
  };

  updateModal = (id) => {
    const modalInfo = data.modalDAta.filter((modal) => modal.id === id);
    console.log(modalInfo);
    this.setState({
      show: !this.state.show,
      modalInfo: modalInfo,
    });
    console.log(this.state);
  };
  showModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    // useEffect(() => {
    //   fetch("products.json", {
    //     header: {
    //       "Content-type": "application/json",
    //     },
    //   }).then((r) => r.json());
    //   console.log("data products", data);
    // }, []);

    console.log(data);
    const dataID = {
      buttonOne: 1,
      buttonTwo: 2,
    };
    return (
      <div className="App">
        {this.state.show && (
          <Modal
            show={this.state.show}
            header={this.state.modalInfo[0].header}
            text={this.state.modalInfo[0].text}
            handler={this.showModal}
            actions={[
              <Button
                text={"YES"}
                backgroundColor={"#b53726"}
                modalHandler={this.showModal}
              />,
              <Button text={"NO"} backgroundColor={"#b53726"} />,
            ]}
          />
        )}
        <Button
          text={"Open first modal"}
          backgroundColor={"grey"}
          dataID={dataID.buttonOne}
          // modalText={
          //   "Once you delete this file it won't be possible to restore it.Do you wanna delete this file"
          // }
          modalHandler={() => this.updateModal(dataID.buttonOne)}
        />
        <Button
          dataID={dataID.buttonTwo}
          text={"Open second modal"}
          backgroundColor={"pink"}
          // modalText={"Second modal window"}
          // header={"Are you sure you wanna close?"}
          modalHandler={() => {
            this.updateModal(dataID.buttonTwo);
          }}
        />
      </div>
    );
  }
}

export default App;
