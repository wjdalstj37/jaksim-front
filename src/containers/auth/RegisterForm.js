import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmail, isLength } from "validator";
import {
  changeField,
  initializeForm,
  register,
  toggle,
  confirm,
} from "../../modules/auth";
import AuthForm from "../../components/auth/AuthForm";
import { check } from "../../modules/user";
import { useNavigate } from "react-router-dom";
import client from "../../lib/api/client";

const RegisterForm = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));
  const navigate = useNavigate();

  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "register",
        key: name,
        value,
      })
    );
  };

  const onCheck = (e) => {
    e.preventDefault();
    const { email } = e.target;
    dispatch(confirm({ email }));
  };

  const onClick = (e) => {
    const { name, checked } = e.target;
    dispatch(
      toggle({
        form: "register",
        key: name,
        checked,
      })
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const {
      email,
      name,
      password,
      passwordConfirm,
      termsOfService,
      privacyPolity,
      receivePolity,
    } = form;
    // 하나라도 비어있다면
    if (
      [
        email,
        name,
        password,
        passwordConfirm,
        termsOfService,
        privacyPolity,
        receivePolity,
      ].includes("")
    ) {
      setError("빈 칸을 모두 입력하세요.");
      return;
    }
    if (isEmail(email) === false) {
      setError("이메일 형식이 올바르지 않습니다.");
      return;
    }

    if (isLength(password, { min: 8, max: 16 }) === false) {
      setError("비밀번호는 8자 이상 16자 이하로 설정해주세요.");
      return;
    }

    if (termsOfService === false || privacyPolity === false) {
      setError("필수 동의 항목을 체크해주세요.");
      return;
    }

    // 비밀번호가 일치하지 않는다면
    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      dispatch(changeField({ form: "register", key: "password", value: "" }));
      dispatch(
        changeField({ form: "register", key: "passwordConfirm", value: "" })
      );
      return;
    }
    dispatch(
      register({
        email,
        name,
        password,
        termsOfService,
        privacyPolity,
        receivePolity,
      })
    );
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

  // 회원가입 성공 / 실패 처리
  useEffect(() => {
    if (authError) {
      // 계정명이 이미 존재할 때
      if (authError.response.status === 404) {
        setError("이미 존재하는 계정명입니다.");
        return;
      }
      // 기타 이유
      setError("회원가입 실패");
      console.log(authError);
      return;
    }

    if (auth) {
      console.log("회원가입 성공");
      const accessToken = auth.body.accessToken;
      const refreshToken = auth.body.refreshToken;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      console.log(auth);

      client.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  // user 값이 잘 설정되었는지 확인
  useEffect(() => {
    if (user) {
      navigate("/"); // 홈 화면으로 이동
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("localStorage is not working");
      }
    }
  }, [navigate, user]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      onClick={onClick}
      onCheck={onCheck}
      error={error}
    />
  );
};

export default RegisterForm;
