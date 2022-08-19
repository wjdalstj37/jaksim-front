import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import FindPwPage from "./pages/FindPwPage";
import SnsAuthPage from "./pages/SnsAuthPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/findpw" element={<FindPwPage />} />
      <Route path="/oauth2/redirect" element={<SnsAuthPage />} />
      <Route path="/@:username">
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
export default App;
