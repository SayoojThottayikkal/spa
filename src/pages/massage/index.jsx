import React from "react";
import massage1 from "../../assets/image/massage1.png";
import massage2 from "../../assets/image/massage2.png";
import massage3 from "../../assets/image/spot.png";
import massage4 from "../../assets/image/massage3.png";
import massage5 from "../../assets/image/massage4.png";
import massage6 from "../../assets/image/massage5.png";
const massage = [
  {
    image: massage1,
    heading: "Couple Massage",
    sub: "Duration: 60/90 Minutes",
    discription:
      "Couple massage allows two people to have a shared experience that can result in a closer bond. A couple may choose this time to chat and catch up with each other or simply relax and enjoy the experience together.",
  },
  {
    image: massage2,
    heading: "Stress Massage",
    sub: "Duration: 60/90 Minutes",
    discription:
      "Stress Massage focuses on realigning muscle and connective tissue using a method that is extremely beneficial for areas of the body suffering from tense and contracted muscles. A deep pressure massage performed slowly while observing the breath of the client results in emotional centering",
  },
  {
    image: massage3,
    heading: "Signature Massage",
    sub: "Duration: 90 Minutes",
    discription:
      "Signature Massage is probably one of our best spa treatments to ease tension and stress. This is full body massage therapy that includes face massage, foot reflexology, and head massage. Our experienced therapists will use aromatic oil and treat you with gentle, slow stroking movements which will result in an ultimate wellbeing experience. This massage includes Almond body scrub to exfoliates and hydrates your skin, smooth and soft.",
  },
  {
    image: massage4,
    heading: "Swedish Massage ",
    sub: "Duration: 60/90 Minutes",
    discription:
      "Swedish massage therapy goes beyond relaxation. Swedish massage is exceptionally beneficial for increasing the level of oxygen in the blood, decreasing muscle toxins,improving circulation and flexibility while easing tension a massage precisely for the purposes of rest and relaxation. Range of movement, ease minor muscle pain, and promote wellness and relaxation.",
  },
  {
    image: massage5,
    heading: "Balinese Massage ",
    sub: "Duration: 60/90 Minutes",
    discription:
      "BALINESE MASSAGE The traditional massage of the Indonesian island of Bali helps reduce stress, stimulates the flow of blood, relieves strained muscles, helps detoxify the body, nourishes and softens the skin.",
  },
  {
    image: massage6,
    heading: "Deep Tissue Massage ",
    sub: "Duration: 60/90 Minutes",
    discription:
      "Deep tissue massage is a massage technique that's mainly used to treat musculoskeletal issues, such as strains and sports injuries. It involves applying sustained pressure using slow, deep strokes to target the inner layers of your muscles and connective tissues. This helps to break up scar tissue that forms following an injury and reduce tension in muscle and tissue.",
  },
];
function Massage() {
  return (
    <div className="mx-auto px-20 py-10 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {massage.map((item) => (
          <div className="bg-white rounded-lg shadow overflow-hidden ">
            <img
              src={item.image}
              alt={item.heading}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 flex flex-col justify-between text-center ">
              <h1 className="text-2xl font-semibold">{item.heading}</h1>
              <p className="text-sm text-gray-500 mb-2">{item.sub}</p>
              <p className="text-sm text-gray-700 mb-4">{item.discription}</p>
              <button className="bg-pink-400 text-white px-8 py-6 rounded hover:bg-pink-600 font-bold">
                Enquire Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Massage;
