"use client";
import { authClient } from "@/lib/auth-client";
import { DateField, Label } from "@heroui/react";
import React, { useState } from "react";
import { toast } from "react-toastify";

const BookingCard = ({ destination }) => {
  const [departureDate, setDepartureDate] = useState(null);
  const { data: session } = authClient.useSession();
  const user = session?.user;

  //   console.log(new Date(departureDate));
  const { price, duration, _id, country, destinationName, imageUrl } =
    destination;
  //   console.log(user, destination);

  const handleBooking = async () => {
    const bookingData = {
      userId: user?.id,
      userName: user?.name,
      userImage: user?.image,
      destinationId: _id,
      price,
      imageUrl,
      country,
      destinationName,
      departureDate: new Date(departureDate),
    };

    const { data: tokenData } = await authClient.token();
    // console.log(tokenData);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    toast.success("Booking Successfully");
    // console.log(data);
  };
  return (
    <div>
      <div className="bg-white shadow-lg rounded-2xl p-6 border h-fit">
        <h2 className="text-xl font-semibold mb-4">Trip Info</h2>

        <div className="space-y-3 text-sm text-gray-700">
          <p>
            <span className="font-medium">Price:</span> ${price}
          </p>
          <p>
            <span className="font-medium">Duration:</span> {duration} days
          </p>

          <DateField
            className="w-[256px]"
            name="date"
            onChange={setDepartureDate}
          >
            <Label>Departure Date</Label>
            <DateField.Group>
              <DateField.Input>
                {(segment) => <DateField.Segment segment={segment} />}
              </DateField.Input>
            </DateField.Group>
          </DateField>
        </div>

        <button
          className="mt-6 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer"
          onClick={handleBooking}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
