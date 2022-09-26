import HeaderContainer from "../../containers/common/HeaderContainer";
import styled from "styled-components";
import { IoPersonCircle } from "react-icons/io5";

const BoardWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #ffffff;
`;

const DesignWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const PuppleWrap = styled.div`
  background-color: #684fca;
  padding: 1.8rem;
  width: 100%;
`;

const MainWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const ProfileWrap = styled.div`
  position: absolute;
  display: flex;
  background-color: #ffffff;
  top: 5rem;
  padding: 1rem 2rem;
  width: 80%;
  border-radius: 25px;
  box-shadow: 0px 4px 4px 0px #00000040;
  font-size: 3rem;
  color: #d9d9d9;
  align-items: center;
  gap: 1.5rem;
  h1 {
    color: #000000;
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  margin-top: 6.5rem;
  width: 100%;
`;

const MenuBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
  li {
    padding: 2rem 6rem 0 0;
    border-bottom: 1px solid #d9d9d9;
    &:first-child {
      padding-top: 0;
    }
  }
  button {
    font-size: 0.9rem;
  }
`;

const TextWrap = styled.div`
  display: flex;
  width: 55%;
  justify-content: flex-start;
  flex-direction: column;
  button {
    background-color: #000000cc;
    color: #ffffff;
    padding: 0.4rem 1.5rem;
    font-weight: 600;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding-bottom: 0.5rem;
  gap: 1rem;
  h2 {
    font-weight: 600;
    font-size: 1.6rem;
  }
  p {
    color: #999999;
    font-size: 0.8rem;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 0.5rem;
`;

const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
  }
`;

const List = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  border-bottom: 1px solid #d9d9d9;
  font-size: 2.5rem;
  background-color: #e5e5e5;
`;

const InfoWrap = styled.div`
  padding: 0.2rem 1rem 0rem;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  h3 {
    b {
      color: #4f59ca;
      font-weight: 500;
    }
  }

  p {
    font-size: 0.8rem;
  }
`;

const SelectSubject = styled.select`
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: #000000cc;

  &:last-child {
    border: 1px solid #0000004d;
    background-color: #ffffff;
    color: #000000;
  }
`;

const StyledInput = styled.input`
  border: 1px solid #0000004d;
  margin-bottom: 1rem;
  height: 20rem;
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 1rem;
  select {
    margin: 0 1rem 0 0;
    padding: 0.6rem 3rem;
    background-color: #d9d9d9;
    border: 1px solid #0000004d;
    font-size: 0.7rem;
    letter-spacing: 0.02rem;
    text-align: center;
  }
  input {
    margin: 0;
    padding: 0 1rem;
    border: 1px solid #0000004d;
    width: 100%;
    font-size: 0.7rem;
    letter-spacing: 0.02rem;
    color: #000000;
  }
`;

const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  Button {
    padding: 0.5rem 2.7rem;
  }
`;

const textMap = {
  notice: "하루안내",
  free: "하루톡톡",
  friend: "우리 친구해요!",
};

const MessageMap = {
  notice: "알아두면 유익한 서비스 꿀팁 참고하세요!",
  free: "자유롭게 이야기를 나눠보세요",
  friend: "서로 힘이 되는 친구가 되어주세요",
};

const Editor = ({
  user,
  onToggle,
  type,
  state,
  onClick,
  onChangeBracket,
  onChange,
  onSubmit,
}) => {
  const text = textMap[type];
  const message = MessageMap[type];
  return (
    <BoardWrap>
      <HeaderContainer />
      <DesignWrap>
        <PuppleWrap />
        {user ? (
          <ProfileWrap>
            {user.body.image === null ? (
              <IoPersonCircle />
            ) : (
              <img src={user.body.image} alt="프로필"></img>
            )}
            <h1>{user.body.name}</h1>
          </ProfileWrap>
        ) : (
          <ProfileWrap>
            <IoPersonCircle />
            <h1>작심하루에 로그인 해주세요!</h1>
          </ProfileWrap>
        )}
      </DesignWrap>

      <MainWrap>
        <ContentWrap>
          <MenuBar>
            <ul>
              <li>
                <button
                  onClick={onToggle}
                  value="notice"
                  style={{ fontWeight: type === "notice" ? "700" : "400" }}
                >
                  작심하루 안내
                </button>
              </li>
              <li>
                <button
                  onClick={onToggle}
                  value="free"
                  style={{ fontWeight: type === "free" ? "700" : "400" }}
                >
                  하루톡톡
                </button>
              </li>
              <li>
                <button
                  onClick={onToggle}
                  value="friend"
                  style={{ fontWeight: type === "friend" ? "700" : "400" }}
                >
                  우리 친구해요!
                </button>
              </li>
            </ul>
          </MenuBar>
          <TextWrap>
            <TitleWrap>
              <h2>{text}</h2>
              <p>{message}</p>
            </TitleWrap>

            <ButtonWrap
              style={{
                borderBottom:
                  state === "community" ? "none" : "1px solid #d9d9d9",
              }}
            >
              <button
                onClick={onClick}
                style={{
                  display: state === "community" ? "none" : "inline-block",
                }}
              >
                글 등록하기
              </button>
            </ButtonWrap>
            <ListWrap>
              {state === "view" && (
                <List>
                  <IoPersonCircle />
                  <InfoWrap>
                    <h3>
                      <b>[공유해요]</b> 앉아서 오랫동안 공부하는 꿀팁
                    </h3>
                    <p>호진</p>
                  </InfoWrap>
                </List>
              )}
              {state === "community" && (
                <form onSubmit={onSubmit}>
                  <Title>
                    {type === "notice" && (
                      <SelectSubject onChange={onChangeBracket}>
                        <option value="">말머리 없음</option>
                        <option value="inform">공지</option>
                        <option value="event">이벤트</option>
                        <option value="guide">안내</option>
                      </SelectSubject>
                    )}
                    {type === "free" && (
                      <SelectSubject onChange={onChangeBracket}>
                        <option value="">말머리 없음</option>
                        <option value="daily">일상</option>
                        <option value="curious">궁금해요</option>
                        <option value="tip">꿀팁 공유해요</option>
                        <option value="etc">기타</option>
                      </SelectSubject>
                    )}
                    {type === "friend" && (
                      <SelectSubject onChange={onChangeBracket}>
                        <option value="">말머리 없음</option>
                        <option value="student">학생</option>
                        <option value="worker">직장인</option>
                        <option value="jobSeeker">취준생</option>
                        <option value="hobby">취미</option>
                        <option value="etc">기타</option>
                      </SelectSubject>
                    )}
                    <input
                      placeholder="제목을 입력해 주세요."
                      name="title"
                      onChange={onChange}
                    />
                  </Title>
                  <StyledInput name="content" onChange={onChange} />
                  <SubmitButton>
                    <Button type="submit">등록</Button>
                    <Button>취소</Button>
                  </SubmitButton>
                </form>
              )}
            </ListWrap>
          </TextWrap>
        </ContentWrap>
      </MainWrap>
    </BoardWrap>
  );
};

export default Editor;
