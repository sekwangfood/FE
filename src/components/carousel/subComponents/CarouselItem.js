import React from "react";
import style from "./CarouselItem.module.css";

class CarouselItem extends React.Component {
  constructor() {
    super();
    this.formHeader = this.formHeader.bind(this);
  }
  formHeader() {
    const { header, item } = this.props;
    let split = header.split(" ");
    split.splice(2, 0, item);
    return (
      <div className={style.header}>
        {split[0]} {split[1]}
        {<div className={style.highlight}>{split[2]}</div>} {split[3]}
      </div>
    );
  }
  render() {
    const { header, img } = this.props;
    return (
      <div className={style.itemContainer}>
        <div className={style.headerContainer}>
          <div className={style.header}>{this.formHeader()}</div>
        </div>
      </div>
    );
  }
}

export default CarouselItem;
