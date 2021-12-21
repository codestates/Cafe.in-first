import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import LoginNav from "../components/LoginNav";
import Nav from "../components/Nav";
import Main from "../components/Main";
import LoginMain from "../components/LoginMain";

export default function index() {
  const state = useSelector((state) => state.userReducer);
  const { isLoggedIn } = state;

  return (
    <>
      {isLoggedIn ? <LoginNav /> : <Nav />}
      {isLoggedIn ? <LoginMain /> : <Main />}
    </>
  );
}
