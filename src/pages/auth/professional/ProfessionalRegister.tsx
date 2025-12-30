import React from "react";

const ProfessionalRegister = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission later
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col">
      {/* Header */}
      <header className="h-20 w-full px-4 sm:px-8 md:px-12 flex items-center">
        <a
          href="#"
          className="flex items-center gap-2.5 text-2xl font-black text-[#111518] dark:text-white"
        >
          <span
            className="material-symbols-outlined text-primary text-4xl"
            style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
          >
            link
          </span>
          Fix-Link
        </a>
      </header>

      {/* Main Form */}
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl p-6 md:p-12 bg-white dark:bg-background-dark/50 rounded-xl shadow space-y-10"
        >
          {/* Title */}
          <div className="text-center space-y-2 mb-8">
            <h1 className="text-4xl font-black text-[#111518] dark:text-white">
              Create Your Professional Account
            </h1>
            <p className="text-[#60798a] dark:text-gray-400">
              Provide accurate details to get verified and start receiving jobs.
            </p>
          </div>

          {/* A. Personal Information */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold border-b pb-3 border-[#dbe1e6] dark:border-gray-700">
              A. Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-[#111518] dark:text-gray-200 font-medium pb-1">
                  Full Name
                </span>
                <input type="text" className="form-input h-12" />
              </label>
              <label className="flex flex-col">
                <span className="text-[#111518] dark:text-gray-200 font-medium pb-1">
                  Email
                </span>
                <input type="email" className="form-input h-12" />
              </label>
              <label className="flex flex-col">
                <span className="text-[#111518] dark:text-gray-200 font-medium pb-1">
                  Phone Number
                </span>
                <input type="tel" className="form-input h-12" />
              </label>
              <label className="flex flex-col">
                <span className="text-[#111518] dark:text-gray-200 font-medium pb-1">
                  Profile Photo
                </span>
                <input
                  type="file"
                  className="form-input file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary dark:file:bg-primary/20 dark:file:text-white hover:file:bg-primary/20"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-[#111518] dark:text-gray-200 font-medium pb-1">
                  Password
                </span>
                <input type="password" className="form-input h-12" />
              </label>
              <label className="flex flex-col">
                <span className="text-[#111518] dark:text-gray-200 font-medium pb-1">
                  Confirm Password
                </span>
                <input type="password" className="form-input h-12" />
              </label>
              <label className="flex flex-col">
                <span className="text-[#111518] dark:text-gray-200 font-medium pb-1">
                  Gender (Optional)
                </span>
                <select className="form-select h-12">
                  <option>Select...</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Prefer not to say</option>
                </select>
              </label>
              <label className="flex flex-col">
                <span className="text-[#111518] dark:text-gray-200 font-medium pb-1">
                  Date of Birth (Optional)
                </span>
                <input type="date" className="form-input h-12" />
              </label>
            </div>

            {/* Address */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <label className="flex flex-col">
                <span className="text-[#111518] dark:text-gray-200 font-medium pb-1">
                  City
                </span>
                <input type="text" className="form-input h-12" />
              </label>
              <label className="flex flex-col">
                <span className="text-[#111518] dark:text-gray-200 font-medium pb-1">
                  Subcity
                </span>
                <input type="text" className="form-input h-12" />
              </label>
              <label className="flex flex-col">
                <span className="text-[#111518] dark:text-gray-200 font-medium pb-1">
                  House Number
                </span>
                <input type="text" className="form-input h-12" />
              </label>
            </div>

            <button
              type="button"
              className="flex items-center gap-2 px-5 h-12 border rounded-lg bg-white dark:bg-gray-800 border-[#dbe1e6] dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <span className="material-symbols-outlined text-lg">
                my_location
              </span>
              Use Current GPS Location
            </button>
          </section>

          {/* B. Professional Details */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold border-b pb-3 border-[#dbe1e6] dark:border-gray-700">
              B. Professional Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-[#111518] dark:text-gray-200 font-medium pb-1">
                  Service Category
                </span>
                <select className="form-select h-12">
                  <option>Select a category</option>
                  <option>Plumbing</option>
                  <option>Electrical</option>
                  <option>Carpentry</option>
                  <option>Painting</option>
                  <option>Cleaning</option>
                </select>
              </label>

              <label className="flex flex-col">
                <span className="text-[#111518] dark:text-gray-200 font-medium pb-1">
                  Years of Experience
                </span>
                <input type="number" className="form-input h-12" />
              </label>

              <label className="flex flex-col md:col-span-2">
                <span className="text-[#111518] dark:text-gray-200 font-medium pb-1">
                  List of Skills
                </span>
                <input
                  type="text"
                  placeholder="Pipe fitting, Drain cleaning"
                  className="form-input h-12"
                />
              </label>

              <label className="flex flex-col md:col-span-2">
                <span className="text-[#111518] dark:text-gray-200 font-medium pb-1">
                  Short Bio / Description
                </span>
                <textarea className="form-textarea h-32" />
              </label>

              <label className="flex flex-col md:col-span-2">
                <span className="text-[#111518] dark:text-gray-200 font-medium pb-1">
                  Languages Spoken
                </span>
                <input
                  type="text"
                  placeholder="English, Amharic"
                  className="form-input h-12"
                />
              </label>
            </div>
          </section>

          {/* C. Verification Documents */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold border-b pb-3 border-[#dbe1e6] dark:border-gray-700">
              C. Verification Documents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-[#111518] dark:text-gray-200 font-medium pb-1">
                  National ID (Front)
                </span>
                <input type="file" className="form-input" />
              </label>
              <label className="flex flex-col">
                <span className="text-[#111518] dark:text-gray-200 font-medium pb-1">
                  National ID (Back)
                </span>
                <input type="file" className="form-input" />
              </label>
              <label className="flex flex-col">
                <span className="text-[#111518] dark:text-gray-200 font-medium pb-1">
                  CV / Resume
                </span>
                <input type="file" className="form-input" />
              </label>
              <label className="flex flex-col">
                <span className="text-[#111518] dark:text-gray-200 font-medium pb-1">
                  Certificate or License (Optional)
                </span>
                <input type="file" className="form-input" />
              </label>
              <label className="flex flex-col md:col-span-2">
                <span className="text-[#111518] dark:text-gray-200 font-medium pb-1">
                  Profile Video Introduction (Optional)
                </span>
                <input type="file" className="form-input" />
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="info-confirmation"
                className="form-checkbox h-5 w-5 text-primary"
              />
              <label htmlFor="info-confirmation" className="text-sm">
                I confirm that all information provided is accurate.
              </label>
            </div>
          </section>

          {/* D. Banking / Payment Setup */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold border-b pb-3 border-[#dbe1e6] dark:border-gray-700">
              D. Banking / Payment Setup (Optional)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-[#111518] dark:text-gray-200 font-medium pb-1">
                  Preferred Payout Method
                </span>
                <select className="form-select h-12">
                  <option>Select a method</option>
                  <option>Telebirr</option>
                  <option>CBE Birr</option>
                  <option>Bank Account</option>
                </select>
              </label>
              <label className="flex flex-col">
                <span className="text-[#111518] dark:text-gray-200 font-medium pb-1">
                  Account Number
                </span>
                <input
                  type="text"
                  className="form-input h-12"
                  placeholder="Enter your account/phone number"
                />
              </label>
            </div>
          </section>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-12 bg-primary text-white rounded-lg font-bold"
          >
            Submit & Proceed to Verification
          </button>

          <p className="text-center text-sm text-[#60798a] dark:text-gray-400 mt-4">
            Already have an account?{" "}
            <a className="text-primary font-semibold hover:underline" href="#">
              Sign In
            </a>
          </p>
        </form>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-4 sm:px-8 md:px-12 text-center text-[#60798a] dark:text-gray-400">
        <div className="flex justify-center items-center gap-6 text-sm">
          <a href="#" className="hover:text-primary">
            Terms of Service
          </a>
          <a href="#" className="hover:text-primary">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ProfessionalRegister;
