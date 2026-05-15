import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 md:px-16 py-14 mt-12">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* BRAND */}
          <div>
            <h1 className="text-4xl font-bold text-white mb-3">Expedivo</h1>
            <p className="text-sm leading-relaxed">
              Discover unforgettable destinations, plan your trips, and explore
              the world with ease.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white mb-4 font-semibold tracking-wide">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destination" className="hover:text-white">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/add-destination" className="hover:text-white">
                  Add Destination
                </Link>
              </li>
              <li>
                <Link href="/my-bookings" className="hover:text-white">
                  My Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-white mb-4 font-semibold tracking-wide">
              SUPPORT
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white mb-4 font-semibold tracking-wide">
              CONTACT
            </h3>
            <ul className="space-y-2 text-sm">
              <li>📞 +880 17X XXX XXXX</li>
              <li>✉️ support@expedivo.com</li>
              <li>📍 Sylhet, Bangladesh</li>
            </ul>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="mt-10 border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            Stay updated with latest travel deals ✈️
          </p>

          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full md:w-72 bg-gray-900 text-white outline-none rounded-l-md"
            />
            <button className="bg-white text-black px-5 py-2 rounded-r-md hover:bg-gray-200">
              Subscribe
            </button>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2026 Expedivo. All rights reserved.</p>

          <div className="flex gap-4 mt-4 md:mt-0 text-gray-300">
            <span className="hover:text-white cursor-pointer">Facebook</span>
            <span className="hover:text-white cursor-pointer">Twitter</span>
            <span className="hover:text-white cursor-pointer">Instagram</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
