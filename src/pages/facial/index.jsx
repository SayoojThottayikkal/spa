import React from "react";
import facial from "../../assets/image/facial.png";
function Facial() {
  return (
    <div class="bg-gray-50 text-gray-800 p-10">
      <div class="text-center mt-6 mb-4">
        <h2 class="text-xl font-medium">Facials</h2>
      </div>

      <div class="max-w-7xl mx-auto px-4">
        <img
          src={facial}
          alt="Facials"
          class="w-full h-auto rounded-md shadow"
        />
      </div>

      <div class="max-w-7xl mx-auto px-4 mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        <div>
          <h3 class="text-lg font-semibold">Anti-ageing</h3>
          <p class="text-sm font-medium mt-1 mb-2">Duration: 60 Minutes</p>
          <p class="text-sm mb-4 px-4 text-gray-600">
            Anti Ageing Cream SPF 60 … Get ultimate youth glow with this light
            weight formula of Ageloc SPF 60 helps in protecting dull matured
            skin while nourishing it. 2 in 1 formula of anti ageing and skin
            lightening.
          </p>
          <button class="bg-pink-400 text-white  hover:bg-pink-500 text-sm font-semibold py-2 px-6 rounded">
            Enquire Now
          </button>
        </div>

        <div class="md:border-l md:border-pink-500 md:pl-6">
          <h3 class="text-lg font-semibold">Skin Brightening</h3>
          <p class="text-sm font-medium mt-1 mb-2">Duration: 60 Minutes</p>
          <p class="text-sm mb-4 px-4 text-gray-600">
            Almond has healing and repairing properties which helps skin recover
            from damage. Almond deep cleanses skin to encourage flawless acne
            free radiant skin. Due to these amazing properties and skin benefits
            almond scrub makes an excellent div scrub agent.
          </p>
          <button class="bg-pink-400 text-white  hover:bg-pink-500 text-sm font-semibold py-2 px-6 rounded">
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Facial;
