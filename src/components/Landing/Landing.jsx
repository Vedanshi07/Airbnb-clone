import heroImage from "../../assets/images/landing.jpg";
import { motion } from "framer-motion";

function Landing() {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Find your next stay
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-gray-200">
            Discover unique homes and unforgettable experiences.
          </p>

          <button className="mt-10 bg-rose-500 hover:bg-rose-600 transition px-8 py-4 rounded-full text-lg font-semibold shadow-xl">
            Explore Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Landing;