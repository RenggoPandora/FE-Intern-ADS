import { useState } from 'react';

const CustomCheckbox = ({ label }) => {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <label className="w-full relative inline-flex items-center cursor-pointer select-none">
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={handleChange} 
        className="absolute opacity-0 cursor-pointer h-0 w-0 rounded-lg"
      />
      <div 
        className={`relative top-0 left-0 h-6 w-6 rounded-lg bg-gray-300 shadow-md transition-all duration-200 
          ${checked ? 'bg-gradient-to-br from-[#6148FF] to-[#6148FF] shadow-lg' : 'shadow-sm'}`}
      >
        <span 
          className={`absolute left-2 top-1.5 w-1.5 h-3 border-t-2 border-l-2 border-white transform rotate-[230deg] 
            transition-opacity duration-200 ${checked ? 'opacity-100' : 'opacity-0'}`}
        ></span>
      </div>
      <span className="ml-3 text-[12px] w-full ">{label}</span>
    </label>
  );
};

export default CustomCheckbox;
