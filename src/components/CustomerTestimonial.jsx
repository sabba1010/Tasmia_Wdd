import React from 'react';
import face1 from '../assets/avatar1.png';
import face2 from '../assets/avatar2.png';
import brushImg from '../assets/brushes.png';

const CustomerTestimonial = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Customer Testimonial
        </h2>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 relative">
      
          <div className="bg-white rounded-md shadow-md p-6 sm:p-8 flex-1 max-w-full md:max-w-md z-10">
            <div className="flex items-center mb-4">
              <img src={face1} alt="avatar" className="w-10 h-10 rounded-full mr-3" />
              <div>
                <h4 className="font-semibold text-base">Afiya Jaman Sinigdha</h4>
                <p className="text-sm text-gray-500">Designer</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Explore our collection of carefully chosen products, expert advice, and inspiring stories designed
              to help you discover your full potential. Whether you're seeking inspiration, advice, or the perfect product to elevate your routine.
            </p>
          </div>

          <div className="bg-white rounded-md shadow-md p-6 sm:p-8 flex-1 max-w-full md:max-w-md z-20 relative mr-[-15%]">
            <div className="flex items-center mb-4">
              <img src={face2} alt="avatar" className="w-10 h-10 rounded-full mr-3" />
              <div>
                <h4 className="font-semibold text-base">Afiya Jaman Sinigdha</h4>
                <p className="text-sm text-gray-500">Designer</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Explore our collection of carefully chosen products, expert advice, and inspiring stories designed
              to help you discover your full potential. Whether you're seeking inspiration, advice, or the perfect product to elevate your routine.
            </p>
          </div>

          <div className="w-full lg:w-[40%] max-w-md mx-auto z-0">
            <img
              src={brushImg}
              alt="Makeup Brushes"
              className="w-full h-auto object-cover rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonial;
