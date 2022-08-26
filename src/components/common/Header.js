import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import DefaultImg from "../image/default_profile.png";

const HeaderBlock = styled.div`
  position: fixed;
  margin: 0;
  padding: 0;

  width: 100%;
  background: #ffffff;
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 3.3rem;

  .logo {
    padding: 0 1.8rem 0 2.5rem;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.3px;
  }

  .right {
    display: flex;
    align-items: center;
    padding: 0 2.5rem;
    button {
      padding: 0 0.8rem;
    }
  }
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 컨텐츠가 4rem 아래 나타나도록 해주는 컴포넌트
 */
const Spacer = styled.div`
  height: 3.3rem;
`;

const MenuBar = styled.div`
  ul {
    margin-top: 1rem;
    position: absolute;
    border: 1px solid #a9a9a9;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px 0px #00000040;
    display: flex;
    justify-content: center;
    li {
      border-right: 1px solid #a9a9a9;
      padding: 0 1rem;
      margin: 0.8rem 0;
      &:last-child {
        border-right: none;
      }
    }
    button {
      font-size: 0.8rem;
    }
  }
`;

const Static = styled.div`
  display: flex;
  align-items: center;
`;

const DropMenu = styled.div`
  display: flex;

  justify-content: center;
`;

const UserProfile = styled.div`
  img {
    margin-top: 0.2rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;
  }
`;

const Header = ({ user, onLogout }) => {
  const [clicked, setClicked] = useState(false);
  const onToggle = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Static>
            <Link to="/" className="logo">
              HARU
            </Link>
            <MenuBar>
              <DropMenu>
                <FiMenu onClick={onToggle} style={{ cursor: "pointer" }} />
                <button onClick={onToggle}>전체 카테고리</button>
              </DropMenu>
              {clicked && (
                <ul>
                  <li>
                    <Link to="/stopwatch">
                      <button>개인스터디</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/board">
                      <button>커뮤니티</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/mystudy">
                      <button>마이스터디</button>
                    </Link>
                  </li>
                </ul>
              )}
            </MenuBar>
          </Static>

          {user ? (
            <div className="right">
              {user.body.image === null ? (
                <UserProfile>
                  <Link to="/profile">
                    <img src={DefaultImg} alt="프로필"></img>
                  </Link>
                </UserProfile>
              ) : (
                <UserProfile>
                  <Link to="/profile">
                    <img src={user.body.image} alt="프로필"></img>
                  </Link>
                </UserProfile>
              )}
              <button onClick={onLogout}>로그아웃</button>
            </div>
          ) : (
            <div className="right">
              <Link to="/register">
                <button>회원가입</button>
              </Link>
              <Link to="/login">
                <button>로그인</button>
              </Link>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
