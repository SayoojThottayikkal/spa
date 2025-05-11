import React from "react";
import glass from "../../assets/image/glass.png";

function Wellness() {
  return (
    <div className="bg-white py-8 px-6 md:px-20  ">
      <div className="text-center w-5/6 mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-brown-800 mb-4">
          Anya’s Wellness Spa
        </h2>
        <p className="text-gray-700 mb-2 w-full">
          The Spa is an entirely novel concept. Our Therapies harness the
          healing powers of nature augmented with cutting edge to open a way to
          greater well-being. Using the holistic and gently persuasive power of
          forest essence oil and plants to heal the body and mind
        </p>
        <p className="text-gray-600">
          The benefits are remarkable. Our approach to health, beauty and
          wellbeing
        </p>
      </div>

      <div className="flex flex-col  lg:flex-row  gap-10  mx-auto ">
        <div className="w-1/2">
          <img
            src={glass}
            alt="Massage oils"
            className="rounded-md shadow-md w-full"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-yellow-100 p-6 rounded">
            <p className="text-gray-800">
              Forest Essentials massage oils have a base of pure cold pressed
              unrefined Sesame Oil, which has been naturally processed so that
              they are nutrient rich. These oils are blended with pure essential
              oils, which add their own special properties. Massage tones,
              relaxes and nourishes skin and muscle tissue.
            </p>
          </div>

          <div className="bg-yellow-100 p-6 rounded">
            <p className="text-gray-800">
              Aroma oil, is a common type of essential oil used in aromatherapy
              that can offer a variety of health benefits, including helping
              relieve chronic stress and anxiety, reducing pain and
              inflammation, and boosting immunity
            </p>
          </div>

          <div className="bg-yellow-100 p-6 rounded">
            <p className="text-gray-800">
              facial, The benefits of oxygen facial includes healing issues such
              as acne, wrinkles, and blemishes and it makes your skin
              younger-looking and glowing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wellness;
