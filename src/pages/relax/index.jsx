import React from "react";
import relax1 from "../../assets/image/relax1.png";
import relax2 from "../../assets/image/relax2.png";
import relax3 from "../../assets/image/relax3.png";
const data = [
  {
    image: relax1,
    heading: "Back Massage",
  },
  {
    image: relax2,
    heading: "Head and Shoulder",
  },
  {
    image: relax3,
    heading: "Foot Massage",
  },
];

function Relaxation() {
  return (
    <div class="bg-gradient-to-r from-yellow-600 to-amber-900 text-white">
      <div class="py-16 text-center">
        <h2 class="text-3xl font-semibold mb-12">Relaxation 30 Minutes</h2>
        <div class="flex flex-col md:flex-row justify-center items-center gap-12">
          {data.map((item) => (
            <div class="flex flex-col items-center">
              <div class="w-52 h-52 rounded-full overflow-hidden border-2 border-dotted border-white p-3">
                <img
                  src={item.image}
                  alt={item.heading}
                  class="w-full h-full object-cover"
                />
              </div>
              <h2 class="mt-4 text-lg font-semibold">{item.heading}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Relaxation;
