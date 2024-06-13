"use client";
import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./component.module.css";

const Footer = () => {
  const { loaded } = useSelector((state: RootState) => state.loadingLayout);

  return (
    <div className={`${styles.footer} ${loaded ? "" : styles.footerload}`}>
      {loaded ? "Loaded Successfully" : "Loading...."}
    </div>
  );
};

export default Footer;
