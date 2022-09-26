import Editor from "../../components/community/Editor";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggle, initializeForm, postUpload } from "../../modules/board";
import { useState } from "react";

// import { postUpload } from "../../lib/api/board";

const EditorForm = () => {
  const [boardName, setboardName] = useState("notice");
  const [state, setState] = useState("view");
  const dispatch = useDispatch();
  const { user, form, upload, uploadError } = useSelector(
    ({ user, board }) => ({
      user: user.user,
      form: board.postUpload,
      upload: board.upload,
      uploadError: board.uploadError,
    })
  );

  const onClick = () => {
    setState("community");
  };

  const onChangeBracket = (e) => {
    const { value } = e.target;
    dispatch(
      toggle({
        form: "postUpload",
        key: "bracket",
        value,
      })
    );
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      toggle({
        form: "postUpload",
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { title, bracket, content, boardType, files } = form;
    const data = {
      title: title,
      bracket: bracket,
      content: content,
      boardType: boardType,
    };

    const json = JSON.stringify(data);
    const blob = new Blob([json], {
      type: "application/json",
    });

    const formData = new FormData();

    formData.append("boardAddRequestDto", blob);
    formData.append("files", files);

    console.log(json);

    // client.defaults.headers.common["Content-Type"] = "multipart/form-data";

    // for (let key of formData.keys()) {
    //   console.log(key);
    // }

    // /* value 확인하기 */
    // for (let value of formData.values()) {
    //   console.log(value);
    // }

    dispatch(postUpload({ formData }));
  };

  const onToggle = (e) => {
    const { value } = e.target;
    dispatch(
      toggle({
        form: "postUpload",
        key: "boardType",
        value,
      })
    );
    setboardName(value);
  };

  useEffect(() => {
    if (uploadError) {
      console.log(uploadError);
      return;
    }

    if (upload) {
      console.log("포스트 성공");
    }
  }, [upload, uploadError]);

  useEffect(() => {
    dispatch(initializeForm("postUpload"));
  }, [dispatch]);
  return (
    <Editor
      user={user}
      onToggle={onToggle}
      type={boardName}
      onClick={onClick}
      state={state}
      onChangeBracket={onChangeBracket}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default EditorForm;
