import React from "react";
import style from "./Carousel.module.css";
import CarouselItem from "./subComponents/CarouselItem";

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          header: "얼큰한 라면에 한젓갈?",
          img: "some url",
          ind: 0,
          item: "파김치"
        },
        {
          header: "뜨끈한 국밥에 한조각?",
          img: "some url",
          ind: 1,
          item: "깍두기"
        }
      ],
      curInd: 0,
      totalImgCt: 2
    };
    this.rightArrow = this.rightArrow.bind(this);
    this.leftArrow = this.leftArrow.bind(this);
  }

  rightArrow() {
    let { curInd, totalImgCt } = this.state;
    curInd += 1;
    if (curInd >= totalImgCt) {
      curInd = 0;
    }
    this.setState({ curInd });
  }

  leftArrow() {
    let { curInd, totalImgCt } = this.state;
    curInd -= 1;
    if (curInd < 0) {
      curInd = totalImgCt - 1;
    }
    this.setState({ curInd });
  }

  render() {
    const { items, curInd } = this.state;

    return (
      <ul className={style.carouselContainer}>
        {items.map(
          item =>
            item.ind === curInd && (
              <CarouselItem
                key={item.ind}
                header={item.header}
                img={item.img}
                item={item.item}
              />
            )
        )}
        <button className={style.leftBtn} onClick={this.leftArrow}>
          <i className="fas fa-caret-left fa-2x" />
        </button>
        <button className={style.rightBtn} onClick={this.rightArrow}>
          <i className="fas fa-caret-right fa-2x" />
        </button>
      </ul>
    );
  }
}

export default Carousel;
