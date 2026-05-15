import React from "react";
import { Home } from "lucide-react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 px-4 text-center">
      {/* Icon */}
      <div className="text-red-500 mb-4">
        <span className="text-6xl">404</span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Page Not Found
      </h1>

      {/* Description */}
      <p className="text-gray-600 mb-6 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
        Please go back to the homepage.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
      >
        <Home size={18} />
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
