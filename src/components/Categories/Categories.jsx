import { useState } from "react";
import { categories } from "../../data/categories";

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("Camping");

  return (
    <section className="max-w-7xl mx-auto mt-10 px-6">
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex flex-col items-center gap-2 min-w-24 pb-2 transition
                ${
                  selectedCategory === category.name
                    ? "text-rose-500 border-b-2 border-rose-500"
                    : "text-gray-500 hover:text-black"
                }`}
            >
              <Icon className="text-2xl" />

              <span className="text-sm font-medium">
                {category.name}
              </span>
            </button>
          );
        })}
      </div>
      
    </section>
  );
}

export default Categories;