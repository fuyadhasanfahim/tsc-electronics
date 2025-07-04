import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

// Fan Images
import fanImage1 from "../../assets/fans/TSC Ceiling Net Fan Black 16.png";
import fanImage2 from "../../assets/fans/TSC Ceiling Net Fan Black.png";
import fanImage3 from "../../assets/fans/TSC Highspeed Fan.png";
import fanImage4 from "../../assets/fans/TSC Rapid-XR.png";
import fanImage5 from "../../assets/fans/TSC Rechargeable Table Fan.jpg";
import fanImage6 from "../../assets/fans/TSC Stand Fan.png";
import fanImage7 from "../../assets/fans/TSC Student Edition Z1 Fan.png";
import fanImage8 from "../../assets/fans/TSC Student Edition Z2 Fan.png";
import fanImage9 from "../../assets/fans/TSC Table Fan 12.png";
import fanImage10 from "../../assets/fans/TSC Table Fan 16.png";
import fanImage11 from "../../assets/fans/TSC ZR Table Fan.png";

// Light Images
import lightImage1 from "../../assets/lights/TSC Diamond 18W Emergency LED Bulb.jpg";
import lightImage2 from "../../assets/lights/TSC Super 10W AC LED Bulb.jpg";
import lightImage3 from "../../assets/lights/TSC Super 15W AC LED Bulb.jpg";
import lightImage4 from "../../assets/lights/TSC Super 20W AC LED Bulb.jpg";
import lightImage5 from "../../assets/lights/TSC Super 50W 3 Blade AC LED Bulb.jpg";
import lightImage6 from "../../assets/lights/TSC Super 5W AC LED Bulb.jpg";
import lightImage7 from "../../assets/lights/TSC Super 60W 4 Blade AC LED Bulb.jpg";
import lightImage8 from "../../assets/lights/TSC Super 7W AC LED Bulb.jpg";

// Appliances Images
import appliancesImage1 from "../../assets/switch/TSC 2 pin Plug.jpg";
import appliancesImage2 from "../../assets/switch/TSC Battan Holder.jpg";
import appliancesImage3 from "../../assets/switch/TSC Combine Backpart.jpg";
import appliancesImage4 from "../../assets/switch/TSC Combine Board.jpg";
import appliancesImage5 from "../../assets/switch/TSC Fuse.jpg";
import appliancesImage6 from "../../assets/switch/TSC Indicator.jpg";
import appliancesImage7 from "../../assets/switch/TSC Pendent holder.jpg";
import appliancesImage8 from "../../assets/switch/TSC Prime Gang Switch light.png";
import appliancesImage9 from "../../assets/switch/TSC Prime Gang Switch.png";
import appliancesImage10 from "../../assets/switch/TSC Socket.jpg";
import appliancesImage11 from "../../assets/switch/TSC Switch.jpg";

