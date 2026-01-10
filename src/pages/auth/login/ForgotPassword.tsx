import { useState } from "react";
import { Link } from "react-router-dom";
import { forgotPassword } from "../../../api/auth.api";
import LoadingSpinner from "../../../components/LoadingSpinner";
import ErrorMessage from "../../../components/ErrorMessage";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            await forgotPassword(email);
            setSuccess(true);
        } catch (err: any) {
            setError(err.message || "Failed to send reset link");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-background-light dark:bg-background-dark p-4 sm:p-6 font-display">
            <div className="w-full max-w-md rounded-xl bg-white dark:bg-background-dark p-6 shadow-lg sm:p-8">
                {success ? (
                    <div className="text-center animate-fade-in">
                        <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500">
                            <span className="material-symbols-outlined text-3xl">mark_email_read</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Check your mail</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            We have sent a password recover instructions to your email.
                        </p>
                        <Link
                            to="/login"
                            className="inline-block w-full rounded-lg bg-primary py-3 text-sm font-bold text-white hover:bg-primary/90 transition-colors"
                        >
                            Back to Login
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="text-center mb-6">
                            <h1 className="text-2xl font-bold text-text-primary dark:text-white">
                                Forgot Password?
                            </h1>
                            <p className="mt-2 text-sm text-text-secondary dark:text-gray-400">
                                Enter your email and we'll send you a link to reset your password.
                            </p>
                        </div>

                        {error && (
                            <div className="mb-4">
                                <ErrorMessage message={error} />
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="space-y-1">
                                <label htmlFor="email" className="text-sm font-medium text-text-primary dark:text-white">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="form-input w-full rounded-lg border border-border-color bg-white dark:bg-gray-800 px-4 py-3 text-text-primary dark:text-white placeholder:text-text-secondary dark:placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="flex h-12 w-full items-center justify-center rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors disabled:opacity-70 mt-2"
                            >
                                {loading ? <LoadingSpinner /> : "Send Reset Link"}
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
                    </>
                )}
            </div>
        </div>
    );
};

export default ForgotPassword;
