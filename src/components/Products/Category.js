import React from "react";
import fanImage from "../../assets/image/tschf.png";
import lightImage from "../../assets/image/The Square Marketed Company (1).png";
import switchImage from "../../assets/image/introducing.png";
import { useNavigate } from "react-router-dom";

const callous = [
  {
    id: "fans",
    name: "Fans",
    description: "Work from home accessories",
    imageSrc: fanImage,
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "products/fans",
  },
  {
    id: "lights",
    name: "Led Lights",
    description: "Journals and note-taking",
    imageSrc: lightImage,
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "products/lights",
  },
  {
    id: "switches",
    name: "Switches",
    description: "Daily commute essentials",
    imageSrc: switchImage,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "products/switches",
  },
];

export default function Category() {
  const navigate = useNavigate();
  const handleNavigate = (category) => {
    navigate(`/${category}`);
  };

  return (
    <div className="min-h-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callous.map((callout) => (
              <div
                key={callout.name}
                className="group relative cursor-pointer"
                onClick={() => handleNavigate(callout.href)}
              >
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-center text-gray-900">
                  <p>{callout.name}</p>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
