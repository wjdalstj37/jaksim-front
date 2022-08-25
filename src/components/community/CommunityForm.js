import HeaderContainer from "../../containers/common/HeaderContainer";
import styled from "styled-components";
import Test from "../image/jh_logo.jpg";

const ComWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const HorizonDesign = styled.div`
  background-color: #684fca;
  display: flex;
  justify-content: center;
  padding: 1.5rem 0;
  margin: 0 auto;
  width: 100%;
`;

const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  box-shadow: 0px 4px 4px 0px #00000040;
  width: 80%;
  gap: 1rem;
  padding: 1rem 2rem;
  border-radius: 25px;
  background-color: #ffffff;
  img {
    width: 2rem;
    height: 2rem;
  }
  p {
    font-weight: 600;
    font-size: 1.1rem;
  }
`;

const MainWrap = styled.div`
  display: flex;
  margin-top: 6rem;
  PostList {
    flex-grow: 1;
  }
`;

const MenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0 3rem;
  button {
    font-size: 0.9rem;
    letter-spacing: 0.01rem;
    text-align: start;
    border-bottom: 1px solid #d9d9d9;
    width: 100%;
    padding: 0 6rem 0 0;
    margin: 1rem 0 1rem;
    &:hover {
      font-weight: 700;
    }
  }
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 7rem 0 2rem;
`;

const TitleWrap = styled.div`
  display: flex;
  h3 {
    font-weight: 700;
    font-size: 1.2rem;
    padding: 0 1rem 0 0;
  }
  p {
    color: #999999;
    font-size: 0.8rem;
  }
`;

const CommunityForm = ({ user }) => {
  return (
    <>
      <HeaderContainer />
      <ComWrap>
        <HorizonDesign>
          {user && (
            <ProfileWrap>
              <img src={user.body.image} alt="프로필 이미지"></img>
            </ProfileWrap>
          )}
          <ProfileWrap>
            <img src={Test} alt="테스트"></img>
            <p>만득</p>
          </ProfileWrap>
        </HorizonDesign>
        <MainWrap>
          <MenuWrap>
            <ul>
              <li>
                <button>작심하루 안내</button>
              </li>
              <li>
                <button>하루톡톡</button>
              </li>
              <li>
                <button>우리 친구해요!</button>
              </li>
            </ul>
          </MenuWrap>
          <PostList>
            <TitleWrap>
              <h3>하루안내</h3>
              <p>알아두면 유익한 서비스 꿀팁 참고하세요!</p>
            </TitleWrap>
            <div>
              <button>글 작성하기</button>
            </div>
            <div>
              <ul>
                <li>으</li>
                <li>아</li>
                <li>아</li>
                <li>아</li>
                <li>아</li>
              </ul>
            </div>
          </PostList>
        </MainWrap>
      </ComWrap>
    </>
  );
};

export default CommunityForm;
