import { useState, useEffect } from "react";
import axios from "axios";


export default function Form({ onClose, callback, data }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    code: "",
    type: "",
    level: "",
    price: "",
    content: ""
  });

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (data) {
        // Update data jika sedang mengedit
        await axios.patch(`http://localhost:3000/api/class/${data.id}`, formData);
        alert("Data kelas berhasil diperbarui!");
      } else {
        // Tambahkan data baru jika tidak ada data yang sedang diedit
        await axios.post("http://localhost:3000/api/class", formData);
        alert("Data kelas berhasil ditambahkan!");
      }
      if (callback && typeof callback === "function") {
        callback();
      }
      onClose();
    } catch (error) {
      alert("Terjadi kesalahan: " + error.message);
    }
  };
  
  

  return (
    <div className="flex justify-center items-center align-center w-full h-screen backdrop-brightness-20 fixed top-0 left-0">
      <div className="bg-white max-h-screen overflow-y-scroll overflow-hidden scrollbar-none rounded-3xl relative px-[50px] py-[50px]">
        {/* Close Button */}
        <button className="absolute top-4 right-4" onClick={onClose}>
          <img src="/Close.svg" alt="Close" />
        </button>

        {/* Title */}
        <h1 className="text-[#6148FF] font-bold text-2xl text-center mb-6">
        {data ? "Edit Kelas" : "Tambah Kelas"}
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
                value={formData[field.name] || ""}
                onChange={handleChange}
                placeholder={`Masukkan ${field.label.toLowerCase()}`}
                className="border rounded-[20px] w-[450px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#6148FF]"
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
              className="border rounded-[20px] w-[450px] py-2 px-4 h-24 focus:outline-none focus:ring-2 focus:ring-[#6148FF]"
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
