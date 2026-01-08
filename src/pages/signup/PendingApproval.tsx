import { Link } from "react-router-dom";

const PendingApproval = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light font-display px-4">
      <div className="bg-white rounded-xl shadow max-w-md w-full p-8 text-center space-y-6">

        <div className="flex justify-center">
          <span
            className="material-symbols-outlined text-primary text-6xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            hourglass_top
          </span>
        </div>

        <h1 className="text-2xl font-bold">
          Application Under Review
        </h1>

        <p className="text-subtle-light">
          Thank you for registering as a professional on Fix-Link.
          Our team is reviewing your details and verification documents.
        </p>

        <p className="text-subtle-light">
          You will receive an email once your account is approved.
        </p>

        <div className="space-y-3 pt-4">
          <Link
            to="/"
            className="block w-full h-12 flex items-center justify-center rounded-lg border border-border-light font-medium hover:bg-gray-50"
          >
            Back to Home
          </Link>

          <Link
            to="/login"
            className="block w-full h-12 flex items-center justify-center rounded-lg bg-primary text-white font-bold hover:opacity-90"
          >
            Go to Login
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PendingApproval;
