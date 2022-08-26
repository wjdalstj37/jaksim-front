// styled-component import
import styled from "styled-components";
import HeaderContainer from "../../containers/common/HeaderContainer";
import WriteActionButtonContainer from "../../containers/board/WriteActionButtonsContainer";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const BoardWrap = styled.div`
  display: flex;
  margin-top: 5rem;
  gap: 10rem;
`;

const MenuBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-left: 3rem;
  input {
    display: none;
  }
  label {
    &:hover {
      font-weight: 700;
    }
    cursor: pointer;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  gap: 1rem;
`;

const PostWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const SelectSubject = styled.select`
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
`;

const TitleInput = styled.input`
  font-size: 1rem;
  color: #000000;

  padding-bottom: 0.5rem;
  border: 1px solid #0000004d;

  margin-bottom: 2rem;
  width: 100%;
`;

const ContentWrap = styled.div`
  .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
    min-height: 20rem;
    h1,
    h2,
    h3,
    p,
    b,
    ul,
    ol,
    li,
    a {
      all: revert;
    }

    a {
      cursor: pointer;
    }
  }
`;

const typeMap = {
  notice: "작심하루 안내",
  free: "하루톡톡",
  friend: "우리 친구해요!",
};

// redux props
const Editor = ({ title, onChangeField, boardType }) => {
  // quill 적용 div element 를 설정
  const menu = typeMap[boardType];

  // input 은 e.target.value 로 설정
  const onChangeTitle = (e) => {
    onChangeField({ key: "title", value: e.target.value });
  };

  const onChangeMenu = (e) => {
    onChangeField({ key: "bracket", value: "" });
    onChangeField({ key: "boardType", value: e.target.id });
  };

  const onChangeBracket = (e) => {
    onChangeField({ key: "bracket", value: e.target.value });
  };

  return (
    <>
      <HeaderContainer />
      <BoardWrap>
        <MenuBar>
          <div>
            <input type="checkbox" id="notice" onClick={onChangeMenu} />
            <label htmlFor="notice">작심하루 안내</label>
          </div>
          <div>
            <input type="checkbox" id="free" onClick={onChangeMenu} />
            <label htmlFor="free">하루톡톡</label>
          </div>
          <div>
            <input type="checkbox" id="friend" onClick={onChangeMenu} />
            <label htmlFor="friend">우리 친구해요!</label>
          </div>
        </MenuBar>
        <PostWrap>
          <p>{menu}</p>
          <TitleWrap>
            {boardType === "notice" && (
              <SelectSubject onChange={onChangeBracket}>
                <option value="">말머리 없음</option>
                <option value="inform">공지</option>
                <option value="event">이벤트</option>
                <option value="guide">안내</option>
              </SelectSubject>
            )}
            {boardType === "free" && (
              <SelectSubject onChange={onChangeBracket}>
                <option value="">말머리 없음</option>
                <option value="daily">일상</option>
                <option value="curious">궁금해요</option>
                <option value="tip">꿀팁 공유해요</option>
                <option value="etc">기타</option>
              </SelectSubject>
            )}
            {boardType === "friend" && (
              <SelectSubject onChange={onChangeBracket}>
                <option value="">말머리 없음</option>
                <option value="student">학생</option>
                <option value="worker">직장인</option>
                <option value="jobSeeker">취준생</option>
                <option value="hobby">취미</option>
                <option value="etc">기타</option>
              </SelectSubject>
            )}
            <TitleInput
              placeholder="제목을 입력해 주세요."
              onChange={onChangeTitle}
              value={title}
            />
          </TitleWrap>
          <ContentWrap>
            <CKEditor
              editor={ClassicEditor}
              // onReady={(editor) => {
              //   // You can store the "editor" and use when it is needed.
              //   console.log("Editor is ready to use!", editor);
              // }}
              onChange={(event, editor) => {
                const data = editor.getData();
                onChangeField({ key: "content", value: data });
              }}
              // onBlur={(event, editor) => {
              //   console.log("Blur.", editor);
              // }}
              // onFocus={(event, editor) => {
              //   console.log("Focus.", editor);
              // }}
            />
            <WriteActionButtonContainer />
          </ContentWrap>
        </PostWrap>
      </BoardWrap>
    </>
  );
};

export default Editor;
