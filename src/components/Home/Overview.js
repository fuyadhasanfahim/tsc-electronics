import React from "react";
import fanBannerImage from "../../assets/image/tsc-2.jpg";
import fanImage from "../../assets/image/tschf.png";
import lightBannerImage from "../../assets/image/tsc-1.jpg";
import lightImage from "../../assets/image/The Square Marketed Company (1).png";
import switchBannerImage from "../../assets/image/tsc-4.jpg";
import switchImage from "../../assets/image/introducing.png";
import { useNavigate } from "react-router-dom";

export default function Overview() {
  const navigate = useNavigate();

  const handleNavigate = (location) => {
    navigate(location);
  };

  return (
    <div className="mb-20">
      {/* Product -- Fan */}
      <div className="mb-6 sm:mb-0">
        <div onClick={() => handleNavigate("/products/fans")}>
          <img
            src={fanBannerImage}
            alt="banner"
            className="h-auto max-w-full hover:cursor-pointer"
          />
        </div>
        <div
          className="flex flex-col-reverse xl:flex-row gap-6 items-center hover:cursor-pointer"
          onClick={() => handleNavigate("/products/fans/TSC-High-speed-Fan")}
        >
          <img
            src={fanImage}
            alt="fan img"
            className="h-auto w-[750px] lg:max-w-full"
          />
          <div className="text-center p-4 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              TSC Fans
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-start">
              Elevate your comfort with the TSC high-speed fan, featuring
              advanced technology and a potent motor for rapid and efficient
              cooling in any space.
            </p>
          </div>
        </div>
      </div>

      {/* Product -- lights */}
      <div className="mb-6 sm:mb-0">
        <div onClick={() => handleNavigate("/products/lights")}>
          <img
            src={lightBannerImage}
            alt="banner"
            className="h-auto max-w-full hover:cursor-pointer"
          />
        </div>
        <div
          className="flex flex-col xl:flex-row gap-6 items-center hover:cursor-pointer"
          onClick={() =>
            handleNavigate(
              "/products/lights/TSC-Diamond-18W-Emergency-LED-Bulb"
            )
          }
        >
          <div className="text-center p-4 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              TSC High Quality lights
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-start">
              Illuminate your space with our TSC LED lights, designed to provide
              energy-efficient and vibrant lighting, to enhance the ambiance of
              your home or office.
            </p>
          </div>
          <img
            src={lightImage}
            alt="fan img"
            className="h-auto w-[750px] lg:max-w-full"
          />
        </div>
      </div>

      {/* Product -- switches */}
      <div className="mb-6 sm:mb-0">
        <div onClick={() => handleNavigate("/products/switches")}>
          <img
            src={switchBannerImage}
            alt="banner"
            className="h-auto max-w-full hover:cursor-pointer"
          />
        </div>
        <div
          className="flex flex-col-reverse xl:flex-row gap-6 items-center hover:cursor-pointer"
          onClick={() =>
            handleNavigate("/products/switches/TSC-Prime-Gang-Switch")
          }
        >
          <img
            src={switchImage}
            alt="fan img"
            className="h-auto w-[750px] lg:max-w-full"
          />
          <div className="text-center p-4 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              TSC Best Switches on Competition
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-start">
              Explore TSC's extensive range of electric accessories designed to
              enhance your modern living experience, providing both style and
              functionality for every corner of your home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
