import HeaderContainer from "../../containers/common/HeaderContainer";
import styled from "styled-components";
import MainIconImage from "../image/main_icon.png";
import MainRecImage from "../image/main_rec.jpeg";
import GroupImage from "../image/group_img.png";
import PlanImage from "../image/planner_img.png";
import FriendImage from "../image/friend_img.png";
import { Link } from "react-router-dom";

const MainWrap = styled.div``;

const MainFirst = styled.div`
  .first-image {
    background-image: url(${MainIconImage});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 41vw;
  }
  .second-image {
    background-image: url(${MainRecImage});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 41vw;
  }
`;
const PosWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  img {
    width: 16rem;
    height: 16rem;
  }
  button {
    background-color: #4e5cc380;
    color: #ffffff;
    border-radius: 31.5px;
    font-weight: 600;
    font-size: 1.3rem;
    padding: 0.6rem 3rem;
  }
`;

const MainPos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
    padding: 45px 0 20px;
    text-align: center;
    font-size: 1.4rem;
    letter-spacing: 0.5px;
    b {
      font-weight: 700;
    }
    font-weight: 400;
    color: #4e5cc3;
  }
`;

const MainHelp = styled.div`
  background-color: #fef9ee;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    text-align: center;
    padding: 5rem 0 2rem;
    color: #4e5cc3;
    font-size: 1.3rem;
    font-weight: 400;
    letter-spacing: 0.06rem;
  }
  button {
    color: #ffffff;
    font-weight: 700;
    background-color: #4e5cc3;
    border-radius: 59px;
    font-size: 1.3rem;
    padding: 0.8rem 2rem;
    margin-bottom: 6rem;
  }
`;

// const Circle = styled.div`
//   box-sizing: border-box;
//   position: absolute;
//   height: 80px;
//   width: 82px;
//   left: 1150px;
//   top: 1820px;
//   background: #ffd4bd80;
//   border-radius: 100%;
//   & + & {
//     background: #684fca;
//     left: 169px;
//     top: 1900px;
//   }
//   &:last-child {
//     background: #fec03a;

//     left: 214px;
//     top: 1925px;
//   }
// `;

const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4rem;
`;

const MainForm = () => {
  return (
    <MainWrap>
      <HeaderContainer />

      <MainFirst>
        <div className="first-image"></div>
        <div className="second-image"></div>
      </MainFirst>
      <MainPos>
        <p>
          <b>작심하루</b>에서는 가능해요.
        </p>
        <PosWrap>
          <BtnWrap>
            <Link to="/">
              <img src={GroupImage} alt="그룹 스터디"></img>
            </Link>
            <Link to="/">
              <button>그룹 스터디</button>
            </Link>
          </BtnWrap>
          <BtnWrap>
            <Link to="/">
              <img src={PlanImage} alt="목표 설정"></img>
            </Link>
            <Link to="/">
              <button>목표 설정</button>
            </Link>
          </BtnWrap>
          <BtnWrap>
            <Link to="/">
              <img src={FriendImage} alt="친구 추가"></img>
            </Link>
            <Link to="/">
              <button>친구 추가</button>
            </Link>
          </BtnWrap>
        </PosWrap>
      </MainPos>
      <MainHelp>
        <p>
          작심하루가 도와줄게요!
          <br />
          다양한 사람들을 만나 함께 공부하고
          <br />
          계속 성장하세요!
        </p>
        <Link to="/register">
          <button>5초만에 작심하루러 ✍🏻</button>
        </Link>
      </MainHelp>
    </MainWrap>
  );
};

export default MainForm;
