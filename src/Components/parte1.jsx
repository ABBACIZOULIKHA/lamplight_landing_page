import React from "react";
import Backround1 from "../images/backgroundWbSite.png";
import Logo from "../images/logo.png";
import Mobileweb from "../images/Mobileweb.png";
import { FaGooglePlay, FaApple } from "react-icons/fa";

function Parte1() {
  return (
    <div
      className="bg-cover bg-center py-10"
      style={{ backgroundImage: `url(${Backround1})` }}
    >
      <div className="flex flex-col md:flex-row text-white justify-around items-center px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col gap-10 md:gap-16 items-center md:items-start">
          {/* Logo */}
          <div className="flex flex-row items-center space-x-4">
            <img src={Logo} alt="Logo" className="w-16 h-16 md:w-20 md:h-20" />
            <div>
              <p className="text-lg md:text-xl font-bold">Lamplight</p>
              <p className="text-lg md:text-xl font-bold">Mobile Systems</p>
            </div>
          </div>

          {/* Main Text */}
          <div className="text-center md:text-left">
            <p className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Buy without
            </p>
            <p className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              lifting a finger.
            </p>
          </div>

          {/* Download Button */}
          <button className="bg-customCyan text-black text-lg md:text-2xl rounded-xl w-full md:w-2/3 py-3">
            Download the App
          </button>
        </div>

        {/* Main Content */}
        <div className="relative flex items-center justify-center mt-6 md:mt-0">
          {/* Image principale cachée sur les petits écrans */}
          <img
            src={Mobileweb}
            alt="Mobile Web"
            className="hidden md:block w-2/3"
          />

          {/* Boutons positionnés légèrement en dehors de l'image */}
          <div className="lg:absolute lg:bottom-4 lg:left-4 md:bottom-10 md:-left-12 flex flex-col gap-4 ">
            {/* Bouton Google Play */}
            <div className="flex flex-row items-center gap-2 py-2 px-3 rounded-md bg-white shadow-md hover:shadow-lg hover:cursor-pointer">
              <FaGooglePlay size={45} color="black" />
              <div className="flex flex-col text-black">
                <p className="text-sm md:text-md">Get it on the</p>
                <p className="font-bold text-lg md:text-xl">Google Play</p>
              </div>
            </div>

            {/* Bouton App Store */}
            <div className="flex flex-row items-center gap-2 py-2 px-3 rounded-md bg-white shadow-md hover:shadow-lg hover:cursor-pointer">
              <FaApple size={45} color="black" />
              <div className="flex flex-col text-black">
                <p className="text-sm md:text-md">Get it on the</p>
                <p className="font-bold text-lg md:text-xl">App Store</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Parte1;
