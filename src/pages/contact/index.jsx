import React from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import contact1 from "../../assets/image/contact1.png";
import contact2 from "../../assets/image/contact2.png";
function ContactFooter() {
  return (
    <div className="w-full">
      <div className="bg-white py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Contact</h2>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
          <input
            type="text"
            placeholder="Name"
            className="bg-gray-100 p-4 rounded w-72"
          />
          <input
            type="text"
            placeholder="Phone"
            className="bg-gray-100 p-4 rounded w-72"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-100 p-4 rounded w-72"
          />
          <button className="bg-pink-400 text-white px-8 py-4 rounded hover:bg-pink-500 w-72">
            SUBMIT
          </button>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-12 relative">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between items-start gap-8">
          <div className="w-40 ">
            <img src={contact1} alt="Anya's Wellness Logo" className="w-full" />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="flex items-center gap-2">
              <FaPhone className="text-pink-300 " /> +91 95268 13 000
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-pink-300" /> +91 95268 23 000
            </p>
            <p className="flex items-center gap-2 mt-2">
              <MdEmail className="text-pink-300" />{" "}
              <a href="mailto:narayandhakal2002@gmail.com">
                narayandhakal2002@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Find us</h3>
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-pink-300 mt-1" />
              Anya's wellness Spa,
              <br />
              CRA 201
              <br />
              CHAKKUNGAL road,
              <br />
              Palarivattom, Kochi 682025
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow us on</h3>
            <div className="flex gap-4 text-2xl">
              <a href="#">
                <FaFacebookF className="hover:text-pink-300" />
              </a>
              <a href="#">
                <FaInstagram className="hover:text-pink-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center border-t border-gray-700 pt-6 text-sm ">
          <p>Copyright © 2024 Anyas Wellness</p>
          <img
            src={contact2}
            alt="Accolades Logo"
            className="mx-auto mt-2 w-24"
          />
        </div>

        <div className="absolute  bottom-9 fixed  left-9 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
          <a href="">
            <FaPhone className="text-blue-900 text-xl" />
          </a>
        </div>
        <div className="absolute  fixed bottom-9 right-9 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
          <a href="">
            <FaWhatsapp className="text-green-500 text-2xl" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default ContactFooter;
