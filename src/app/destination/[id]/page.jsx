import BookingCard from "@/components/BookingCard";
import DeleteDestination from "@/components/DeleteDestination";
import EditModal from "@/components/EditModal";
import { auth } from "@/lib/auth";
import { DateField, Label } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaEdit } from "react-icons/fa";
const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  // console.log(token);

  const res = await fetch(`${process.env.PUBLIC_NEXT_URL}/destination/${id}`, {
    headers: {
      authorization: `bearer ${token}`,
    },
  });

  const destination = await res.json();

  if (!destination) {
    return <div>Loading...</div>;
  }

  const { destinationName, category, country, imageUrl, description } =
    destination;

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
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={destinationName || "destination"}
            fill
            className="object-cover"
          />
        )}
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
        <BookingCard destination={destination}></BookingCard>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
