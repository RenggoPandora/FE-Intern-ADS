
export default function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="px-2 py-1 bg-[#6148FF] text-white w-[38px] h-[38px] rounded-[10px] hover:opacity-80 justify-items-end">
      {children}
    </button>
  );
}