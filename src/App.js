import Auth from "./pages/authentication/auth";
import LoginHandler from "./pages/authentication/login";
import { WelcomePage } from "./pages/authentication/welcome_page";
import { HomePage } from "./pages/home/HomePage";
import { Route, Routes } from 'react-router'

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Auth />} />
        <Route path="/login" element={<LoginHandler />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/verification" element={<WelcomePage />} />
      </Routes>
    </>
  );
}

export default App;
