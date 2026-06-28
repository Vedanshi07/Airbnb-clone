import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  const [searchData, setSearchData] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setSearchData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSearch() {
    console.log(searchData);
  }

  return (
    <div className="max-w-6xl mx-auto -mt-16 relative z-20 px-4">
      <div className="bg-white rounded-full shadow-xl p-3 grid grid-cols-1 md:grid-cols-5 gap-2">

        {/* Location */}
        <div className="flex flex-col px-4 py-2 rounded-full hover:bg-gray-100">
          <label className="text-sm font-semibold">
            Where
          </label>

          <input
            type="text"
            name="location"
            placeholder="Search destinations"
            value={searchData.location}
            onChange={handleChange}
            className="outline-none text-gray-600"
          />
        </div>

        {/* Check In */}

        <div className="flex flex-col px-4 py-2 rounded-full hover:bg-gray-100">
          <label className="text-sm font-semibold">
            Check In
          </label>

          <input
            type="date"
            name="checkIn"
            value={searchData.checkIn}
            onChange={handleChange}
            className="outline-none"
          />
        </div>

        {/* Check Out */}

        <div className="flex flex-col px-4 py-2 rounded-full hover:bg-gray-100">
          <label className="text-sm font-semibold">
            Check Out
          </label>

          <input
            type="date"
            name="checkOut"
            value={searchData.checkOut}
            onChange={handleChange}
            className="outline-none"
          />
        </div>

        {/* Guests */}

        <div className="flex flex-col px-4 py-2 rounded-full hover:bg-gray-100">
          <label className="text-sm font-semibold">
            Guests
          </label>

          <input
            type="number"
            name="guests"
            placeholder="Add guests"
            value={searchData.guests}
            onChange={handleChange}
            className="outline-none"
          />
        </div>

        {/* Button */}

        <button
          onClick={handleSearch}
          className="bg-rose-500 hover:bg-rose-600 text-white rounded-full flex items-center justify-center gap-2 px-6 py-4 transition"
        >
          <FaSearch />
          Search
        </button>

      </div>
    </div>
  );
}

export default SearchBar;