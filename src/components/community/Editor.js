// styled-component import
import styled from "styled-components";

// responsive component import
import Responsive from "../common/Responsive";

const EditorBlock = styled(Responsive)`
  /* 페이지 위아래 여백 지정 */
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const SelectSubject = styled.select``;

const TitleInput = styled.input`
  font-size: 3rem;
  color: #000000;

  padding-bottom: 0.5rem;
  border: 1px solid #0000004d;

  margin-bottom: 2rem;
  width: 100%;
`;

const InputWrapper = styled.div``;

const MainInput = styled.input`
  font-size: 1rem;
  color: #000000;

  padding-bottom: 0.5rem;
  border: 1px solid #0000004d;

  margin-bottom: 2rem;
  width: 100%;
`;

const typeMap = {
  notice: "작심하루 안내",
  free: "하루톡톡",
  friend: "우리 친구해요!",
};

// redux props
const Editor = ({ title, body, onChangeField, type }) => {
  // quill 적용 div element 를 설정
  const menu = typeMap[type];

  const onChangeBody = (e) => {
    onChangeField({ key: "body", value: e.target.value });
  };

  // input 은 e.target.value 로 설정
  const onChangeTitle = (e) => {
    onChangeField({ key: "title", value: e.target.value });
  };

  return (
    <EditorBlock>
      <p>{menu}</p>
      {type === "notice" && (
        <SelectSubject>
          <option value="">말머리 없음</option>
          <option value="">공지</option>
          <option value="">이벤트</option>
          <option value="">안내</option>
        </SelectSubject>
      )}
      {type === "free" && (
        <SelectSubject>
          <option value="">말머리 없음</option>
          <option value="">일상</option>
          <option value="">궁금해요</option>
          <option value="">꿀팁 공유해요</option>
          <option value="">기타</option>
        </SelectSubject>
      )}
      {type === "friend" && (
        <SelectSubject>
          <option value="">말머리 없음</option>
          <option value="">학생</option>
          <option value="">직장인</option>
          <option value="">취준생</option>
          <option value="">취미</option>
          <option value="">기타</option>
        </SelectSubject>
      )}
      <TitleInput
        placeholder="제목을 입력해 주세요."
        onChange={onChangeTitle}
        value={title}
      />
      <InputWrapper>
        <MainInput
          placeholder="내용을 입력해 주세요."
          onChange={onChangeBody}
          value={body}
        />
      </InputWrapper>
    </EditorBlock>
  );
};

export default Editor;
