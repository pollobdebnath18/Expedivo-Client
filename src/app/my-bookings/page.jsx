import { BookingCancelAlert } from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  // console.log(token);

  const res = await fetch(
    `${process.env.PUBLIC_NEXT_URL}/booking/${user?.id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );

  const bookings = await res.json();

  return (
    <div className="max-w-5xl mx-auto my-10 space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-center">My Booking</h2>
        <p className="text-center">
          My all destination with price and all information
        </p>
      </div>
      {bookings.map((booking) => (
        <div
          key={booking._id}
          className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden border"
        >
          {/* Left Side Image */}
          <div className="md:w-1/3">
            <Image
              src={booking.imageUrl}
              alt={booking.destinationName}
              width={400}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side Info */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">{booking.destinationName}</h2>

              <p className="text-gray-600">
                <span className="font-semibold">Country:</span>{" "}
                {booking.country}
              </p>

              <p className="text-gray-600">
                <span className="font-semibold">Departure:</span>{" "}
                {new Date(booking.departureDate).toLocaleDateString()}
              </p>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6">
              {/* Price */}
              <h3 className="text-2xl font-bold text-green-600">
                ${booking.price}
              </h3>

              {/* Buttons */}
              <div className="flex gap-3">
                <BookingCancelAlert
                  bookingId={booking._id}
                ></BookingCancelAlert>

                <button className="bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-lg transition">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBookingsPage;
