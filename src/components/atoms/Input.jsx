export default function Input({ placeholder }) {
    return (
      <input
        type="text"
        placeholder={placeholder}
        className="px-2 py-1 text-[#8A8A8A] bg-transparent focus:outline-none"
      />
    );
  }