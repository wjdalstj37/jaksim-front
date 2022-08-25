import EditorContainer from "../containers/write/EditorContainer";
import Responsive from "../components/common/Responsive";

import WriteActionButton from "../components/community/WriteActionButton";
const WritePage = () => {
  return (
    <div>
      <Responsive>
        <EditorContainer />

        <WriteActionButton />
      </Responsive>
    </div>
  );
};

export default WritePage;
