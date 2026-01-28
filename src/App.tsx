import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import EmailSignup from "./pages/signup/EmailSignup";
import VerifyOTP from "./pages/signup/VerifyOTP";
import ChooseRole from "./pages/auth/ChooseRole";
import CustomerRegister from "./pages/auth/customer/CustomerRegister";
import ProfessionalRegister from "./pages/auth/professional/ProfessionalRegister";
import CustomerHome from "./pages/auth/customer/CustomerHome";
import SearchResults from "./pages/auth/customer/SearchResults";
import ProfessionalProfile from "./pages/auth/customer/ProfessionalProfile";
import CustomerMessages from "./pages/auth/customer/CustomerMessages";
import ProfessionalHome from "./pages/auth/professional/ProfessionalHome"
import ProfessionalMessages from "./pages/auth/professional/ProfessionalMessages";
import LoginPage from "./pages/auth/login";
import ForgotPassword from "./pages/auth/login/ForgotPassword";
import PendingApproval from "./pages/signup/PendingApproval";
import AccountSettings from "./pages/auth/customer/AccountSettings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        {/* Signup flow */}
        <Route path="/signup/email" element={<EmailSignup />} />
        <Route path="/signup/verify" element={<VerifyOTP />} />
        <Route path="/signup/role" element={<ChooseRole />} />

        {/* Registration */}
        <Route path="/signup/customer" element={<CustomerRegister />} />
        <Route path="/signup/professional" element={<ProfessionalRegister />} />
        {/* Login & Recovery */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Dashboards */}
        <Route
          path="/customer/home"
          element={

            <CustomerHome />

          }
        />
        <Route
          path="/customer/search"
          element={

            <SearchResults />

          }
        />
        <Route path="/customer/profile/:id" element={
          <ProfessionalProfile />
        } />

        <Route path="/customer/messages/:id" element={
          <CustomerMessages />
        } />

        <Route
          path="/professional/home"
          element={

            <ProfessionalHome />

          }
        />
        <Route
          path="/professional/messages"
          element={
            <ProfessionalMessages />
          }
        />
        <Route
          path="/professional/profile"
          element={
            <ProfessionalProfile />
          }
        />

        <Route path="/signup/pending-approval" element={<PendingApproval />} />
        <Route path="/account-settings" element={<AccountSettings />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
