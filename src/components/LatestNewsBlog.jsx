import React from "react";
import blogFace from "../assets/blog-face.png";
import blogHair from "../assets/blog-hair.png";
import blogProducts from "../assets/blog-products.png";

const LatestNewsBlog = () => {
  // For md/lg fixed width and height:
  const fixedWidth = "md:w-[424px]";
  const fixedHeight = "md:h-[347px]";

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-14">Latest News and Blog</h2>

      {/* First Grid */}
      <div className="grid grid-cols-1 gap-6 mb-12 justify-center md:grid-cols-2 lg:grid-cols-3">
        <div
          className={`flex flex-col justify-between gap-6 p-6 rounded-lg shadow-md bg-white mx-auto ${fixedWidth} ${fixedHeight} w-full`}
        >
          <div className="text-left">
            <h3 className="font-bold text-xl mb-2">Embrace the Art of Color Harmony</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Explore our collection of carefully chosen products, expert advice, and inspiring stories designed
              to help you discover your full potential. Whether you are seeking inspiration or the perfect product.
            </p>
          </div>
          <button className="bg-rose-500 text-white font-semibold text-base px-6 py-2 rounded w-fit hover:bg-rose-600">
            Read more
          </button>
        </div>

        <div
          className={`mx-auto rounded-lg shadow-md overflow-hidden ${fixedWidth} ${fixedHeight} w-full`}
        >
          <img
            src={blogFace}
            alt="Face cream application"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className={`flex flex-col justify-between gap-6 p-6 rounded-lg shadow-md bg-white mx-auto ${fixedWidth} ${fixedHeight} w-full`}
        >
          <div className="text-left">
            <h3 className="font-bold text-xl mb-2">Embrace the Art of Color Harmony</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Explore our collection of carefully chosen products, expert advice, and inspiring stories designed
              to help you discover your full potential. Whether you are seeking inspiration or the perfect product.
            </p>
          </div>
          <button className="text-rose-500 border border-rose-500 font-semibold text-base px-6 py-2 rounded w-fit hover:bg-rose-50">
            Read more
          </button>
        </div>
      </div>

      {/* Second Grid */}
      <div className="grid grid-cols-1 gap-6 justify-center lg:grid-cols-3">
        <div
          className={`mx-auto rounded-lg shadow-md overflow-hidden ${fixedWidth} ${fixedHeight} w-full`}
        >
          <img
            src={blogHair}
            alt="Hair wash"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className={`flex flex-col justify-between gap-6 p-6 rounded-lg shadow-md bg-white mx-auto ${fixedWidth} ${fixedHeight} w-full`}
        >
          <div className="text-left">
            <h3 className="font-bold text-xl mb-2">Embrace the Art of Color Harmony</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Explore our collection of carefully chosen products, expert advice, and inspiring stories designed
              to help you discover your full potential. Whether you are seeking inspiration or the perfect product.
            </p>
          </div>
          <button className="border border-black text-black font-semibold text-base px-6 py-2 rounded hover:bg-gray-100">
            Read more
          </button>
        </div>

        <div
          className={`mx-auto rounded-lg shadow-md overflow-hidden ${fixedWidth} ${fixedHeight} w-full`}
        >
          <img
            src={blogProducts}
            alt="Skincare Products"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default LatestNewsBlog;
