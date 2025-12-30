const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            About Us
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Connecting communities with skilled, reliable professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          {[
            {
              icon: "hub",
              title: "Our Mission",
              desc: "To simplify the process of finding reliable professionals for all home service needs.",
            },
            {
              icon: "verified_user",
              title: "Our Values",
              desc: "Built on trust, quality, and transparency with vetted professionals.",
            },
            {
              icon: "groups",
              title: "Our Goal",
              desc: "To be the most trusted link between homeowners and local experts.",
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center size-16 rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-3xl">
                  {item.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
