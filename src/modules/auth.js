import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as authAPI from "../lib/api/auth";

const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";
const TOGGLE = "auth/TOGGLE";

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =
  createRequestActionTypes("auth/REGISTER");
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes("auth/LOGIN");

const [CONFIRM, CONFIRM_SUCCESS, CONFIRM_FAILURE] =
  createRequestActionTypes("auth/CONFIRM");
const [CHECKEMAIL, CHECKEMAIL_SUCCESS, CHECKEMAIL_FAILURE] =
  createRequestActionTypes("auth/CHECKEMAIL");

const [SNS_LOGIN, SNS_LOGIN_SUCCESS, SNS_LOGIN_FAILURE] =
  createRequestActionTypes("sns/SNS_LOGIN");

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register , login
    key, // username, password, passwordConfirm
    value, // 실제 바꾸려는 값
  })
);

export const toggle = createAction(TOGGLE, ({ form, key, checked }) => ({
  form,
  key,
  checked,
}));

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form); // register / login
export const register = createAction(
  REGISTER,
  ({
    email,
    token,
    name,
    password,
    passwordConfirm,
    termsOfService,
    privacyPolity,
    receivePolity,
  }) => ({
    email,
    token,
    name,
    password,
    passwordConfirm,
    termsOfService,
    privacyPolity,
    receivePolity,
  })
);
export const login = createAction(LOGIN, ({ email, password }) => ({
  email,
  password,
  // autoLogin,
}));

export const confirm = createAction(CONFIRM, ({ email }) => ({ email }));

export const checkEmail = createAction(CHECKEMAIL, ({ token }) => ({ token }));

export const snsLogin = createAction(SNS_LOGIN);

// saga 생성
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const confirmSaga = createRequestSaga(CONFIRM, authAPI.confirmEmail);
const checkEmailSaga = createRequestSaga(CHECKEMAIL, authAPI.checkEmail);
const snsLoginSaga = createRequestSaga(SNS_LOGIN, authAPI.snsJoin);
export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(CONFIRM, confirmSaga);
  yield takeLatest(CHECKEMAIL, checkEmailSaga);
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(SNS_LOGIN, snsLoginSaga);
}

const initialState = {
  register: {
    email: "",
    name: "",
    token: "",
    password: "",
    passwordConfirm: "",
    termsOfService: false,
    privacyPolity: false,
    receivePolity: false,
  },
  login: {
    email: "",
    password: "",
    // autoLogin: false,
  },
  auth: null,
  authError: null,
  emailCheck: null,
  emailCheckError: null,
  affirm: null,
  affirmError: null,
  snsState: null,
  snsError: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null, // 폼 전환 시 회원 인증 에러 초기화
    }),
    [TOGGLE]: (state, { payload: { form, key, checked } }) =>
      produce(state, (draft) => {
        draft[form][key] = checked;
      }),
    // 회원가입 성공
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    // 회원가입 실패
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    // 로그인 성공
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    // 로그인 실패
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [CONFIRM_SUCCESS]: (state, { payload: emailCheck }) => ({
      ...state,
      emailCheckError: null,
      emailCheck,
    }),
    [CONFIRM_FAILURE]: (state, { payload: error }) => ({
      ...state,
      emailCheckError: error,
    }),
    [CHECKEMAIL_SUCCESS]: (state, { payload: affirm }) => ({
      ...state,
      affirmError: null,
      affirm,
    }),
    [CHECKEMAIL_FAILURE]: (state, { payload: error }) => ({
      ...state,
      affirmError: error,
    }),
    [SNS_LOGIN_SUCCESS]: (state, { payload: snsState }) => ({
      ...state,
      snsError: null,
      snsState,
    }),
    // 회원가입 실패
    [SNS_LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      snsError: error,
    }),
  },
  initialState
);

export default auth;
