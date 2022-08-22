// import { createAction, handleActions } from "redux-actions";
// import { takeLatest } from "redux-saga/effects";
// import * as authAPI from "../lib/api/auth";
// import createRequestSaga, {
//   createRequestActionTypes,
// } from "../lib/createRequestSaga";

// const [SNS_LOGIN, SNS_LOGIN_SUCCESS, SNS_LOGIN_FAILURE] =
//   createRequestActionTypes("sns/SNS_LOGIN");

// export const snsLogin = createAction(SNS_LOGIN);

// const snsLoginSaga = createRequestSaga(SNS_LOGIN, authAPI.snsJoin);

// // function* snsLoginSaga() {
// //   try {
// //     yield call(authAPI.snsJoin);
// //     console.log("회원가입 성공");
// //     let accessToken = new URL(window.location.href).searchParams.get(
// //       "accessToken"
// //     );
// //     let refreshToken = new URL(window.location.href).searchParams.get(
// //       "refreshToken"
// //     );
// //     console.log(accessToken);
// //     console.log(refreshToken);
// //     localStorage.setItem("accessToken", accessToken);
// //     localStorage.setItem("refreshToken", refreshToken);
// //     client.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
// //   } catch (e) {
// //     console.log(e);
// //   }
// // }
// export function* snsSaga() {
//   yield takeLatest(SNS_LOGIN, snsLoginSaga);
// }

// const initialState = {
//   snsState: null,
//   snsError: null,
// };

// const sns = handleActions(
//   {
//     [SNS_LOGIN_SUCCESS]: (state, { payload: snsState }) => ({
//       ...state,
//       snsError: null,
//       snsState,
//     }),
//     // 회원가입 실패
//     [SNS_LOGIN_FAILURE]: (state, { payload: error }) => ({
//       ...state,
//       snsError: error,
//     }),
//   },
//   initialState
// );

// export default sns;
