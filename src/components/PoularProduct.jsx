import React from "react";
import lipstick from "../assets/products/lipstick.png";
import lipbalm from "../assets/products/lipbalm.png";
import blush from "../assets/products/blush.png";
import eyeshadow from "../assets/products/eyeshadow.png";
import maskara from "../assets/products/maskara.png";
import foundation from "../assets/products/foundation.png";
import jel from "../assets/products/jel.png";
import cream from "../assets/products/cream.png";

const PopularProduct = () => {
  const products = [
    {
      name: "Lipstick",
      brand: "Better Wood and Home",
      price: "$120",
      image: lipstick,
      discount: "50%",
    },
    {
      name: "Lip Balm",
      brand: "Better Wood and Home",
      price: "$120",
      image: lipbalm,
    },
    {
      name: "Blush",
      brand: "Better Wood and Home",
      price: "$120",
      image: blush,
    },
    {
      name: "Eye Shadow",
      brand: "Better Wood and Home",
      price: "$120",
      image: eyeshadow,
      discount: "50%",
    },
    {
      name: "Maskara",
      brand: "Better Wood and Home",
      price: "$120",
      image: maskara,
      discount: "50%",
    },
    {
      name: "Foundation",
      brand: "Better Wood and Home",
      price: "$120",
      image: foundation,
    },
    {
      name: "Jel",
      brand: "Better Wood and Home",
      price: "$120",
      image: jel,
    },
    {
      name: "Cream",
      brand: "Better Wood and Home",
      price: "$120",
      image: cream,
    },
  ];

  return (
    <div className="py-14 px-4 max-w-[75%] mx-auto text-center">
      <h2 className="text-[20px] font-semibold mb-12">Our Popular Product</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-[#f5f5f5] p-4 text-left relative"
          >
            {product.discount && (
              <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-[2px]">
                {product.discount}
              </span>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[220px] object-contain mb-4"
            />
            <p className="text-[12px] text-gray-600 mb-[2px]">
              {product.brand}
            </p>
            <h3 className="text-[14px] font-semibold mb-[2px]">
              {product.name}
            </h3>
            <p className="text-red-500 text-[13px] font-semibold">
              Price: {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProduct;
