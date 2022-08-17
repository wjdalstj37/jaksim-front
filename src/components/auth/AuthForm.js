import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "../../lib/styles/palettes";
import Button from "../common/Button";

/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const EmailAuth = styled.div`
  display: flex;
  StyledInput {
    flex-grow: 1;
  }
`;

/**
 * 스타일링된 input
 */
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  &:nth-child(2) {
    margin-top: 1rem;
  }
  & + & {
    margin-top: 1rem;
  }
`;

/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여줌
 */
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
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
  margin-top: 1rem;
`;

const AuthForm = ({
  type,
  form,
  onChange,
  onSubmit,
  onClick,
  onCheck,
  error,
}) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <EmailAuth>
          <StyledInput
            autoComplete="email"
            name="email"
            placeholder="이메일"
            onChange={onChange}
            value={form.email}
          />
          <Button smallBtn onClick={onCheck}>
            인증번호 받기
          </Button>
        </EmailAuth>
        {type === "register" && (
          <StyledInput
            autoComplete="nickname"
            name="name"
            placeholder="닉네임"
            onChange={onChange}
            value={form.name}
          />
        )}
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === "register" && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
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
        {type === "login" && (
          <Footer>
            <Link to="/findpw">비밀번호 찾기</Link>
          </Footer>
        )}
        {type === "register" && (
          <div>
            <input
              id="termsOfService"
              type="checkbox"
              name="termsOfService"
              onClick={onClick}
            />
            <label htmlFor="termsOfService">
              서비스 이용약관에 동의합니다. (필수)
            </label>
          </div>
        )}
        {type === "register" && (
          <div>
            <input
              id="privacyPolity"
              type="checkbox"
              name="privacyPolity"
              onClick={onClick}
            />
            <label htmlFor="privacyPolity">
              개인정보 수집 및 이용에 동의합니다. (필수)
            </label>
          </div>
        )}
        {type === "register" && (
          <div>
            <input
              id="receivePolity"
              type="checkbox"
              name="receivePolity"
              onClick={onClick}
            />
            <label htmlFor="receivePolity">
              이메일 수신에 동의합니다. (선택)
            </label>
          </div>
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop cyan fullWidth style={{ marginTop: "1rem" }}>
          {text}
        </ButtonWithMarginTop>
      </form>
      {type === "login" && (
        <div>
          <p>SNS 계정으로 로그인</p>
          <div>
            <a href="https://jaks1m.shop/oauth2/authorization/naver">
              <button>네이버</button>
            </a>
            <a href="https://jaks1m.shop/oauth2/authorization/kakao">
              <button>카카오</button>
            </a>
            <a href="https://jaks1m.shop/oauth2/authorization/google">
              <button>구글</button>
            </a>
          </div>
        </div>
      )}
      {type === "register" && (
        <div>
          <p>SNS 계정으로 가입</p>
          <div>
            <a href="https://jaks1m.shop/oauth2/authorization/naver">
              <button>네이버</button>
            </a>
            <a href="https://jaks1m.shop/oauth2/authorization/kakao">
              <button>카카오</button>
            </a>
            <a href="https://jaks1m.shop/oauth2/authorization/google">
              <button>구글</button>
            </a>
          </div>
        </div>
      )}

      {type === "login" && (
        <div>
          <p>
            매일 매일 변화하는 삶, <br />
            작심하루에서 시작해 보세요!
          </p>
        </div>
      )}
      <Footer>
        {type === "login" ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
