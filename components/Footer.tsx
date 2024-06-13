"use client";
import { RootState, dispatch } from "@/store";
import { setLoading } from "@/store/reducer/loading";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const { loading } = useSelector((state: RootState) => state.loadingLayout);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(true));
    }, 3000);
  }, []);

  return <div>{loading ? "Loaded Successfully" : "Loading...."}</div>;
};

export default Footer;
