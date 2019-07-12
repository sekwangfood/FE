import React from "react";
import style from "./Header.module.css";

class Header extends React.Component {
  render() {
    return (
      <div className={style.header}>
        <div className={style.logoContainer}>오늘도김치</div>
        {/* <div className={style.menuContainer}>
          <div className={style.menuItem}>김치</div>
        </div> */}
      </div>
    );
  }
}

export default Header;
