import { useState } from "react";

interface Props {
  value: string;
  onSelect: (location: string) => void;
}

const mockLocations = [
  "Addis Ababa, Bole",
  "Addis Ababa, Kazanchis",
  "Adama, Nazret",
  "Bahir Dar",
  "Hawassa",
];

const LocationInput = ({ value, onSelect }: Props) => {
  const [query, setQuery] = useState(value);
  const [show, setShow] = useState(false);

  const filtered = mockLocations.filter((loc) =>
    loc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative">
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShow(true);
        }}
        className="form-input h-12 w-full"
        placeholder="Enter location"
      />

      {show && filtered.length > 0 && (
        <div className="absolute z-10 bg-white border w-full rounded shadow mt-1">
          {filtered.map((loc) => (
            <div
              key={loc}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                onSelect(loc);
                setQuery(loc);
                setShow(false);
              }}
            >
              {loc}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationInput;
