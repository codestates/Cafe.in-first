import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Nav from "../components/Nav";
import { loginAction } from "../reducer/user";
import Router from "next/router";
import axios from "axios";

export default function signin() {
  //   const state = useSelector((state) => state.userReducer);
  //   const { isLoggedIn } = state;
  const [loginInfo, setLoginInfo] = useState({
    id: "yar0606@naver.com",
    password: "qwe!1234",
  });
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  }; //이거는 템플릿이라고 생각하자. 배열로 만들어진 부분에 key값의 value가 타깃벨류로 변함
  const dispatch = useDispatch();
  const login = () => {
    if (loginInfo.id === "" || loginInfo.password === "") {
      console.log("아디비번 안친거 확인");
      return;
    }
    axios
      .post(
        "https://localhost:8080/users/sign-in",
        {
          user_email: loginInfo.id,
          password: loginInfo.password,
        },
        {
          "Content-Type": "application/json",
          withCredentials: true,
        }
      )
      .then(() => {
        axios
          .get("https://localhost:8080/users/mypage", {
            withCredentials: true,
          })
          .then((res) => {
            dispatch(loginAction(res.data.data));
            Router.push("/"); //리다이렉트
          });
      })
      .catch((res) => console.log(res.message));
  };

  return (
    <>
      <Nav />
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <span>이메일</span>
          <input
            type="text"
            onChange={handleInputValue("id")}
            value={loginInfo.id}
          />
        </div>
        <div>
          <span>비번</span>
          <input
            type="password"
            onChange={handleInputValue("password")}
            value={loginInfo.password}
          />
        </div>
        <button type="submit" onClick={login}>
          로그인하기
        </button>
      </form>
    </>
  );
}
