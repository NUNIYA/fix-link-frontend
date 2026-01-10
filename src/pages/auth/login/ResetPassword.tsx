import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { resetPassword } from "../../../api/auth.api";
import LoadingSpinner from "../../../components/LoadingSpinner";
import ErrorMessage from "../../../components/ErrorMessage";

const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (!token) {
            setError("Invalid or missing reset token");
            return;
        }

        setLoading(true);

        try {
            await resetPassword(token, password);
            // Success - Redirect to login with a flag or just alert
            // Ideally we could show a success toast or page, but for now redirecting
            navigate("/login");
        } catch (err: any) {
            setError(err.message || "Failed to reset password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-background-light dark:bg-background-dark p-4 sm:p-6 font-display">
            <div className="w-full max-w-md rounded-xl bg-white dark:bg-background-dark p-6 shadow-lg sm:p-8">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-text-primary dark:text-white">
                        Reset Password
                    </h1>
                    <p className="mt-2 text-sm text-text-secondary dark:text-gray-400">
                        Create a new strong password for your account.
                    </p>
                </div>

                {error && (
                    <div className="mb-4">
                        <ErrorMessage message={error} />
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-text-primary dark:text-white">
                            New Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter new password"
                                className="form-input w-full rounded-lg border border-border-color bg-white dark:bg-gray-800 px-4 py-3 text-text-primary dark:text-white placeholder:text-text-secondary dark:placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength={8}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-text-secondary dark:text-gray-400 hover:text-text-primary dark:hover:text-white"
                            >
                                <span className="material-symbols-outlined">
                                    {showPassword ? "visibility_off" : "visibility"}
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-text-primary dark:text-white">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Confirm new password"
                                className="form-input w-full rounded-lg border border-border-color bg-white dark:bg-gray-800 px-4 py-3 text-text-primary dark:text-white placeholder:text-text-secondary dark:placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="flex h-12 w-full items-center justify-center rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors disabled:opacity-70 mt-2"
                    >
                        {loading ? <LoadingSpinner /> : "Reset Password"}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <Link
                        to="/login"
                        className="text-sm font-bold text-text-secondary hover:text-text-primary dark:text-gray-400 dark:hover:text-white inline-flex items-center gap-2 transition-colors"
                    >
                        <span className="material-symbols-outlined text-lg">arrow_back</span>
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
