import DestinationCard from "@/components/DestinationCard";
import React from "react";

const DestinationPage = async () => {
  const res = await fetch(`${process.env.PUBLIC_NEXT_URL}/destination`);
  const destinations = await res.json();
  // console.log(destinations);
  return (
    <div>
      <h1 className="text-2xl font-bold mx-8 my-3">All Destination</h1>
      <div className="grid grid-cols-3 gap-10 mx-8 mb-12">
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

export default DestinationPage;
