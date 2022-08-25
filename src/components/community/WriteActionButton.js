import styled from "styled-components";

const WriteActionButtonBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  /* button 끼리 붙어있을 때의 style */
  button + button {
    margin-left: 0.5rem;
  }
`;

// button 컴포넌트를 가져와서 새 컴포넌트로 만듬
// tagBox 와 동일한 높이로 설정한 후 서로 간의 여백 지정
const StyledButton = styled.button`
  height: 2.125rem;
  background-color: #000000cc;
  color: #ffffff;
  & + & {
    border: 1px solid #0000004d;
    background-color: #ffffff;
    margin-left: 0.5rem;
    color: #000000;
  }
`;
const WriteActionButton = ({ onCancel, onPublish }) => {
  return (
    <WriteActionButtonBlock>
      {/* click event props settings */}
      <StyledButton onClick={onPublish}>등록</StyledButton>
      {/* button color props,click event props settings */}
      <StyledButton gray onClick={onCancel}>
        취소
      </StyledButton>
    </WriteActionButtonBlock>
  );
};

export default WriteActionButton;
