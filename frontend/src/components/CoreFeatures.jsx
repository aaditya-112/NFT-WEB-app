import React from "react";
import { FaWallet, FaThLarge, FaImage, FaTags } from "react-icons/fa";

const features = [
  {
    icon: <FaWallet className="text-3xl text-white" />,
    title: "Set Up Your Wallet",
    description: "Lorem ipsum dolor sit amet consectetur smit.",
    bg: "bg-red-300/20",
    iconBg: "bg-red-400",
  },
  {
    icon: <FaThLarge className="text-3xl text-white" />,
    title: "Make Your Collection",
    description: "Lorem ipsum dolor sit amet consectetur smit.",
    bg: "bg-yellow-300/20",
    iconBg: "bg-yellow-400",
  },
  {
    icon: <FaImage className="text-3xl text-white" />,
    title: "Add Your NFTs",
    description: "Lorem ipsum dolor sit amet consectetur smit.",
    bg: "bg-green-300/20",
    iconBg: "bg-green-400",
  },
  {
    icon: <FaTags className="text-3xl text-white" />,
    title: "List Them For Sale",
    description: "Lorem ipsum dolor sit amet consectetur smit.",
    bg: "bg-indigo-300/20",
    iconBg: "bg-indigo-500",
  },
];

const CoreFeatures = () => {
  return (
    <section className="bg-[#0e0d1b] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Core Features</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
          lacinia dolor, in pretium nunc. Morbi mollis arcu eget.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 ${feature.bg} backdrop-blur-lg border border-white/10 hover:shadow-lg transition`}
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full mb-5 ${feature.iconBg}`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
