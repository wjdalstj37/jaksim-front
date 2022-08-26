import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import FindPwPage from "./pages/FindPwPage";
import SnsAuthPage from "./pages/SnsAuthPage";
import MyStudyPage from "./pages/MyStudyPage";
import PerStudyPage from "./pages/PerStudyPage";
import ProfilePage from "./pages/ProfilePage";
import BoardPage from "./pages/BoardPage";

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
      <Route path="/board" element={<BoardPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/findpw" element={<FindPwPage />} />
      <Route path="/@:email">
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
export default App;
