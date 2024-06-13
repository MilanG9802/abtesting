import React from "react";
import styles from "./component.module.css";

const Header = ({ title }: { title: string }) => {
  return (
    <div className={styles.header}>
      <p>Header</p>
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
