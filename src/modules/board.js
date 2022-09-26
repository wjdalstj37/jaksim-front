import * as boardAPI from "../lib/api/board";
import { createRequestActionTypes } from "../lib/createRequestSaga";
import createRequestSaga from "../lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import produce from "immer";

const INITIALIZE_FORM = "board/INITIALIZE_FORM";
const TOGGLE = "board/TOGGLE";

const [UPLOAD, UPLOAD_SUCCESS, UPLOAD_FAILURE] =
  createRequestActionTypes("board/UPLOAD");

export const toggle = createAction(TOGGLE, ({ form, key, value }) => ({
  form,
  key,
  value,
}));

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const postUpload = createAction(UPLOAD, ({ formData }) => ({
  formData,
}));

const uploadSaga = createRequestSaga(UPLOAD, boardAPI.postUpload);

export function* boardSaga() {
  yield takeLatest(UPLOAD, uploadSaga);
}

const initialState = {
  postUpload: {
    title: "",
    bracket: "",
    content: "",
    boardType: "notice",
    files: null,
  },
  upload: null,
  uploadError: null,
};

const board = handleActions(
  {
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      uploadError: null,
    }),
    [TOGGLE]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),

    [UPLOAD_SUCCESS]: (state, { payload: upload }) => ({
      ...state,
      uploadError: null,
      upload,
    }),

    [UPLOAD_FAILURE]: (state, { payload: error }) => ({
      ...state,
      uploadError: error,
    }),
  },
  initialState
);

export default board;
