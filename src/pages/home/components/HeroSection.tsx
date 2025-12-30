import SearchBar from "./SearchBar";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuApKZaniX5njk9gJCMeItqPjQO1P1fHE3j0lDzc4NquOcmn1faQRedlDklfoJj430AjGSdJ3cyYv5rMdZI_3IhPEmHzq1WKztRw-0eAMbKF0XOzbKKE2P7pxTiDuFfPnTN_hvGSK0LJSXesIBPEaeKSUWJWO9-oN8knTRTO2RFf847s5zRNmnZUyiVJU3eDoNs2frTZbtMkc50imNg9WW85vV728xh__eqKj0qrYuZUm66zMlCPC-SwuB8GIh8nX54OUozKdDomGQ')",
      }}
    >
      <div className="mt-20 flex flex-col gap-6 w-full px-4">
        <h1 className="text-white text-4xl md:text-6xl font-black">
          Your Link to Trusted Local Pros.
        </h1>
        <p className="text-white max-w-2xl mx-auto">
          Find and book top-rated local professionals for any home project.
        </p>

        <SearchBar />
      </div>
    </section>
  );
};

export default HeroSection;
