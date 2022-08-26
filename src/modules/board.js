import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";

import * as boardAPI from "../lib/api/board";
import { takeLatest } from "redux-saga/effects";

// 액션 타입 정의

const INITIALIZE = "board/INITIALIZE";
const CHANGE_FIELD = "board/CHANGE_FIELD";

// createRequestSaga 에서는 반복되는 부분을 함수화해서 정리해주기 위해서 createRequestActionTypes 사용해서 한번에 적음.
// 글쓰기 관련
const [POST_UPLOAD, POST_UPLOAD_SUCCESS, POST_UPLOAD_FAIURE] =
  createRequestActionTypes("board/POST_UPLOAD");

// 액션 생성 함수
export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const postUpload = createAction(
  POST_UPLOAD,
  ({ boardAddRequestDto }) => ({
    boardAddRequestDto,
  })
);

// saga 생성
const postUploadSaga = createRequestSaga(POST_UPLOAD, boardAPI.postUpload);

export function* upLoadSaga() {
  yield takeLatest(POST_UPLOAD, postUploadSaga);
}
// 초기 상태 정의
const initialState = {
  title: "",
  bracket: "",
  content: "",
  boardType: "",
};

// 리듀서 함수

const board = handleActions(
  {
    [INITIALIZE]: (state) => initialState, // initialState 를 넣으면 초기 상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값 업데이트
    }),
    [POST_UPLOAD]: (state) => ({
      ...state,
      // post, postError 초기화
      post: null,
      postError: null,
    }),
    // post success
    [POST_UPLOAD_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    //post fail
    [POST_UPLOAD_FAIURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
  },
  initialState
);

export default board;
