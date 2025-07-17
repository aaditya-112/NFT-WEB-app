import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#0F0F25] min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Tailwind Template for <br /> NFT Marketplace and <br /> Web3 Platforms
          </h1>
          <p className="text-gray-300 mt-6 text-lg leading-relaxed">
            Template for NFT, Token, and Web3 marketplace projects, based on Tailwind CSS.
            Comes with all the essential UI components and pages you need to build an NFT
            marketplace or all sorts of Web3 platforms.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition">
              Explore now
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition">
              Upload Your Art
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://nft-tailwind.preview.uideck.com/src/images/hero/hero-image.svg"
            alt="NFT Cube"
            className="w-[80%] md:w-full max-w-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;