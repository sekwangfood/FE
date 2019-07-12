import React from "react";
import style from "./Homepage.module.css";
import Header from "../../components/header/Header";
import Carousel from "../../components/carousel/Carousel";
import LinkContainer from "../../components/linkContainer/LinkContainer";

class Homepage extends React.Component {
  render() {
    return (
      <div className={style.home}>
        <Header />
        <Carousel />
        <LinkContainer />
      </div>
    );
  }
}

export default Homepage;
