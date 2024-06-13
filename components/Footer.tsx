"use client";
import { RootState, dispatch } from "@/store";
import { setLoaded } from "@/store/reducer/loading";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./footer.module.css";

const Footer = () => {
  const { loaded } = useSelector((state: RootState) => state.loadingLayout);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoaded(true));
    }, 3000);
  }, []);

  return (
    <div className={`${styles.footer} ${loaded ? "" : styles.footerload}`}>
      {loaded ? "Loaded Successfully" : "Loading...."}
    </div>
  );
};

export default Footer;
