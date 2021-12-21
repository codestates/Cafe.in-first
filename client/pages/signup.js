import axios from "axios";
import React from "react";
import Nav from "../components/Nav";

export default function signup() {
  //중복검사하려면 또 새로 서버 파줘야 하는 거 아닌가?

  return (
    <>
      <Nav />
      <div>회원가입</div>
      <div>
        <span>아이디</span>
        <input type="text" />
      </div>
      <div>
        <span>비번</span>
        <input type="password" />
      </div>
      <div>
        <span>이메일</span>
        <input type="email" />
      </div>
      <div>
        <span>성함</span>
        <input type="text" />
      </div>
      <button onClick={signup}>가입하기</button>
    </>
  );
}
