import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modalAction, closeModalAction } from "../reducer/post";
import CafeListCard from "../components/CafeListCard";
import CafeInfoModal from "./CafeInfoModal";

export default function Main() {
  useEffect(() => {
    axios
      .get("https://localhost:8080/posts/cafe-list", {
        withCredentials: true,
      })
      .then((res) => {
        setMain(res.data.data);
      });
  }, []);

  const state = useSelector((state) => state.postReducer);
  const { isModalOpen } = state;
  const dispatch = useDispatch();

  const [main, setMain] = useState(null);

  const mainSearchHandle = (data) => {
    setMain(data);
  };

  return (
    <>
      <h2>로그인이 되었습니다요</h2>
      <div style={{ display: "flex" }}>
        {!main ? (
          <h1>로딩즁</h1>
        ) : (
          main.map((fill) => {
            return (
              <CafeListCard
                contents={fill}
                key={fill.id}
                mainSearchHandle={mainSearchHandle}
              />
            );
          })
        )}
      </div>
      {isModalOpen ? <CafeInfoModal /> : ""}
    </>
  );
}
