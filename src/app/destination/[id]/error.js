"use client";

import Link from "next/link";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      {/* Icon */}
      <div className="text-6xl mb-4">⚠️</div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-red-600 mb-2">
        Something went wrong
      </h1>

      {/* Message */}
      <p className="text-gray-600 max-w-md mb-6">
        {error?.message || "An unexpected error occurred. Please try again."}
      </p>

      {/* Buttons */}
      <div className="flex gap-3">
        {/* Retry */}
        <button
          onClick={() => reset?.()}
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Try Again
        </button>

        {/* Home */}
        <Link
          href="/"
          className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
