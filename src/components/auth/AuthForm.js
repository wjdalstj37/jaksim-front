import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "../../lib/styles/palettes";
import KakaoLogo from "../image/kakao_logo.png";
import NaverLogo from "../image/naver_logo.png";
import GoogleLogo from "../image/google_logo.png";
import { FaRegCheckCircle } from "react-icons/fa";

/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */

const AuthFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    margin: 0;
    margin-bottom: 1rem;
    text-align: center;
    font-weight: 600;
  }
  form {
    display: flex;
    flex-direction: column;

    .register-submit {
      margin-top: 15px;
      border: 1px solid #a9a9a9;
      color: #ffffff;
      background-color: #a9a9a9;
      padding: 12px 13px;
      font-weight: 600;
      font-size: 15px;
    }
    .login-submit {
      margin-top: 15px;
      border: 1px solid #000000;
      color: #ffffff;
      background-color: #000000;
      padding: 14px 17px;
    }
  }
`;

/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여줌
 */
const Footer = styled.div`
  margin: 0.8rem 0;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  a {
    color: #9e9e9e;
    font-size: 15px;
    font-weight: 400;
    text-decoration-line: underline;
    text-decoration-thickness: 0.8px;
    text-underline-position: under;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  input {
    padding: 14px 17px 13px;
    font-size: 0.85rem;
    border: 1px solid #a9a9a9;
    cursor: auto;
    margin-bottom: 10px;
  }
`;

const AuthEmail = styled.div`
  display: flex;
  gap: 15px;
  input {
    flex-grow: 1;
  }
  button {
    border: 1px solid #a9a9a9;
    color: #684fca;
    margin-bottom: 10px;
  }
`;

const AgreeWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  div {
    padding: 3px 0;
    display: flex;
    input {
      display: none;
    }
    label {
      display: flex;
      gap: 4px;
      color: #737373;
      font-weight: 400;
      letter-spacing: 0.1px;
      font-size: 13px;
      align-items: center;
    }
    input:checked + label {
      color: #684fca;
    }
  }
`;

const SnsWrap = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  .sns-logo {
    width: 50px;
    height: 50px;
    margin: 10px 10px;
  }
`;

const StartJoinWrap = styled.div`
  margin-top: 20px;
  border-top: 1px solid #dddddd;
  display: flex;
  flex-direction: column;
  p {
    padding: 18px 0;
    font-size: 15px;
    letter-spacing: 0.5px;
    font-weight: 400;
    line-height: 20px;
    b {
      color: #a9a9a9;
      font-size: 13px;
    }
  }
  button {
    border: 1px solid #a9a9a9;
    width: 100%;
    padding: 15px 18px;
  }
`;

const textMap = {
  login: "로그인",
  register: "회원가입",
};

/**
 * 에러를 보여줍니다
 */
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 0.9rem;
`;

const InformMessage = styled.div`
  color: #684fca;
  text-align: center;
  font-size: 0.875rem;
`;

const AuthForm = ({
  type,
  form,
  onChange,
  onSubmit,
  onClick,
  onCheck,
  onEmailCheck,
  error,
  message,
}) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      {type === "register" && <h2>목표를 위한 걸음, 작심하루가 도와줄게요!</h2>}
      <form onSubmit={onSubmit}>
        <InputWrap>
          {type === "login" && (
            <input
              autoComplete="email"
              name="email"
              placeholder="이메일"
              onChange={onChange}
              value={form.email}
            />
          )}
          {type === "register" && (
            <AuthEmail>
              <input
                autoComplete="email"
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={form.email}
              />
              <button onClick={onCheck}>인증번호 받기</button>
            </AuthEmail>
          )}
          {message && (
            <AuthEmail>
              <input
                autoComplete="one-time-code"
                name="token"
                placeholder="인증번호"
                onChange={onChange}
                value={form.token}
              />
              {type === "register" && (
                <button onClick={onEmailCheck}>인증번호 확인</button>
              )}
            </AuthEmail>
          )}
          {message && <InformMessage>{message}</InformMessage>}
          {type === "register" && (
            <input
              autoComplete="nickname"
              name="name"
              placeholder="닉네임"
              onChange={onChange}
              value={form.name}
            />
          )}
          <input
            autoComplete="new-password"
            name="password"
            placeholder="비밀번호"
            type="password"
            onChange={onChange}
            value={form.password}
          />
          {type === "register" && (
            <input
              autoComplete="new-password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              type="password"
              onChange={onChange}
              value={form.passwordConfirm}
            />
          )}
        </InputWrap>
        {/* {type === "login" && (
          <div>
            <input
              id="autoLogin"
              type="checkbox"
              name="autoLogin"
              onClick={onClick}
            />
            <label htmlFor="autoLogin">자동로그인</label>
          </div>
        )} */}
        {/* 모달 창 만들기 */}
        {type === "login" && (
          <Footer>
            <a href="/findpw" target="_blank" rel="noreferrer">
              비밀번호 찾기
            </a>
          </Footer>
        )}
        {type === "register" && (
          <AgreeWrap>
            <div>
              <input
                id="termsOfService"
                type="checkbox"
                name="termsOfService"
                onClick={onClick}
                style={{ cursor: "pointer" }}
              />
              <label htmlFor="termsOfService" style={{ cursor: "pointer" }}>
                <FaRegCheckCircle />
                서비스 이용약관에 동의합니다. (필수)
              </label>
            </div>
            <div>
              <input
                id="privacyPolity"
                type="checkbox"
                name="privacyPolity"
                onClick={onClick}
                style={{ cursor: "pointer" }}
              />
              <label htmlFor="privacyPolity" style={{ cursor: "pointer" }}>
                <FaRegCheckCircle />
                개인정보 수집 및 이용에 동의합니다. (필수)
              </label>
            </div>
            <div>
              <input
                id="receivePolity"
                type="checkbox"
                name="receivePolity"
                onClick={onClick}
                style={{ cursor: "pointer" }}
              />
              <label htmlFor="receivePolity" style={{ cursor: "pointer" }}>
                <FaRegCheckCircle />
                이메일 수신에 동의합니다. (선택)
              </label>
            </div>
          </AgreeWrap>
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {type === "register" && (
          <button type="submit" className="register-submit">
            회원 가입
          </button>
        )}
        {type === "login" && (
          <button type="submit" className="login-submit">
            {text}
          </button>
        )}
      </form>
      {type === "login" && (
        <SnsWrap>
          <p>SNS 계정으로 로그인</p>
          <div>
            <a href="https://jaks1m.shop/oauth2/authorization/naver">
              <img src={NaverLogo} alt="네이버 로그인" className="sns-logo" />
            </a>
            <a href="https://jaks1m.shop/oauth2/authorization/kakao">
              <img src={KakaoLogo} alt="카카오 로그인" className="sns-logo" />
            </a>
            <a href="https://jaks1m.shop/oauth2/authorization/google">
              <img src={GoogleLogo} alt="구글 로그인" className="sns-logo" />
            </a>
          </div>
        </SnsWrap>
      )}
      {type === "register" && (
        <SnsWrap>
          <p>SNS 계정으로 가입</p>
          <div>
            <a href="https://jaks1m.shop/oauth2/authorization/naver">
              <img src={NaverLogo} alt="네이버 로그인" className="sns-logo" />
            </a>
            <a href="https://jaks1m.shop/oauth2/authorization/kakao">
              <img src={KakaoLogo} alt="카카오 로그인" className="sns-logo" />
            </a>
            <a href="https://jaks1m.shop/oauth2/authorization/google">
              <img src={GoogleLogo} alt="구글 로그인" className="sns-logo" />
            </a>
          </div>
        </SnsWrap>
      )}

      {type === "login" && (
        <StartJoinWrap>
          <p>
            매일 매일 변화하는 삶, <br />
            <b>작심하루에서 시작해 보세요!</b>
          </p>
          <Link to="/register">
            <button>회원가입하기</button>
          </Link>
        </StartJoinWrap>
      )}
    </AuthFormBlock>
  );
};

export default AuthForm;
