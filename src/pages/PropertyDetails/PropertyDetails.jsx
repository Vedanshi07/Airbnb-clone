import { useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { properties } from "../../data/properties";

function PropertyDetails() {
  // Get the id from the URL
  const { id } = useParams();

  // Find the matching property
  const property = properties.find(
    (item) => item.id === Number(id)
  );

  if (!property) {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto py-10 text-center">
        <h1 className="text-3xl font-bold">Property Not Found</h1>
      </div>
    </MainLayout>
  );
}

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center text-center">
      <h1 className="text-5xl font-bold">
        {property.title}
      </h1>

      <img
        src={property.image}
        alt={property.title}
        className="mt-6 w-full max-w-lg rounded-xl shadow-lg"
      />

      <p className="mt-4 text-xl">
        📍 {property.location}
      </p>

      <p className="mt-2 text-lg">
        ₹{property.price} / night
      </p>
      </div>
    </MainLayout>
  );
}

export default PropertyDetails;