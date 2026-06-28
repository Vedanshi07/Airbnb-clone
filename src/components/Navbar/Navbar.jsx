import {
  FaAirbnb,
  FaGlobe,
  FaBars,
  FaUserCircle,
  FaSearch,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Left */}
        <div className="flex items-center gap-2 cursor-pointer">
          <FaAirbnb className="text-4xl text-rose-500" />
          <h1 className="text-2xl font-bold text-rose-500">
            airbnb
          </h1>
        </div>

        {/* Middle */}
        <div className="hidden md:flex items-center bg-white border rounded-full shadow-md px-2 py-2 cursor-pointer hover:shadow-lg transition">

          <button className="px-4 font-medium">
            Anywhere
          </button>

          <span className="text-gray-300">|</span>

          <button className="px-4 font-medium">
            Any Week
          </button>

          <span className="text-gray-300">|</span>

          <button className="px-4 text-gray-500">
            Add Guests
          </button>

          <button className="bg-rose-500 p-3 rounded-full text-white ml-2">
            <FaSearch />
          </button>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          <button className="hidden md:block font-medium hover:bg-gray-100 px-4 py-2 rounded-full transition">
            Become a host
          </button>

          <button className="hover:bg-gray-100 p-3 rounded-full transition">
            <FaGlobe />
          </button>

          <button className="flex items-center gap-3 border rounded-full px-3 py-2 shadow hover:shadow-md transition">

            <FaBars />

            <FaUserCircle className="text-2xl text-gray-500" />

          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;