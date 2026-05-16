import React from "react";
import DestinationCard from "./DestinationCard";
import { Button } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Featured = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`);

  const destinations = await res.json();
  console.log(destinations);
  return (
    <div>
      <div className="flex items-center justify-between mx-8 mt-12">
        <div>
          <h1 className="text-4xl font-bold pb-2">Featured Destinations</h1>
          <p className=" text-black/60">
            Handpicked travel experience for the adventure seekers
          </p>
        </div>
        <div>
          <Link href={"/destination"}>
            <Button
              variant="outline"
              className={
                "border-cyan-300 text-cyan-500 rounded-none p-6 text-lg"
              }
            >
              All Destination <FaArrowRight />
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-8 mb-12 mt-6">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination._id}
            destination={destination}
          ></DestinationCard>
        ))}
      </div>
    </div>
  );
};

export default Featured;
