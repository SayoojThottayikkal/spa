import React from "react";
import img from "../../assets/image/scrub.png";

function Scrub() {
  return (
    <div class="bg-white text-gray-900">
      <div class="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-12">
        <div class="">
          <img
            src={img}
            alt="Almond Body Scrub"
            class="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>

        <div class="max-w-xl">
          <h2 class="text-3xl font-bold text-[#5a1f0f] mb-4">
            Almond body scrub
          </h2>
          <p class="text-xl font-semibold mb-2">Duration: 30 Minutes</p>
          <p class="text-lg mb-6 leading-relaxed text-gray-800">
            Almond has healing and repairing properties which helps skin recover
            from damage. Almond deep cleanses skin to encourage flawless
            acne-free radiant skin. Due to these amazing properties and skin
            benefits, almond scrub makes an excellent body scrub agent.
          </p>
          <button class="bg-pink-300 hover:bg-pink-600 text-white font-semibold text-xl py-3 px-8 rounded">
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Scrub;
