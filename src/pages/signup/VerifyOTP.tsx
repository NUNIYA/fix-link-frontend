import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [timeLeft, setTimeLeft] = useState(30);
  const navigate = useNavigate();

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
    const code = otp.join("");
    if (code.length !== 6) return;

    // later: verify OTP with backend
    navigate("/signup/role");
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

        <div className="flex justify-center gap-2 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              maxLength={1}
              className="w-12 h-14 text-center text-xl font-bold border rounded-lg"
            />
          ))}
        </div>

        <p className="text-sm text-gray-500 mb-2">
          Resend code in{" "}
          <span className="font-semibold">{timeLeft}s</span>
        </p>

        <button
          onClick={handleResend}
          disabled={timeLeft > 0}
          className={`text-sm font-semibold ${
            timeLeft > 0 ? "text-gray-400 cursor-not-allowed" : "text-primary"
          }`}
        >
          Resend OTP
        </button>

        <button
          onClick={handleVerify}
          className="w-full h-12 mt-6 bg-primary text-white rounded-lg font-bold"
        >
          Verify & Continue
        </button>

      </div>
    </div>
  );
};

export default VerifyEmail;
