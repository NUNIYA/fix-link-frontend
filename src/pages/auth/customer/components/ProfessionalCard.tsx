export type Professional = {
  name: string;
  role: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
};

interface ProfessionalCardProps {
  pro: Professional;
}

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({ pro }) => {
  return (
    <div className="bg-card-light dark:bg-card-dark rounded-card p-6 border flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
      <img
        className="w-24 h-24 rounded-full border-4 mb-4"
        src={pro.image}
        alt={pro.name}
      />
      <h3 className="font-bold">{pro.name}</h3>
      <p className="text-sm text-gray-500">{pro.role}</p>

      <div className="flex items-center gap-1 text-amber-400 text-sm mt-2 mb-3">
        <span className="material-icons-round text-base">star</span>
        <span className="font-semibold text-gray-900 dark:text-white">{pro.rating}</span>
        <span className="text-gray-400 text-xs">({pro.reviews})</span>
      </div>

      <p className="mt-3 text-sm font-semibold">
        From <span className="text-primary">{pro.price} ETB</span>
      </p>

      <div className="grid grid-cols-2 gap-3 w-full mt-6">
        <button className="bg-primary text-white py-2 rounded-lg text-xs">
          View Profile
        </button>
        <button className="bg-blue-50 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 text-primary dark:text-blue-300 py-2 rounded-lg text-xs">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ProfessionalCard;
