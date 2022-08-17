import client from "./client";

// 로그인
export const login = ({ email, password }) =>
  client.post("https://jaks1m.shop/auth/login", { email, password });

// 회원가입
export const register = ({
  email,
  name,
  password,
  privacyPolity,
  receivePolity,
  termsOfService,
}) =>
  client.post("https://jaks1m.shop/api/v1/user", {
    email,
    name,
    password,
    privacyPolity,
    receivePolity,
    termsOfService,
  });

// 로그인 상태 확인
export const check = () => client.get("https://jaks1m.shop/api/v1/user/me");

// 로그아웃
export const logout = () =>
  client.delete("https://jaks1m.shop/api/v1/user/me/logout");
