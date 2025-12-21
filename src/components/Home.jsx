import React from "react";
import heroModel from "../assets/hero-model.png";

const Home = () => {
  return (
    <div className="md:px-20 lg:px-32 bg-gradient-to-r from-pink-50 to-white flex flex-col">
      <div className="lg:px-20 md:px-16 px-4 py-8 md:flex md:items-center md:justify-between">
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="w-3 h-3 bg-pink-300 rounded-full"></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
            <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            <p className="text-sm font-semibold text-gray-600 ml-2">
              New Spring 2025 Collections
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Fashion That <br />
            Feels As Good As <br />
            It <span className="text-pink-500">Looks</span>
          </h1>
          <p className="text-gray-600 max-w-md mx-auto md:mx-0">
            Streetwear-inspired and flavor-packed, every drop celebrates individuality,
            freedom, and effortless style—where comfort meets cultural edge.
          </p>
          <button className="bg-pink-500 text-white hover:bg-pink-600 px-6 py-2 rounded-full">
            Get Started →
          </button>
        </div>

        <div className="md:w-1/2 w-full mt-8 md:mt-0 flex flex-col md:flex-row items-start justify-center gap-0">
          <div className="w-full md:w-[65%]">
            <img
              src={heroModel}
              alt="Velvet Glow Model"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-[35%] mt-2 md:mt-0 ml-0 md:ml-2 bg-white/80 p-3 rounded-md shadow text-gray-600 text-sm md:text-xs lg:text-base leading-relaxed md:-ml-4">
            <p className="italic text-pink-600 text-xl font-bold leading-none mb-1">“</p>
            <p>
              I love that it’s made with gentle ingredients – no irritation at all,
              even on my sensitive skin.
            </p>
            <p className="mt-2 font-semibold">– Afa Jaman</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;