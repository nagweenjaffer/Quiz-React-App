import React from "react";
import HeaderStyles from "./style.module.css";

const Header = ({ counter }) => {
  return (
    <div className={HeaderStyles.navbar}>
      <div className={HeaderStyles.element}>View Scores</div>
      <div className={HeaderStyles.element}>Time:{counter}</div>
    </div>
  );
};

export default Header;
