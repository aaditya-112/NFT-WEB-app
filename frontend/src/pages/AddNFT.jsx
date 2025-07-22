import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddNFT = () => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      setImage(reader.result);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/nft/aadnft", {
        title,
        description,
        price,
        image,
      });
      // console.log(res.data);
      toast.success(res.data.message);
      setTitle("");
      setImage(null);
      setdescription("");
      setPrice("");
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.message);
    }
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:border-indigo-500"
            ></textarea>
          </div>
          {/* Price */}
          <div>
            <label className="block text-gray-300 mb-1">Price (ETH) *</label>
            <input
              type="number"
              name="price"
              placeholder="e.g. 0.05"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
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
              onChange={handleImage}
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