const productsList = {
  fans: [
    {
      id: 1,
      name: "TSC Ceiling Net Fan Black 16",
      href: "TSC-Ceiling-Net-Fan-Black-16",
      price: "BDT 835",
      imageSrc: fanImage1,
      imageAlt: "TSC-Ceiling-Net-Fan-Black-16",
      features: [
        "Fashionable Design",
        "High Speed & High Air Delivery",
        "Best quality coating powder is used for better finishing",
        "Nickel Chrome coating is used to prevent rusting",
      ],
    },
    {
      id: 2,
      name: "TSC Ceiling Net Fan Black 20",
      href: "TSC-Ceiling-Net-Fan-Black-20",
      price: "BDT 1015",
      imageSrc: fanImage2,
      imageAlt: "TSC Ceiling Net Fan Black",
      features: [
        "Fashionable Design",
        "High Speed & High Air Delivery",
        "Best quality coating powder is used for better finishing",
        "Nickel Chrome coating is used to prevent rusting",
      ],
    },
    {
      id: 3,
      name: "TSC High speed Fan",
      href: "TSC-High-speed-Fan",
      price: "BDT 1050",
      imageSrc: fanImage3,
      imageAlt: "TSC High speed Fan",
      features: [
        "Fashionable design",
        "Strong structure",
        "High Glossy Finish",
        "High Speed & High Air Delivery",
        "Adjustable Guard Position",
      ],
    },
    {
      id: 4,
      name: "TSC Rapid-XR",
      href: "TSC-Rapid-XR",
      price: "BDT 1230",
      imageSrc: fanImage4,
      imageAlt: "TSC Rapid-XR",
      features: [
        "Fashionable design",
        "Strong Structure",
        "High Speed & High Air Delivery",
      ],
    },
    {
      id: 5,
      name: "TSC Rechargeable Table Fan",
      href: "TSC-Rechargeable-Table-Fan",
      price: "BDT 4500",
      imageSrc: fanImage5,
      imageAlt: "TSC Rechargeable Table Fan",
      features: [
        "Rechargeable Table Fan (12”)",
        "Long run time battery with overcharge and over-discharge protection system",
        "Without remote control",
        "High/Low/Natural speed selection",
      ],
    },
    {
      id: 6,
      name: "TSC Stand Fan",
      href: "TSC-Stand-Fan",
      price: "BDT 6990",
      imageSrc: fanImage6,
      imageAlt: "TSC Stand Fan",
      features: [
        "Precision Sealed Bearing",
        "Aero Dynamically Designed Blades for   high Velocity Air",
        "Spring Loaded Height Adjustment",
        "99.9% Pure Copper Wire",
      ],
    },
    {
      id: 7,
      name: "TSC Student Edition Z1 Fan",
      href: "TSC-Student-Edition-Z1-Fan",
      price: "BDT 1300",
      imageSrc: fanImage7,
      imageAlt: "TSC Student Edition Z1 Fan",
      features: [
        "High Glossy Finish.",
        "High Speed & High Air Delivery.",
        "Adjustable Guard Position.",
        "Ideal for personal & official use.",
      ],
    },
    {
      id: 8,
      name: "TSC Student Edition Z2 Fan",
      href: "TSC-Student-Edition-Z2-Fan",
      price: "BDT 1490",
      imageSrc: fanImage8,
      imageAlt: "TSC Student Edition Z2 Fan",
      features: [
        "High Glossy Finish.",
        "High Speed & High Air Delivery.",
        "Adjustable Guard Position.",
        "Ideal for personal & official use.",
      ],
    },
    {
      id: 9,
      name: "TSC Table Fan 12",
      href: "TSC-Table-Fan-12",
      price: "BDT 2490",
      imageSrc: fanImage9,
      imageAlt: "TSC Table Fan 12",
      features: [
        "AC High Speed motor",
        "With 3 Speed Regulator Control system",
        "3 Speed(Low/Medium/High) selection",
        "Safety Thermal protection for AC Motor",
      ],
    },
    {
      id: 10,
      name: "TSC Table Fan 16",
      href: "TSC-Table-Fan-16",
      price: "BDT 2390",
      imageSrc: fanImage10,
      imageAlt: "TSC Table Fan 16",
      features: [
        "AC High Speed motor",
        "With 3 Speed Regulator Control system",
        "3 Speed(Low/Medium/High) selection",
        "Safety Thermal protection for AC Motor",
      ],
    },
    {
      id: 11,
      name: "TSC ZR Table Fan",
      href: "TSC-ZR-Table-Fan",
      price: "BDT 2590",
      imageSrc: fanImage11,
      imageAlt: "TSC ZR Table Fan",
      features: [
        "Fashionable Design",
        "AC High Speed motor",
        "With 3 Speed Regulator Control system",
        "3 Speed(Low/Medium/High) selection",
        "Safety Thermal protection for AC Motor",
      ],
    },
  ],
  lights: [
    {
      id: 1,
      name: "TSC Diamond 18W Emergency LED Bulb",
      href: "TSC-Diamond-18W-Emergency-LED-Bulb",
      price: "BDT 690",
      imageSrc: lightImage1,
      imageAlt: "TSC Diamond 18W Emergency LED Bulb",
      features: [
        "Energy efficient & energy saves up to 90% in respect of nominal lightings.",
        "High lumen output (Efficacy), high color rendering index (CRI) & CCT.",
        "Less operation costs rapidly feedbacks with more savings and short payback.",
        "Green technology features eco-friendly future generation green planet.",
        "No toxic and health hazardous material like Mercury (Hg), Lead (Pb) etc. content ultimately environment friendly.",
        "Decent light quality with width light beam angle.",
        "Compact size with smart design.",
        "Instant start, no flickering effect",
      ],
    },
    {
      id: 2,
      name: "TSC Super 10W AC LED Bulb",
      href: "TSC-Super-10W-AC-LED-Bulb",
      price: "BDT 245",
      imageSrc: lightImage2,
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
      features: [
        "Energy efficient & energy saves up to 90% in respect of nominal lightings.",
        "High lumen output (Efficacy), high color rendering index (CRI) & CCT.",
        "Less operation costs rapidly feedbacks with more savings and short payback.",
        "Green technology features eco-friendly future generation green planet.",
        "No toxic and health hazardous material like Mercury (Hg), Lead (Pb) etc. content ultimately environment friendly.",
        "Decent light quality with width light beam angle.",
        "Compact size with smart design.",
        "Instant start, no flickering effect",
      ],
    },
    {
      id: 3,
      name: "TSC Super 15W AC LED Bulb",
      href: "TSC-super-15W-AC-LED-Bulb",
      price: "BDT 290",
      imageSrc: lightImage3,
      imageAlt: "TSC Super 15W AC LED Bulb",
      features: [
        "Energy efficient & energy saves up to 90% in respect of nominal lightings.",
        "High lumen output (Efficacy), high color rendering index (CRI) & CCT.",
        "Less operation costs rapidly feedbacks with more savings and short payback.",
        "Green technology features eco-friendly future generation green planet.",
        "No toxic and health hazardous material like Mercury (Hg), Lead (Pb) etc. content ultimately environment friendly.",
        "Decent light quality with width light beam angle.",
        "Compact size with smart design.",
        "Instant start, no flickering effect",
      ],
    },
    {
      id: 4,
      name: "TSC Super 20W AC LED Bulb",
      href: "TSC-Super-20W-AC-LED-Bulb",
      price: "BDT 320",
      imageSrc: lightImage4,
      imageAlt: "TSC Super 20W AC LED Bulb",
      features: [
        "Energy efficient & energy saves up to 90% in respect of nominal lightings.",
        "High lumen output (Efficacy), high color rendering index (CRI) & CCT.",
        "Less operation costs rapidly feedbacks with more savings and short payback.",
        "Green technology features eco-friendly future generation green planet.",
        "No toxic and health hazardous material like Mercury (Hg), Lead (Pb) etc. content ultimately environment friendly.",
        "Decent light quality with width light beam angle.",
        "Compact size with smart design.",
        "Instant start, no flickering effect",
      ],
    },
    {
      id: 5,
      name: "TSC Super 50W 3 Blade AC LED Bulb",
      href: "TSC-Super-50W-3-Blade-AC-LED-Bulb",
      price: "BDT 550",
      imageSrc: lightImage5,
      imageAlt: "TSC Super 50W 3 Blade AC LED Bulb",
      features: [
        "Energy efficient & energy saves up to 90% in respect of nominal lightings.",
        "High lumen output (Efficacy), high color rendering index (CRI) & CCT.",
        "Less operation costs rapidly feedbacks with more savings and short payback.",
        "Green technology features eco-friendly future generation green planet.",
        "No toxic and health hazardous material like Mercury (Hg), Lead (Pb) etc. content ultimately environment friendly.",
        "Decent light quality with width light beam angle.",
        "Compact size with smart design.",
        "Instant start, no flickering effect",
      ],
    },
    {
      id: 6,
      name: "TSC Super 5W AC LED Bulb",
      href: "TSC-Super-5W-AC-LED-Bulb",
      price: "BDT 160",
      imageSrc: lightImage6,
      imageAlt: "TSC Super 5W AC LED Bulb",
      features: [
        "Energy efficient & energy saves up to 90% in respect of nominal lightings.",
        "High lumen output (Efficacy), high color rendering index (CRI) & CCT.",
        "Less operation costs rapidly feedbacks with more savings and short payback.",
        "Green technology features eco-friendly future generation green planet.",
        "No toxic and health hazardous material like Mercury (Hg), Lead (Pb) etc. content ultimately environment friendly.",
        "Decent light quality with width light beam angle.",
        "Compact size with smart design.",
        "Instant start, no flickering effect",
      ],
    },
    {
      id: 7,
      name: "TSC Super 60W 4 Blade AC LED Bulb",
      href: "TSC-Super-60W-4-Blade-AC-LED-Bulb",
      price: "BDT 750",
      imageSrc: lightImage7,
      imageAlt: "TSC Super 5W AC LED Bulb",
      features: [
        "Energy efficient & energy saves up to 90% in respect of nominal lightings.",
        "High lumen output (Efficacy), high color rendering index (CRI) & CCT.",
        "Less operation costs rapidly feedbacks with more savings and short payback.",
        "Green technology features eco-friendly future generation green planet.",
        "No toxic and health hazardous material like Mercury (Hg), Lead (Pb) etc. content ultimately environment friendly.",
        "Decent light quality with width light beam angle.",
        "Compact size with smart design.",
        "Instant start, no flickering effect",
      ],
    },
    {
      id: 8,
      name: "TSC Super 7W AC LED Bulb",
      href: "TSC-Super-7W-AC-LED-Bulb",
      price: "BDT 220",
      imageSrc: lightImage8,
      imageAlt: "TSC Super 7W AC LED Bulb",
      features: [
        "Energy efficient & energy saves up to 90% in respect of nominal lightings.",
        "High lumen output (Efficacy), high color rendering index (CRI) & CCT.",
        "Less operation costs rapidly feedbacks with more savings and short payback.",
        "Green technology features eco-friendly future generation green planet.",
        "No toxic and health hazardous material like Mercury (Hg), Lead (Pb) etc. content ultimately environment friendly.",
        "Decent light quality with width light beam angle.",
        "Compact size with smart design.",
        "Instant start, no flickering effect",
      ],
    },
  ],
  switches: [
    {
      id: 1,
      name: "TSC 2 pin Plug",
      href: "TSC-2-pin-Plug",
      price: "BDT 35",
      imageSrc: appliancesImage1,
      imageAlt: "TSC 2 pin Plug",
      features: [
        "Maximum Operating Voltage: 250V.",
        "Flame Retardant Poly Carbonate Plastic",
        "Metal Parts made of copper",
      ],
    },
    {
      id: 2,
      name: "TSC Button Holder",
      href: "TSC-Button-Holder",
      price: "BDT 40",
      imageSrc: appliancesImage2,
      imageAlt: "TSC Button Holder",
      features: [
        "Maximum Operating Voltage: 250V.",
        "Flame Retardant Poly Carbonate Plastic",
        "Metal Parts made of copper",
      ],
    },
    {
      id: 3,
      name: "TSC Combine Back part",
      href: "TSC-Combine-Back-part",
      price: "BDT 45",
      imageSrc: appliancesImage3,
      imageAlt: "TSC Combine Backpart",
      features: [
        "Maximum Operating Voltage: 250V.",
        "Flame Retardant Poly Carbonate Plastic",
        "Metal Parts made of copper",
      ],
    },
    {
      id: 4,
      name: "TSC Combine Board",
      href: "TSC-Combine-Board",
      price: "BDT 245",
      imageSrc: appliancesImage4,
      imageAlt: "TSC Combine Board",
      features: [
        "Maximum Operating Voltage: 250V.",
        "Flame Retardant Poly Carbonate Plastic",
        "Metal Parts made of copper",
      ],
    },
    {
      id: 5,
      name: "TSC Fuse",
      href: "TSC-Fuse",
      price: "BDT 40",
      imageSrc: appliancesImage5,
      imageAlt: "TSC Fuse",
      features: [
        "Maximum Operating Voltage: 250V.",
        "Flame Retardant Poly Carbonate Plastic",
        "Metal Parts made of copper",
      ],
    },
    {
      id: 6,
      name: "TSC Indicator",
      href: "TSC-Indicator",
      price: "BDT 28",
      imageSrc: appliancesImage6,
      imageAlt: "TSC Indicator",
      features: [
        "Maximum Operating Voltage: 250V.",
        "Flame Retardant Poly Carbonate Plastic",
        "Metal Parts made of copper",
      ],
    },
    {
      id: 7,
      name: "TSC Pendent holder",
      href: "TSC-Pendent-holder",
      price: "BDT 38",
      imageSrc: appliancesImage7,
      imageAlt: "TSC Pendent holder",
      features: [
        "Maximum Operating Voltage: 250V.",
        "Flame Retardant Poly Carbonate Plastic",
        "Metal Parts made of copper",
      ],
    },
    {
      id: 8,
      name: "TSC Prime Gang Switch light",
      href: "TSC-Prime-Gang-Switch-light",
      price: "BDT 600",
      imageSrc: appliancesImage8,
      imageAlt: "TSC Prime Gang Switch light",
      features: [
        "Maximum Operating Voltage: 250V.",
        "Flame Retardant Poly Carbonate Plastic and Aluminum",
        "Metal Parts made of copper",
      ],
    },
    {
      id: 9,
      name: "TSC Prime Gang Switch",
      href: "TSC-Prime-Gang-Switch",
      price: "BDT 600",
      imageSrc: appliancesImage9,
      imageAlt: "TSC Prime Gang Switch",
      features: [
        "Maximum Operating Voltage: 250V.",
        "Flame Retardant Poly Carbonate Plastic and Aluminum",
        "Metal Parts made of copper",
      ],
    },
    {
      id: 10,
      name: "TSC Socket",
      href: "TSC-Socket",
      price: "BDT 32",
      imageSrc: appliancesImage10,
      imageAlt: "TSC Socket",
      features: [
        "Maximum Operating Voltage: 250V.",
        "Flame Retardant Poly Carbonate Plastic",
        "Metal Parts made of copper",
      ],
    },
    {
      id: 11,
      name: "TSC Switch",
      href: "TSC-Switch",
      price: "BDT 30",
      imageSrc: appliancesImage11,
      imageAlt: "TSC Switch",
      features: [
        "Maximum Operating Voltage: 250V.",
        "Flame Retardant Poly Carbonate Plastic",
        "Metal Parts made of copper",
      ],
    },
  ],
};

