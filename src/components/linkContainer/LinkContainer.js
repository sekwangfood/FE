import React from "react";
import style from "./LinkContainer.module.css";

class LinkContainer extends React.Component {
  render() {
    return (
      <div className={style.linkContainer}>
        <div className={style.link}>앱 받으러 가기</div>
        <div className={style.link}>고객지원</div>
      </div>
    );
  }
}

export default LinkContainer;
