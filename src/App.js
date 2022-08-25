import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import FindPwPage from "./pages/FindPwPage";
import SnsAuthPage from "./pages/SnsAuthPage";
import CommunityPage from "./pages/CommunityPage";
import MyStudyPage from "./pages/MyStudyPage";
import PerStudyPage from "./pages/PerStudyPage";
import ProfilePage from "./pages/ProfilePage";
import WritePage from "./pages/WritePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/findpw" element={<FindPwPage />} />
      <Route path="/oauth/redirect" element={<SnsAuthPage />} />
      <Route path="/mystudy" element={<MyStudyPage />} />
      <Route path="/stopwatch" element={<PerStudyPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/findpw" element={<FindPwPage />} />
      <Route path="/@:email">
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
export default App;
