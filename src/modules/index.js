import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import loading from "./loading";
import user, { userSaga } from "./user";
import board, { upLoadSaga } from "./board";

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  board,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), upLoadSaga()]);
}

export default rootReducer;
