import React, { useEffect } from "react";
import WriteActionButton from "../../components/community/WriteActionButton";
import { useSelector, useDispatch } from "react-redux";
import { postUpload } from "../../modules/board";
import { useNavigate } from "react-router-dom";

const WriteActionButtonContainer = ({ history }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { title, bracket, content, boardType, post, postError } = useSelector(
    ({ board }) => ({
      title: board.title,
      bracket: board.bracket,
      content: board.content,
      boardType: board.boardType,
      post: board.post,
      postError: board.postError,
    })
  );
  //  컴포넌트에서 onClick 이벤트로 호출할 함수
  const onPublish = () => {
    const boardAddRequestDto = new FormData();

    const data = {
      title: title,
      bracket: bracket,
      content: content,
      boardType: boardType,
    };

    console.log(data);

    const json = JSON.stringify(data);
    const blob = new Blob([json], { type: "application/json" });
    boardAddRequestDto.append("boardAddRequestDto", blob);

    dispatch(
      // 리덕스 스토어 안에 들어있는 값을 사용.
      postUpload({
        boardAddRequestDto,
      })
    );
  };

  const onCancel = () => {
    // history 객체 사용으로 뒤로 가기
    navigate(-1);
  };

  useEffect(() => {
    // post 작성이 성공하면
    if (post) {
      console.log(post);
      navigate("/");

      // const { _id, user } = post;
      // // _id, username 값을 참조해서 포스트를 읽을 수 있는 detail 경로를 만듬. 그리고 해당 경로로 이동
      // history.push(`/@${user.username}/${_id}`);
    }

    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError]);

  return <WriteActionButton onPublish={onPublish} onCancel={onCancel} />;
};
// 라우트가 아닌 컴포넌트에서 history 객체를 사용하기 위해서 컴포넌트를 withRouter 로 감싸줌
export default WriteActionButtonContainer;
