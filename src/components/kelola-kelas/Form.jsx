export default function Form({ onClose }) {
  return (
    <div className="flex justify-center items-center w-full h-screen backdrop-brightness-20 fixed top-0 left-0">
      <div className="bg-white w-[750px] p-10 rounded-3xl shadow-xl relative">
        {/* Close Button */}
        <button className="absolute top-4 right-4" onClick={onClose}>
          <img src='/Close.svg' alt='Close'/>
        </button>

        {/* Title */}
        <h1 className="text-[#6148FF] font-bold text-2xl text-center mb-6">
          Tambah Kelas
        </h1>

        {/* Form */}
        <form className="flex flex-col">
          {[{ label: "Nama Kelas", placeholder: "Text" },
            { label: "Kategori", placeholder: "Text" },
            { label: "Kode Kelas", placeholder: "Text" },
            { label: "Tipe Kelas", placeholder: "Text" },
            { label: "Level", placeholder: "Text" },
            { label: "Harga", placeholder: "Text" }
          ].map((field, index) => (
            <div key={index} className="mb-4">
              <label htmlFor={field.label} className="block mb-2 font-medium">
                {field.label}
              </label>
              <input
                type="text"
                placeholder={field.placeholder}
                className="border rounded-[20px] w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#6148FF]"
              />
            </div>
          ))}

          <div className="mb-4">
            <label htmlFor="Materi" className="block mb-2 font-medium">
              Materi
            </label>
            <textarea
              placeholder="Paragraph"
              className="border rounded-[20px] w-full py-2 px-4 h-24 focus:outline-none focus:ring-2 focus:ring-[#6148FF]"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-5 mt-6">
            <button className="bg-[#FF0000] text-white rounded-[30px] py-4 w-1/2 font-semibold">
              Upload Video
            </button>
            <button className="bg-[#6148FF] text-white rounded-[30px] py-4 w-1/2 font-semibold">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
