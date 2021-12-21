import React, { useState } from "react";
import LoginNav from "../components/LoginNav";
import { useSelector, useDispatch } from "react-redux";
import { loginAction, logoutAction } from "../reducer/user";
import Router from "next/router";
import axios from "axios";
import Hashtag from "../components/Hashtag";

export default function userinfo() {
  const state = useSelector((state) => state.userReducer);
  const { me } = state;
  const dispatch = useDispatch();

  const logout = async () => {
    await axios.post("https://localhost:8080/users/sign-out", null, {
      withCredentials: true,
    });
    alert("안녕안녕안안녕!");
    dispatch(logoutAction());
    Router.push("/");
  };

  const [text, setText] = useState(""); //눈 피해
  const textHandle = (e) => {
    setText(e.target.value);
  };

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const oldPasswordHandle = (e) => {
    setOldPassword(e.target.value);
  };
  const newPasswordHandle = (e) => {
    setNewPassword(e.target.value);
  };

  const changePassword = async () => {
    axios
      .patch(
        "https://localhost:8080/users/mypage/password",
        {
          old_password: oldPassword,
          new_password: newPassword,
        },
        {
          "Content-Type": "application/json",
          withCredentials: true,
        }
      )
      .then((res) => {
        dispatch(loginAction(res.data));
      })
      .catch((err) => alert(err.response.data.message));
    //서버에서 정의한 오류응답 메시지를 담고 싶을 때는 이렇게ㅔ
  };

  const deleteAccount = () => {
    axios
      .post(
        "https://localhost:8080/users/delete-account",
        {
          password: oldPassword,
        },
        {
          "Content-Type": "application/json",
          withCredentials: true,
        }
      )
      .then((res) => {
        alert(res.data.message);
        dispatch(logoutAction());
        Router.push("/");
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <>
      <LoginNav />
      <h2>반가워요 {me !== null ? me.nickname : ""}</h2>
      {/* 이렇게 안 하면 me가 null 됐을 때 못 찾아서 에러띄움 */}
      <div>이메일 {me !== null ? me.user_email : ""}</div>
      <h3>현재 비밀번호 {me !== null ? me.password : ""}</h3>

      <span>
        <Hashtag text={text} />
      </span>
      <span>이전비밀</span>
      <input
        value={oldPassword}
        type="text"
        onChange={(e) => oldPasswordHandle(e)}
      />
      <br />
      <span>새비밀</span>
      <input
        value={newPassword}
        type="text"
        onChange={(e) => newPasswordHandle(e)}
      />
      <button onClick={changePassword}>비번바꾸기</button>
      <br />
      {/* <input value={text} type="text" onChange={(e) => textHandle(e)} /> */}
      <br />
      <button onClick={logout}>로그아웃</button>
      <br />
      <br />

      <input
        type="text"
        value={oldPassword}
        onChange={(e) => oldPasswordHandle(e)}
      />
      <button onClick={deleteAccount}>계정삭제</button>
    </>
  );
}
