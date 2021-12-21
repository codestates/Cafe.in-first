import { HYDRATE } from "next-redux-wrapper"; //서버사이드랜더링을 위한 하이드레이트
import { combineReducers } from "redux";
import userReducer from "./user";
import postReducer from "./post";

// 컴바인 리듀서를 index 리듀서에 써준다. 이 부분은 스타일인 듯.
// 리듀서 자체를 다 나눠서 store에서 컴바인을 해줄 수도 있는 거고
// 이건 하나의 root리듀서 파일에서 컴파인을 한 후에 스토어로 보내는 거고
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    //이 인덱스 리듀서를 case HYDRATE로 하면 서버사이드 랜더링. 사실 복붙이라 잘 모름
    switch (action.type) {
      case HYDRATE:
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  },
  userReducer,
  postReducer,
});

export default rootReducer;
