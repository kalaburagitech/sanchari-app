import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-4 text-center">
      <p className="text-sm">
        &copy; 2024 Sanchari App. All rights reserved. Designed with{" "}
        <span className="text-pink-400 font-semibold">love</span>.
      </p>
    </footer>
  );
};

export default Footer;
