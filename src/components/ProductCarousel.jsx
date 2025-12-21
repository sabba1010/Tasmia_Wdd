import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductCarousel = () => {
  const slides = [
    {
      id: 1,
      image: "https://i.ibb.co/Z6Bggq6d/b6fb0c0462e1f22b815e094b39ef7baabad2b551.png",
      alt: "Product 1",
    },
    {
      id: 2,
      image: "https://i.ibb.co/6cn5KVht/04ab9fd72ae5d4845747ce4a2cae88cc6b88ceaf.png",
      alt: "Eau de Parfum",
      label: "Eau de Parfum",
      sublabel: "for women",
    },
  ];

  const [isSwapped, setIsSwapped] = useState(false);

  const toggleSwap = () => {
    setIsSwapped(!isSwapped);
  };

  const [firstSlide, secondSlide] = isSwapped
    ? [slides[1], slides[0]]
    : [slides[0], slides[1]];

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-[75%] mx-auto">
      <div className="flex flex-col sm:flex-row items-stretch justify-center gap-6">
        <div className="relative w-full sm:w-[27.5%] bg-white rounded-lg shadow-lg overflow-hidden">
         
         <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
            <button
              onClick={toggleSwap}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow"
            >
              <FaChevronLeft />
            </button>
          </div>
         
          <img
            src={firstSlide.image}
            alt={firstSlide.alt}
            className="w-full h-full object-cover max-h-[380px]"
          />
        </div>
        <div className="relative w-full sm:w-[27.5%] bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={secondSlide.image}
            alt={secondSlide.alt}
            className="w-full h-full object-cover max-h-[380px]"
          />

       
          
          <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
            <button
              onClick={toggleSwap}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow"
            >
              <FaChevronRight />
            </button>
          </div>
          {secondSlide.label && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white">
              <p className="text-sm font-medium">{secondSlide.label}</p>
              <p className="text-xs">{secondSlide.sublabel}</p>
            </div>
          )}
        </div>
        <div className="text-left w-full sm:w-[45%] bg-gray-800 text-white rounded-lg shadow-lg p-6 flex flex-col items-start justify-center max-h-[380px]">
  <p className="text-sm sm:text-base mb-2 text-[#FF9D65]">Ready to Shop</p>
  <h3 className="text-xl text-[] pr-4 md:text-3xl lg:text-4xl sm:text-2xl font-bold mb-4">
    Revolutionizing Your Skin's <br /> Journey to Radiance
  </h3>
  <button className="bg-white text-gray-800 px-4 py-2 rounded-2xl text-sm hover:bg-gray-200 transition duration-200">
  SHOP NOW →
</button>

</div>

      </div>
    </div>
  );
};

export default ProductCarousel;
