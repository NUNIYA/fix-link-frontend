// src/pages/LoginPage.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaApple } from "react-icons/fa";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle login logic
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background-light dark:bg-background-dark p-4 sm:p-6 font-display">
      <div className="w-full max-w-md rounded-xl bg-white dark:bg-background-dark p-6 shadow-lg sm:p-8">
        <div className="flex flex-col gap-2 text-center mb-6">
          <h1 className="text-2xl font-bold text-text-primary dark:text-white">
            Sign in to Fix-Link
          </h1>
          <p className="text-sm text-text-secondary dark:text-gray-400">
            Access your account to continue.
          </p>
        </div>

        {/* Social Login Buttons */}
        <div className="flex flex-col gap-3">
          <button className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-border-color bg-white dark:bg-gray-800 text-sm font-medium text-text-primary dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <FaGoogle className="text-xl" />
            <span className="truncate">Sign in with Google</span>
          </button>

          <button className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-border-color bg-white dark:bg-gray-800 text-sm font-medium text-text-primary dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <FaApple className="text-xl" />
            <span className="truncate">Sign in with Apple</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border-color"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white dark:bg-background-dark px-2 text-sm text-text-secondary dark:text-gray-400">
              or
            </span>
          </div>
        </div>

        {/* Email & Password Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="form-input w-full rounded-lg border border-border-color bg-white dark:bg-gray-800 px-4 py-3 text-text-primary dark:text-white placeholder:text-text-secondary dark:placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="form-input w-full rounded-lg border border-border-color bg-white dark:bg-gray-800 px-4 py-3 text-text-primary dark:text-white placeholder:text-text-secondary dark:placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-text-secondary dark:text-gray-400 hover:text-text-primary dark:hover:text-white"
            >
              <span className="material-symbols-outlined">{
                showPassword ? "visibility_off" : "visibility"
              }</span>
            </button>
          </div>

          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm font-medium text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="flex h-12 w-full items-center justify-center rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-text-secondary dark:text-gray-400">
          Don’t have an account?{" "}
          <Link to="/signup/email" className="font-bold text-primary hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
