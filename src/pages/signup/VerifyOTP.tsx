import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const VerifyEmail = () => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [timeLeft, setTimeLeft] = useState(30);

  // UI states
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // get email from previous page
  const email = (location.state as { email?: string })?.email;

  // guard against direct access
  if (!email) {
    navigate("/signup");
    return null;
  }

  // countdown
  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleVerify = () => {
    setError("");
    const code = otp.join("");

    if (code.length !== 6) {
      setError("Please enter the complete 6-digit code");
      return;
    }

    setLoading(true);

    // fake backend verification
    setTimeout(() => {
      setLoading(false);
      navigate("/signup/role", {
        state: { email },
      });
    }, 1500);
  };

  const handleResend = () => {
    setTimeLeft(30);
    // later: call backend resend OTP
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light font-display">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md text-center">

        <h1 className="text-3xl font-bold mb-2">Verify Your Email</h1>
        <p className="text-gray-500 mb-6">
          Enter the 6-digit code sent to your email
        </p>

        <div className="flex justify-center gap-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              value={digit}
              onChange={(e) => {
                handleChange(e.target.value, index);
                if (e.target.value && index < 5) {
                  const next = document.getElementById(`otp-${index + 1}`);
                  next?.focus();
                }
              }}
              maxLength={1}
              className="w-12 h-14 text-center text-xl font-bold border rounded-lg"
            />
          ))}
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-2">{error}</p>
        )}

        <p className="text-sm text-gray-500 mb-2">
          Resend code in{" "}
          <span className="font-semibold">{timeLeft}s</span>
        </p>

        <button
          onClick={handleResend}
          disabled={timeLeft > 0}
          className={`text-sm font-semibold ${
            timeLeft > 0
              ? "text-gray-400 cursor-not-allowed"
              : "text-primary"
          }`}
        >
          Resend OTP
        </button>

        <button
          onClick={handleVerify}
          disabled={loading}
          className="w-full h-12 mt-6 bg-primary text-white rounded-lg font-bold disabled:opacity-60"
        >
          {loading ? "Verifying..." : "Verify & Continue"}
        </button>

      </div>
    </div>
  );
};

export default VerifyEmail;
