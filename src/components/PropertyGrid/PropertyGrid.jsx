import PropertyCard from "../PropertyCard/PropertyCard";
import { properties } from "../../data/properties";

function PropertyGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {properties.map((property) => (

          <PropertyCard
            key={property.id}
            property={property}
          />

        ))}

      </div>

    </section>
  );
}

export default PropertyGrid;