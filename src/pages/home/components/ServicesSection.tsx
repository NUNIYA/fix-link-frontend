import { useState } from "react";

// Define the type for each service
interface Service {
  icon: string;
  name: string;
}

// Base services
const services: Service[] = [
  { icon: "cleaning_services", name: "Cleaning" },
  { icon: "plumbing", name: "Plumbing" },
  { icon: "electrical_services", name: "Electrician" },
  { icon: "format_paint", name: "Painter" },
  { icon: "handyman", name: "Handyman" },
  { icon: "laptop_chromebook", name: "IT Technician" },
];

// Extra services to show when "More" is clicked
const extraServices: Service[] = [
  { icon: "local_shipping", name: "Delivery" },
  { icon: "car_repair", name: "Carpentry" },
  { icon: "pool", name: "Pool Cleaning" },
];

const ServicesSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="services"
      className="py-16 sm:py-24 bg-white dark:bg-background-dark/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Explore Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Whatever you need done, we’ve got the right pro.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group cursor-pointer"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">
                  {service.icon}
                </span>
              </div>
              <span className="font-semibold text-sm">{service.name}</span>
            </div>
          ))}

          {/* "More" Button */}
          <div
            className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group cursor-pointer"
            onClick={() => setShowMore(!showMore)}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              <span className="material-symbols-outlined text-3xl">
                more_horiz
              </span>
            </div>
            <span className="font-semibold text-sm">More</span>
          </div>
        </div>

        {/* Extra Services Grid */}
        {showMore && (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center mt-6">
            {extraServices.map((service) => (
              <div
                key={service.name}
                className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group cursor-pointer"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    {service.icon}
                  </span>
                </div>
                <span className="font-semibold text-sm">{service.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
