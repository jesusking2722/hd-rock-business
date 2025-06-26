import { useState } from "react";

const RadioGroup = () => {
  const [selectedValue, setSelectedValue] = useState("option2"); // Default to second option (orange)

  const options = [
    { id: "option1", value: "option1", label: "Option 1" },
    { id: "option2", value: "option2", label: "Option 2" },
    { id: "option3", value: "option3", label: "Option 3" },
    { id: "option4", value: "option4", label: "Option 4" },
  ];

  const handleChange = (value: any) => {
    setSelectedValue(value);
  };

  return (
    <>
      {/* Radio Group */}
      <div className="flex items-center gap-4 mb-6">
        {options.map((option) => (
          <div key={option.id} className="flex flex-col items-center gap-2">
            <button
              onClick={() => handleChange(option.value)}
              className={`w-8 h-8 rounded-full border-2 border-[#BDBDBD] shadow-sm transition-all duration-200 ease-in-out focus:outline-none focus:border-[#F9A825] ${
                selectedValue === option.value
                  ? "border-[#F9A825] shadow-[#F9A825]"
                  : "border-[#BDBDBD] shadow-[#BDBDBD]"
              }`}
              aria-label={option.label}
              role="radio"
              aria-checked={selectedValue === option.value}
            >
              {selectedValue === option.value ? (
                <div className="w-4 h-4 bg-[#F9A825] rounded-full mx-auto"></div>
              ) : (
                <div className="w-4 h-4 bg-[#BDBDBD] rounded-full mx-auto"></div>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Hidden native radio inputs for form submission */}
      <div className="sr-only">
        {options.map((option) => (
          <input
            key={option.id}
            type="radio"
            id={option.id}
            name="radioGroup"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={(e) => handleChange(e.target.value)}
          />
        ))}
      </div>
    </>
  );
};

export default RadioGroup;
