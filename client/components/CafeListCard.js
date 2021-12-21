import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modalAction, closeModalAction } from "../reducer/post";
import Hashtag from "./Hashtag";

export default function CafeListCard({ contents = {}, mainSearchHandle }) {
  //해시태그 클릭 시 또 get요청이 들어가야 함
  const [cafeId, setCafeId] = useState(contents.id);

  const state = useSelector((state) => state.postReducer);
  const { cafeList } = state;
  const dispatch = useDispatch();

  const cafeInfoHandle = () => {
    axios
      .get(`https://localhost:8080/posts/cafe-info/${cafeId}`, {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(modalAction(res.data.data));
      });
  };

  return (
    <>
      <div>
        <div onClick={cafeInfoHandle}>
          <img
            src="http://placeimg.com/300/300/any"
            style={{ paddingRight: "5px" }}
          />
          <div>{contents.title}</div>
        </div>
        <div>
          {contents.likes_hash_tags.map((fill) => (
            <Hashtag text={fill} mainSearchHandle={mainSearchHandle}></Hashtag>
          ))}
        </div>
      </div>
    </>
  );
}
