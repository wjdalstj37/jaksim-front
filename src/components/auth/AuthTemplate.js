import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImage from "../image/jh_logo.jpg";

/**
 * 회원가입 / 로그인 페이지의 레이아웃을 담당하는 컴포넌트입니다.
 */

/* 화면 전체를 채움 */
const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: #ffffff;
  /* flex로 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/* 흰색 박스 */
const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 3rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  .header-logo {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    vertical-align: top;
    width: 120px;
    height: 120px;
  }
  width: 430px;
  background: white;
  border-radius: 2px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">
            <img src={LogoImage} alt="작심하루" className="header-logo" />
          </Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
