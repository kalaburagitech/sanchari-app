// src/app/page.tsx

import React from "react";

const Home: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 lg:py-32" id="home">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-800 mb-6">
          Welcome to Sanchari App
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-6">
          A platform that makes your life easier with a variety of services and
          features.
        </p>
        <a
          href="#about"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Home;
