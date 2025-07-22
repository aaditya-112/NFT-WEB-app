import React, { useEffect, useState } from "react";
import { Heart, Clock } from "lucide-react";
import axios from "axios";

// const cards = [
//   {
//     id: 1,
//     image:
//       "https://nft-tailwind.preview.uideck.com/src/images/picks/image-01.svg",
//     likes: "4.6K",
//     title: "3d abstract illustration",
//     creator: "@Devid_Miller",
//     creatorImg:
//       "https://nft-tailwind.preview.uideck.com/src/images/picks/creator-01.png",
//     bid: "5.49 ETH",
//   },
//   {
//     id: 2,
//     image:
//       "https://nft-tailwind.preview.uideck.com/src/images/picks/image-01.svg",
//     likes: "1.6K",
//     title: "3d abstract illustration",
//     creator: "@Wilium_de",
//     creatorImg:
//       "https://nft-tailwind.preview.uideck.com/src/images/picks/creator-01.png",
//     bid: "2.85 ETH",
//   },
//   {
//     id: 3,
//     image:
//       "https://nft-tailwind.preview.uideck.com/src/images/picks/image-01.svg",
//     likes: "4.6K",
//     title: "3d abstract illustration",
//     creator: "@Nicolo_Tesla",
//     creatorImg:
//       "https://nft-tailwind.preview.uideck.com/src/images/picks/creator-01.png",
//     bid: "7.82 ETH",
//   },
//   {
//     id: 4,
//     image:
//       "https://nft-tailwind.preview.uideck.com/src/images/picks/image-01.svg",
//     likes: "4.6K",
//     title: "3d abstract illustration",
//     creator: "@Liza_Aurora",
//     creatorImg:
//       "https://nft-tailwind.preview.uideck.com/src/images/picks/creator-01.png",
//     bid: "0.25 ETH",
//   },
// ];

const TodaysPicks = () => {
  const [allNft, setallNft] = useState([]);

  useEffect(() => {
    const getNft = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/nft/getAllNft", {
          withCredentials: true,
        });
        // console.log(res.data.AllNft);
        setallNft(res.data.AllNft);
      } catch (error) {
        console.log(error);
      }
    };
    getNft();
  },[]);

  return (
    <section className="bg-[#0F0F25] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Today's Picks
          </h2>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md font-medium">
            View All
          </button>
        </div>

        {/* Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {allNft.map((nft) => (
            <div
              key={nft.id}
              className="bg-[#1E1E35] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              {/* Image with likes */}
              <div className="relative">
                <img
                  src={nft.image}
                  alt={nft.title}
                  className="w-full object-cover rounded-t-xl"
                />
                <div className="absolute top-3 right-3 bg-white/90 text-black px-3 py-1 text-sm rounded-full flex items-center gap-1">
                  <Heart
                    size={16}
                    className="text-red-500"
                    fill="currentColor"
                  />
                  4.5
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                  {nft.title}
                </h3>

                <div className="flex items-center justify-between mt-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <img
                      src="creator-01.png"
                      alt="creator"
                      className="w-6 h-6 rounded-full"
                    />
                    <div>
                      <p className="text-white">@Devid_Mil</p>
                      <p className="text-xs">creator</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white">{nft.price}</p>
                    <p className="text-xs">Current Bit</p>
                  </div>
                </div>

                <hr className="my-4 border-gray-700" />

                {/* Actions */}
                <div className="flex justify-between">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                    Place Bid
                  </button>
                  <button className="text-white flex items-center gap-1 text-sm font-medium hover:text-indigo-400 transition">
                    <Clock size={16} />
                    View History
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TodaysPicks;
