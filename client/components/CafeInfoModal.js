import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modalAction, closeModalAction } from "../reducer/post";

export default function CafeInfoModal() {
  const state = useSelector((state) => state.postReducer);
  const userState = useSelector((state) => state.userReducer);
  const [likeHash, setLikeHash] = useState("");
  const { cafeData } = state;
  const { me } = userState;
  const dispatch = useDispatch();

  const likeHashHandle = (e) => {
    setLikeHash(e.target.value);
  };

  const postLikeTag = () => {
    axios
      .post(
        `https://localhost:8080/posts/like-hashtag/${cafeData.cafeInfo.id}`,
        {
          like: likeHash,
        },
        {
          "Content-Type": "application/json",
          withCredentials: true,
        }
      )
      .then((res) => {
        //console.log(res.data.data.findHash[0].name);
        setLikeHash("");
      });
  };
  //디테일 - 해시태그라는 건 결국 글을 쓰는 중간에 #을 넣고 갖고 노는 건데
  //이런 식으로 등록 느낌으로 드가는 건 별로지 않나 싶네
  //아예 서비스 디자인이 바뀌어야 하는 것 같은 게, 리뷰를 일단 쓰게 하고
  //거기서 나오는 해시태그를 모아서 위에 뿌리는 식으로? 아씨 모르겠다 이건

  return (
    <>
      <h2>카페 이름 : {cafeData.cafeInfo.title}</h2>
      <div style={{ fontSize: "5px" }}>
        이미지는 string으로 변경 후 주소를 넣어주는 게 맞는 것 같습니다 blob으로
        설정 시 img태그에 넣기 애매해집니다(사실 안 찾아봄)
      </div>
      <div>카페 설명 : {cafeData.cafeInfo.content}</div>
      <h2>좋아요 : {cafeData.hashes.map((fill) => fill.name)}</h2>
      <h2>안좋아요 : {cafeData.disHashes.map((fill) => fill.name)}</h2>
      <div>{me.nickname} 님은 어떤 인상을 받으셨나요?</div>
      <input value={likeHash} onChange={(e) => likeHashHandle(e)} />
      <button onClick={postLikeTag}>좋아좋아태그 입력하기</button>
      <br />
      <br />
      <button onClick={() => dispatch(closeModalAction())}>모달창 닫기</button>
    </>
  );
}
