
export default function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="px-2 py-1 bg-[#6148FF] text-white rounded-md hover:opacity-80 justify-items-end">
      {children}
    </button>
  );
}