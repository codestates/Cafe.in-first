import React from 'react';
import { MypageSection} from '../../components';
import { mypageObjOne } from './Data';

function Mypage({setIsLogin, loginInfo}) {
  return (
    <>
      <MypageSection setIsLogin={setIsLogin} loginInfo={loginInfo} {...mypageObjOne} />
    </>
  );
}

export default Mypage;