function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">

        <p className="text-gray-500">
          © 2026 Airbnb Clone. All rights reserved.
        </p>

        <div className="flex gap-6 mt-4 md:mt-0">

          <button className="hover:text-rose-500">
            Privacy
          </button>

          <button className="hover:text-rose-500">
            Terms
          </button>

          <button className="hover:text-rose-500">
            Support
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;