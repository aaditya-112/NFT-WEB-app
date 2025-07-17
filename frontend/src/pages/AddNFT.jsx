import React, { useState } from "react";

const AddNFT = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle NFT form submission (e.g., API call)
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    console.log("NFT Form Submitted", formData);
    // You can send 'data' to your backend using axios
  };

  return (
    <div className="min-h-screen bg-[#0e0d1b] flex items-center justify-center px-4 py-12">
      <div className="bg-[#1e1e2f] p-8 rounded-xl shadow-lg w-full max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          Create New NFT
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-gray-300 mb-1">Title *</label>
            <input
              type="text"
              name="title"
              placeholder="e.g. Abstract Artwork"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-300 mb-1">Description *</label>
            <textarea
              name="description"
              rows="4"
              placeholder="e.g. This is an exclusive NFT..."
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:border-indigo-500"
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-300 mb-1">Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:border-indigo-500"
            >
              <option value="" disabled>Select a category</option>
              <option value="Art">Art</option>
              <option value="Music">Music</option>
              <option value="Domain Names">Domain Names</option>
              <option value="Virtual Worlds">Virtual Worlds</option>
              <option value="Trading Cards">Trading Cards</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-300 mb-1">Price (ETH) *</label>
            <input
              type="number"
              name="price"
              placeholder="e.g. 0.05"
              value={formData.price}
              onChange={handleChange}
              required
              step="0.01"
              className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Upload Image */}
          <div>
            <label className="block text-gray-300 mb-2">Upload Image *</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-gray-600 text-white file:bg-indigo-600 file:text-white file:px-4 file:py-2 file:rounded-md file:border-none file:cursor-pointer"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition"
          >
            Mint NFT
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNFT;
