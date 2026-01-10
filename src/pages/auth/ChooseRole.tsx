import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const ChooseRole = () => {
  const [role, setRole] = useState<"customer" | "professional">("customer");

  const navigate = useNavigate();
  const location = useLocation();

  const email = (location.state as { email?: string })?.email;

  // B) Guard against direct access
  if (!email) {
    navigate("/signup");
    return null;
  }

  const handleContinue = () => {
    navigate(
      role === "customer"
        ? "/signup/customer"
        : "/signup/professional",
      { state: { email } }
    );
  };

  return (
    <div className="min-h-screen bg-background-light font-display flex items-center justify-center px-4">
      <div className="w-full max-w-lg">

        {/* Header */}
        <header className="flex justify-center py-8">
          <h2 className="text-2xl font-bold text-gray-900">Fix-Link</h2>
        </header>

        {/* Card */}
        <main className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-6">

          {/* Title */}
          <div className="text-center space-y-1">
            <h1 className="text-2xl sm:text-3xl font-black">
              Choose your Fix-Link Account Type
            </h1>
            <p className="text-gray-500">
              Select whether you want to hire services or offer services.
            </p>
          </div>

          {/* Options */}
          <div className="space-y-4">

            {/* Customer */}
            <label
              className={`flex items-center gap-4 rounded-lg border-2 p-4 cursor-pointer transition
                ${role === "customer"
                  ? "border-primary bg-primary/10"
                  : "border-gray-200 hover:border-primary/50"}
              `}
            >
              <input
                type="radio"
                className="hidden"
                checked={role === "customer"}
                onChange={() => setRole("customer")}
              />

              <div className="size-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500">
                <span className="material-symbols-outlined text-3xl">person</span>
              </div>

              <div>
                <p className="font-medium text-gray-900">
                  Continue as a Customer
                </p>
                <p className="text-sm text-gray-500">
                  Hire trusted professionals for services.
                </p>
              </div>
            </label>

            {/* Professional */}
            <label
              className={`flex items-center gap-4 rounded-lg border-2 p-4 cursor-pointer transition
                ${role === "professional"
                  ? "border-primary bg-primary/10"
                  : "border-gray-200 hover:border-primary/50"}
              `}
            >
              <input
                type="radio"
                className="hidden"
                checked={role === "professional"}
                onChange={() => setRole("professional")}
              />

              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">work</span>
              </div>

              <div>
                <p className="font-medium text-gray-900">
                  Continue as a Professional
                </p>
                <p className="text-sm text-gray-500">
                  Offer services and get hired by customers.
                </p>
              </div>
            </label>
          </div>

          {/* Button */}
          <button
            onClick={handleContinue}
            className="w-full h-12 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/30"
          >
            Continue
          </button>

        </main>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 py-6">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-medium cursor-pointer hover:underline">
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
};

export default ChooseRole;
