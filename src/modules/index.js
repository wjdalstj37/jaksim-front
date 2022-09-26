import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import loading from "./loading";
import user, { userSaga } from "./user";
import board, { boardSaga } from "./board";

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  board,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), boardSaga()]);
}

export default rootReducer;
