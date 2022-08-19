import client from "../lib/api/client";
import { check } from "../modules/user";
import { useDispatch } from "react-redux";

const SnsAuthPage = () => {
  console.log("아무거나");
  const dispatch = useDispatch();
  let accessToken = new URL(window.location.href).searchParams.get(
    "accessToken"
  );
  let refreshToken = new URL(window.location.href).searchParams.get(
    "refreshToken"
  );
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
  client.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  // dispatch(check()).then((response) => console.log(response));

  return <div>sns로그인</div>;
};

export default SnsAuthPage;
