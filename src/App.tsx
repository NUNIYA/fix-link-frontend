import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailSignup from "./pages/signup/EmailSignup";
import VerifyOTP from "./pages/signup/VerifyOTP";
import ChooseRole from "./pages/auth/ChooseRole";
import CustomerRegister from "./pages/auth/customer/CustomerRegister";
import ProfessionalRegister from "./pages/auth/professional/ProfessionalRegister";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup/email" element={<EmailSignup />} />
        <Route path="/signup/verify" element={<VerifyOTP />} />
        <Route path="/signup/role" element={<ChooseRole />} />
        <Route path="/signup/customer" element={<CustomerRegister />} />
        <Route path="/signup/professional" element={<ProfessionalRegister />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
