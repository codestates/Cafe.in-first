import { MODAL_CLOSE, MODAL_OPEN, CAFE_LIST } from "./type";
//리덕스 부분은 사실 가물가물한데 다시 천천히 짚어보면 할 수 있을 것 같음
export const initalState = {
  isModalOpen: false,
  cafeData: "",
  cafeList: "",
};

export const modalAction = (data) => {
  return {
    type: MODAL_OPEN,
    data,
  };
};

export const closeModalAction = () => {
  return {
    type: MODAL_CLOSE,
  };
};

export const cafeListAction = (data) => {
  return {
    type: CAFE_LIST,
    data,
  };
};

const postReducer = (state = initalState, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        isModalOpen: true,
        cafeData: action.data,
      };
    case MODAL_CLOSE:
      return {
        ...state,
        isModalOpen: false,
        cafeData: "",
      };
    case CAFE_LIST:
      return {
        ...state,
        cafeList: action.data,
      };
    default:
      return state;
  }
};

export default postReducer;
