import DeleteDestination from "@/components/DeleteDestination";
import EditModal from "@/components/EditModal";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaEdit } from "react-icons/fa";
const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destination/${id}`);

  const destination = await res.json();

  const {
    destinationName,
    category,
    country,
    imageUrl,
    price,
    description,
    duration,
    departureDate,
  } = destination;

  return (
    <div className="max-w-7xl mx-auto px-4 pt-3">
      <div className="flex justify-between items-center py-2">
        {/* Back Button */}
        <Link href="/destination">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-gray-100 transition">
            <FaArrowLeft />
            Back to Destination
          </button>
        </Link>

        {/* Edit Modal Button */}
        <div className="flex gap-2 items-center">
          <EditModal destination={destination} />
          <DeleteDestination destination={destination}></DeleteDestination>
        </div>
      </div>
      {/* Image Section */}
      <div className="relative w-full h-[200px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          className="object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="mt-8 grid md:grid-cols-3 gap-8">
        {/* Left Info */}
        <div className="md:col-span-2 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">{destinationName}</h1>

          <p className="text-gray-600 leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-3 mt-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">
              {category}
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm">
              {country}
            </span>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border h-fit">
          <h2 className="text-xl font-semibold mb-4">Trip Info</h2>

          <div className="space-y-3 text-sm text-gray-700">
            <p>
              <span className="font-medium">Price:</span> ${price}
            </p>
            <p>
              <span className="font-medium">Duration:</span> {duration} days
            </p>
            <p>
              <span className="font-medium">Departure:</span> {departureDate}
            </p>
          </div>

          <button className="mt-6 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
