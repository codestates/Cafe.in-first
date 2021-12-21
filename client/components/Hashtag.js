import axios from "axios";
import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Hashtag({ text, mainSearchHandle }) {
  const hashSearch = () => {
    axios
      .get(`https://localhost:8080/posts//cafe-list/${text.id}`, {
        withCredentials: true,
      })
      .then((res) => {
        mainSearchHandle(res.data.data);
      });
  };

  return (
    <>
      {!text ? (
        ""
      ) : (
        <div>
          {text.name.split(/(#[^\s#]+)/g).map((fill) => {
            if (fill.match(/(#[^\s#]+)/g))
              return <a onClick={hashSearch}>{fill}</a>;
          })}
        </div>
      )}
    </>
  );
}
