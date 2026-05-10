import Image from "next/image";
import Link from "next/link";
import { FaLocationDot, FaClock } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";

const DestinationCard = ({ destination }) => {
  const {
    _id,
    destinationName,
    category,
    country,
    imageUrl,
    price,
    description,
    duration,
  } = destination;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 border">
      {/* Image */}
      <div className="overflow-hidden">
        <Image
          src={imageUrl}
          alt={destinationName}
          width={500}
          height={300}
          className="w-full h-64 object-cover hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800">{destinationName}</h2>

        {/* Country */}
        <div className="flex items-center gap-2 text-gray-600">
          <FaLocationDot className="text-orange-500" />
          <span>{country}</span>
        </div>

        {/* Category + Duration */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
            <MdCategory />
            <span>{category}</span>
          </div>

          <div className="flex items-center gap-1 text-gray-500">
            <FaClock />
            <span>{duration} Days</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm line-clamp-3">{description}</p>

        {/* Price + Button */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-sm text-gray-500">Starting From</p>
            <h3 className="text-2xl font-bold text-orange-500">৳ {price}</h3>
          </div>

          <Link href={`/destination/${_id}`}>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl transition cursor-pointer">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