export default function ProductOverview() {
  const { category, product } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    if (productsList.hasOwnProperty(category)) {
      const categoryProducts = productsList[category];
      const selectedProduct = categoryProducts.find((p) => p.href === product);

      if (selectedProduct) {
        setProductData(selectedProduct);
      } else {
        console.error(
          `Product '${product}' not found in category '${category}'.`
        );
      }
    } else {
      console.error(`Category '${category}' not found.`);
    }
  }, [category, product]);

  if (!productData) {
    return (
      <div className="h-[100vh] flex justify-center items-center text-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="flex justify-center items-center h-auto mx-8 sm:mx-20 mt-24 mb-24">
        <div
          key={productData.id}
          className="flex flex-col md:flex-row justify-evenly items-center gap-16"
        >
          <img
            src={productData.imageSrc}
            alt={productData.imageAlt}
            className="h-full max-w-full w-[650px] hover:opacity-75 aspect-h-1 aspect-w-1 overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7"
          />
          <div className="w-90">
            <h3 className="mt-4 text-4xl text-center font-semibold text-gray-700">
              {productData.name}
            </h3>
            <p className="mt-3 text-2xl font-medium text-gray-900">
              {productData.price}
            </p>
            <ul className="list-disc px-4 mt-4">
              {productData.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
