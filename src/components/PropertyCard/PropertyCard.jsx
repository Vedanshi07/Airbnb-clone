import { FaHeart, FaStar } from "react-icons/fa";

function PropertyCard({ property }) {
  return (
    <div className="group cursor-pointer">

      {/* Image */}

      <div className="relative overflow-hidden rounded-2xl">

        <img
          src={property.image}
          alt={property.title}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Wishlist */}

        <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow">

          <FaHeart className="text-gray-400 hover:text-red-500 transition" />

        </button>

      </div>

      {/* Details */}

      <div className="mt-3">

        <div className="flex justify-between">

          <h3 className="font-semibold">
            {property.location}
          </h3>

          <div className="flex items-center gap-1">

            <FaStar className="text-yellow-500" />

            <span>{property.rating}</span>

          </div>

        </div>

        <p className="text-gray-500">
          {property.title}
        </p>

        <p className="mt-2 font-semibold">
          ₹{property.price}
          <span className="font-normal">
            {" "}
            / night
          </span>
        </p>

      </div>

    </div>
  );
}

export default PropertyCard;