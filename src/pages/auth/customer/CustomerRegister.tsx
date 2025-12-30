import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

const CustomerRegister = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file" && files) {
      setProfilePhoto(files[0]);
    } else if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = () => {
    if (!form.agree) return;
    // Later: send to backend
    navigate("/customer/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light px-4 py-12">
      <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow w-full max-w-lg p-8 space-y-6">

        {/* Fix-Link Logo */}
        <div className="flex flex-col items-center gap-2 mb-6 text-center">
          <a
            href="#"
            className="flex items-center gap-2 text-2xl font-black text-[#111518] dark:text-white"
          >
            <span
              className="material-symbols-outlined text-primary text-4xl"
              style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
            >
              link
            </span>
            <span>Fix-Link</span>
          </a>
          <h1 className="text-3xl font-bold text-[#111518] dark:text-white">
            Create Your Customer Account
          </h1>
        </div>

        {/* Profile Photo */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              alt="Profile"
              src={
                profilePhoto
                  ? URL.createObjectURL(profilePhoto)
                  : "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ-5PPZi9NPtzeY_6E2_hGxx1srFdVTUVOn3xInHv_UQwIaoWcCS8BcEoVOwpzsd9ks5tHfXgr-FXMaCXqPxJqWJ8uNPkqDfEMpqCxfy9AaUizfvcJM4LNI3cXKhTA4ZVlK5QWdX578_eidkAZ0ZFtUNe56GedRk_ZYy5XD7vkCJB3YAIGESoESkifwjM9pNy_qOjChanYupldHMCIYoCgkdYQKi2vrANfiEcWQco6WEQ_2E5M4OA6hUpVYWo8aY50PF6PYve8DA"
              }
              className="h-16 w-16 rounded-full object-cover"
            />
            <label
              htmlFor="photo-upload"
              className="absolute bottom-0 right-0 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90"
            >
              <span className="material-symbols-outlined text-sm">edit</span>
            </label>
            <input
              id="photo-upload"
              type="file"
              className="sr-only"
              onChange={handleChange}
            />
          </div>
          <div className="text-sm text-[#60798a] dark:text-gray-400">
            <p className="font-medium text-[#111518] dark:text-gray-200">
              Profile Photo
            </p>
            <p>Upload a photo for your profile (optional).</p>
          </div>
        </div>

        {/* Form Inputs */}
        <div className="space-y-4">
          <label className="flex flex-col w-full">
            <span className="text-[#111518] dark:text-gray-200 text-base font-medium pb-2">
              Full Name
            </span>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="form-input w-full h-12 rounded-lg text-[#111518] dark:text-white"
            />
          </label>

          <label className="flex flex-col w-full">
            <span className="text-[#111518] dark:text-gray-200 text-base font-medium pb-2">
              Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="form-input w-full h-12 rounded-lg text-[#111518] dark:text-white"
            />
          </label>

          <label className="flex flex-col w-full">
            <span className="text-[#111518] dark:text-gray-200 text-base font-medium pb-2">
              Phone Number
            </span>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="form-input w-full h-12 rounded-lg text-[#111518] dark:text-white"
            />
          </label>

          <label className="flex flex-col w-full relative">
            <span className="text-[#111518] dark:text-gray-200 text-base font-medium pb-2">
              Location
            </span>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Enter your address or zip code"
              className="form-input w-full h-12 rounded-lg pl-10 text-[#111518] dark:text-white"
            />
            <button
              type="button"
              className="absolute left-2 top-10 text-[#60798a] dark:text-gray-400"
            >
              <span className="material-symbols-outlined">my_location</span>
            </button>
          </label>

          <label className="flex flex-col w-full relative">
            <span className="text-[#111518] dark:text-gray-200 text-base font-medium pb-2">
              Password
            </span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              className="form-input w-full h-12 rounded-lg pr-10 text-[#111518] dark:text-white"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-10  text-[#60798a] dark:text-gray-400"
            >
              <span className="material-symbols-outlined">
                {showPassword ? "visibility_off" : "visibility"}
              </span>
            </button>
          </label>

          <label className="flex flex-col w-full relative">
            <span className="text-[#111518] dark:text-gray-200 text-base font-medium pb-2">
              Confirm Password
            </span>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="form-input w-full h-12 rounded-lg pr-10 text-[#111518] dark:text-white"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-2 top-10 text-[#60798a] dark:text-gray-400"
            >
              <span className="material-symbols-outlined">
                {showConfirmPassword ? "visibility_off" : "visibility"}
              </span>
            </button>
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="form-checkbox h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-primary"
            />
            I agree to{" "}
            <a className="text-primary font-semibold hover:underline" href="#">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a className="text-primary font-semibold hover:underline" href="#">
              Privacy Policy
            </a>
            .
          </label>

          <button
            onClick={handleSubmit}
            className="w-full h-12 bg-primary text-white rounded-lg font-bold"
          >
            Create Account
          </button>

          <p className="text-sm text-center text-[#60798a] dark:text-gray-400">
            Already have an account?{" "}
            <a className="text-primary font-semibold hover:underline" href="#">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerRegister;
