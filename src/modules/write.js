import { createAction, handleActions } from "redux-actions";

// 액션 타입 정의

const INITIALIZE = "write/INITIALIZE";
const CHANGE_FIELD = "write/CHANGE_FIELD";

// 액션 생성 함수
export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

// 초기 상태 정의
const initialState = {
  title: "",
  body: "",
};

// 리듀서 함수

const write = handleActions(
  {
    [INITIALIZE]: (state) => initialState, // initialState 를 넣으면 초기 상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값 업데이트
    }),
  },
  initialState
);

export default write;
