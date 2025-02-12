export default function Input({ placeholder }) {
    return (
      <input
        type="text"
        placeholder={placeholder}
        className="px-3 py-1 ml-[16px] text-[#8A8A8A] bg-transparent focus:outline-none"
      />
    );
  }