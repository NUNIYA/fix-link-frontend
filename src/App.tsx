import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailSignup from "./pages/signup/EmailSignup";
import VerifyOTP from "./pages/signup/VerifyOTP";
import ChooseRole from "./pages/auth/ChooseRole";
import CustomerRegister from "./pages/auth/customer/CustomerRegister";
import ProfessionalRegister from "./pages/auth/professional/ProfessionalRegister";
import CustomerHome from "./pages/auth/customer/CustomerHome";
import ProfessionalHome from "./pages/auth/professional/ProfessionalHome"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Signup flow */}
      <Route path="/signup/email" element={<EmailSignup />} />
      <Route path="/signup/verify" element={<VerifyOTP />} />
      <Route path="/signup/role" element={<ChooseRole />} />

      {/* Registration */}
      <Route path="/signup/customer" element={<CustomerRegister />} />
      <Route path="/signup/professional" element={<ProfessionalRegister />} />

      {/* Dashboards */}
      <Route path="/customer/home" element={<CustomerHome />} />
      <Route path="/professional/home" element={<ProfessionalHome />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
