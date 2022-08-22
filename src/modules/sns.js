import { createAction, handleActions } from "redux-actions";
import { takeLatest, call } from "redux-saga/effects";
import * as authAPI from "../lib/api/auth";
import client from "../lib/api/client";

const [SNS_LOGIN] = "sns/SNS_LOGIN";

export const snsLogin = createAction(SNS_LOGIN);

function* snsLoginSaga() {
  try {
    yield call(authAPI.snsJoin);
    console.log("회원가입 성공");
    let accessToken = new URL(window.location.href).searchParams.get(
      "accessToken"
    );
    let refreshToken = new URL(window.location.href).searchParams.get(
      "refreshToken"
    );
    console.log(accessToken);
    console.log(refreshToken);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    client.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  } catch (e) {
    console.log(e);
  }
}
export function* snsSaga() {
  yield takeLatest(SNS_LOGIN, snsLoginSaga);
}

const initialState = {
  snsState: null,
};

const sns = handleActions(
  {
    [SNS_LOGIN]: (state, { payload: snsState }) => ({
      ...state,
      snsState,
    }),
  },
  initialState
);

export default sns;
