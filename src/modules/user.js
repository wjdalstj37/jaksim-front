import { createAction, handleActions } from "redux-actions";
import { takeLatest, call } from "redux-saga/effects";
import * as authAPI from "../lib/api/auth";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import axios from "axios";

const TEMP_SET_USER = "user/TEMP_SET_USER"; // 새로고침 이후 임시 로그인 처리
// 회원 정보 확인
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] =
  createRequestActionTypes("user/CHECK");

const SNS = "user/SNS";
const LOGOUT = "user/LOGOUT";

export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
export const sns = createAction(SNS);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

const checkSaga = createRequestSaga(CHECK, authAPI.check);

function snsSaga() {
  try {
    console.log("회원가입 성공");

    const accessToken = new URL(window.location.href).searchParams.get(
      "accessToken"
    );
    const refreshToken = new URL(window.location.href).searchParams.get(
      "refreshToken"
    );
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    console.log(accessToken);
    console.log(refreshToken);
  } catch (e) {
    console.log(e);
  }
}

function checkFailureSaga() {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    const response = axios.post(
      "https://jaks1m.shop/auth/reissue",
      {},
      {
        headers: { Authorization: `Bearer ${refreshToken}` },
      }
    );
    if (response.status === 200) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.body.accessToken}`;
    }

    // localStorage.removeItem("user"); // localStorage 에서 user 제거하고
  } catch (e) {
    console.log("localStorage is not working");
  }
}

function* logoutSaga() {
  try {
    yield call(authAPI.logout);
    console.log("로그아웃 성공");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
  } catch (e) {
    console.log(e);
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(SNS, snsSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
  user: null,
  checkError: null,
  snsValue: null,
};

export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
    [SNS]: (state, { payload: snsValue }) => ({
      ...state,
      snsValue,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      user: null,
    }),
  },
  initialState
);
