import axios from "axios";
import React, { useEffect, useState } from "react";
import CafeListCard from "../components/CafeListCard";
import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { modalAction, closeModalAction, cafeListAction } from "../reducer/post";

export default function Main() {
  useEffect(() => {
    axios
      .get("https://localhost:8080/posts/dummycafe-list", {
        withCredentials: true,
      })
      .then((res) => {
        setMain(res.data.data);
      });
  }, []);

  const [main, setMain] = useState(null);

  const needToLogin = () => {
    alert("로그인을 하고 이용하세");
    return Router.push("/signin");
  };

  return (
    <>
      <h2>말하기 애매했던 해시태그를 전부 달 수 있읍니다. 달에 9$</h2>
      <div style={{ display: "flex" }}>
        {!main ? (
          <h1>로딩즁</h1>
        ) : (
          main.map((fill) => {
            return (
              <div onClick={needToLogin}>
                <CafeListCard contents={fill} key={fill.id} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
