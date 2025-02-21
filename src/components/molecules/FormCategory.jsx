import { useState, useEffect } from "react";
import axios from "axios";

export default function Form({ onClose, callback, data }) {
  const [formData, setFormData] = useState({
    name: "",

  });
  // Set form data when editing
  useEffect(() => {
    if (data) {
      setFormData({
        name: data.name || "",
      });
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
        await axios.patch(`http://localhost:3000/api/category/${data.id}`, formData);
        alert("Data category berhasil diperbarui!");
      } else {
        // Tambah data jika bukan edit
        await axios.post("http://localhost:3000/api/category", formData);
        alert("Data category berhasil ditambahkan!");
      }
  
      if (callback && typeof callback === "function") {
        callback();
      }
      onClose();
    } catch (error) {
      alert("Terjadi kesalahan: " + (error.response?.data?.message || error.message));
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
          {data ? "Edit Category" : "Tambah Category"}
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col">
          {/* Nama Kelas */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium">
              Nama Category
            </label>
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              placeholder="Masukkan nama kategori"
              className="border rounded-[20px] w-[450px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#6148FF]"
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
