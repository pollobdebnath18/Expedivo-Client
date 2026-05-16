import React from "react";
import { FaGlobeAmericas, FaShieldAlt, FaRocket } from "react-icons/fa";

const ChooseExpedivo = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-gray-300 pb-30">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Why Choose Expedivo</h1>
        <p className="text-gray-500 mt-3">
          We make your travel experience smooth, safe, and unforgettable
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition">
          <FaGlobeAmericas className="text-5xl text-cyan-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Global Destinations</h2>
          <p className="text-gray-500 text-sm">
            Explore handpicked destinations from all around the world with ease
            and comfort.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition">
          <FaShieldAlt className="text-5xl text-cyan-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Safe & Secure Booking</h2>
          <p className="text-gray-500 text-sm">
            Your bookings are fully protected with secure payment and verified
            listings.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition">
          <FaRocket className="text-5xl text-cyan-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Fast & Easy Experience</h2>
          <p className="text-gray-500 text-sm">
            Book your dream trip in just a few clicks with our fast and simple
            platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseExpedivo;
