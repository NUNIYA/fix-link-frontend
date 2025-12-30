import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailSignup from "./pages/signup/EmailSignup";
import VerifyOTP from "./pages/signup/VerifyOTP";
import ChooseRole from "./pages/auth/ChooseRole";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup/email" element={<EmailSignup />} />
        <Route path="/signup/verify" element={<VerifyOTP />} />
        <Route path="/signup/role" element={<ChooseRole />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
