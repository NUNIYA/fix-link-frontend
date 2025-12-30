import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light font-display">
      <div className="flex flex-1 items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="flex w-full max-w-[960px] flex-col items-center">
          <h1 className="text-text-light tracking-light text-[32px] font-bold leading-tight text-center pb-8 pt-6">
            Fix-Link
          </h1>

          <div className="w-full max-w-4xl">
            <div className="flex flex-col rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.05)] bg-card-light md:flex-row">
              <div className="flex flex-col gap-4 p-6 sm:p-8 md:p-10 w-full">
                <div className="flex flex-col gap-2">
                  <p className="text-2xl font-bold">
                    Enter your email to get started
                  </p>
                  <p className="text-subtle-light">
                    We will send you a verification code.
                  </p>
                </div>

                <label className="flex flex-col pt-4">
                  <span className="pb-2 font-medium">Email</span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 rounded-lg border border-border-light px-4 focus:ring-2 focus:ring-primary/50"
                  />
                </label>

                <button
                  onClick={() =>
                    navigate("/signup/verify", { state: { email } })
                  }
                  className="h-12 rounded-lg bg-primary text-white font-bold hover:opacity-90"
                >
                  Continue
                </button>

                <p className="text-sm text-center text-subtle-light pt-4">
                  Already have an account?{" "}
                  <span className="text-primary underline cursor-pointer">
                    Sign In
                  </span>
                </p>
              </div>

              {/* Right image section */}
              <div className="hidden md:flex w-[45%] bg-primary/5 rounded-r-xl items-center justify-center p-6">
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-contain"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkNmW8dDnj51EGPB-xOxwWbsqgVxfGApoJ0q7cU4JkHZik9BELDYLa9RMVqvXTppwQ4wFaOa-TXAEskJc-E4kra7LF-yqrD69ayfsEQC-0-GrQxOTyKHPq6NpFuX8CKJgmX6fLN0GP6j-VLQKc5mn3d-l7CDYoQHHUE97HoH2AzN1pA1mM_6oK8Z_8UAIhswGXVmjwydIyUWrN4gm7JlKTvQEW272N1ASzE6iUNVCaFFbsWnwRBhe4zagTj64ImnwCqtUzlSmhfg")',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSignup;
