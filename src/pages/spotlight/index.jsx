import React from "react";
import spot from "../../assets/image/spot.png";

function Spolight() {
  return (
    <div
      className=" relative bg-cover bg-center bg-no-repeat h-[80vh] flex items-center bg
    
    "
    >
      <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-pink-300 to-transparent opacity-90 "></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-left max-w-xl">
          <h2 className="text-white text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Experience the soothing
            <br />
            pulse of relaxation
          </h2>
          <a
            href="#"
            className="inline-block bg-white text-brown-800 text-xl font-semibold px-6 py-3 rounded shadow hover:bg-yellow-100 transition"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Spolight;
