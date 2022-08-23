import client from "../lib/api/client";
import { check } from "../modules/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SnsAuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));

  useEffect(() => {
    console.log("회원가입 성공");
    let accessToken = new URL(window.location.href).searchParams.get(
      "accessToken"
    );
    let refreshToken = new URL(window.location.href).searchParams.get(
      "refreshToken"
    );
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    client.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    dispatch(check());
  }, [dispatch]);

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

  return <div></div>;
};

export default SnsAuthPage;
