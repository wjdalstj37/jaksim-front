import client from "./client";

// 로그인
export const login = ({ email, password }) =>
  client.post("https://jaks1m.shop/auth/login", { email, password });

// 회원가입
export const register = ({
  email,
  name,
  password,
  termsOfService,
  privacyPolity,
  receivePolity,
}) =>
  client.post("https://jaks1m.shop/api/v1/user", {
    email,
    name,
    password,
    termsOfService,
    privacyPolity,
    receivePolity,
  });

// 로그인 상태 확인
export const check = () => client.get("https://jaks1m.shop/api/v1/user/me");

// 로그아웃
export const logout = () =>
  client.delete("https://jaks1m.shop/api/v1/user/me/logout");

// 이메일 인증
export const confirmEmail = () => client.post("https://jaks1m.shop/auth/email");
