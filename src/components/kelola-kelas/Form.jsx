import { useState } from "react";
import axios from "axios";

export default function Form({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    code: "",
    type: "",
    level: "",
    price: "",
    content: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman
    axios
      .post("http://localhost:3000/api/class", formData)
      .then(() => {
        alert("Data kelas berhasil ditambahkan!");
        onClose(); // Tutup form setelah submit
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error);
        alert("Gagal menambahkan data kelas.");
      });
  };

  return (
    <div className="flex justify-center items-center align-center w-full h-screen backdrop-brightness-20 fixed top-0 left-0">
      <div className="bg-white w-[750px] h-[853px] p-10 overflow-scroll rounded-3xl shadow-xl relative">
        {/* Close Button */}
        <button className="absolute top-4 right-4" onClick={onClose}>
          <img src="/Close.svg" alt="Close" />
        </button>

        {/* Title */}
        <h1 className="text-[#6148FF] font-bold text-2xl text-center mb-6">
          Tambah Kelas
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col">
          {[
            { name: "name", label: "Nama Kelas" },
            { name: "category", label: "Kategori" },
            { name: "code", label: "Kode Kelas" },
            { name: "type", label: "Tipe Kelas" },
            { name: "level", label: "Level" },
            { name: "price", label: "Harga" },
          ].map((field, index) => (
            <div key={index} className="mb-4">
              <label htmlFor={field.name} className="block mb-2 font-medium">
                {field.label}
              </label>
              <input
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={`Masukkan ${field.label.toLowerCase()}`}
                className="border rounded-[20px] w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#6148FF]"
              />
            </div>
          ))}

          <div className="mb-4">
            <label htmlFor="materi" className="block mb-2 font-medium">
              Materi
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Masukkan materi"
              className="border rounded-[20px] w-full py-2 px-4 h-24 focus:outline-none focus:ring-2 focus:ring-[#6148FF]"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-5 mt-6">
            <button type="button" className="bg-[#FF0000] text-white rounded-[30px] py-4 w-1/2 font-semibold">
              Upload Video
            </button>
            <button type="submit" className="bg-[#6148FF] text-white rounded-[30px] py-4 w-1/2 font-semibold">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
