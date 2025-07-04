import React from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import AboutImage from "../../assets/image/who we are.png";
import VisionImage from "../../assets/image/target.png";
import historyImage from "../../assets/image/history.png";

export default function About() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* About Us */}
      <div className="relative isolate overflow-hidden pt-24 pb-10 sm:pb-4 sm:pt-32 mx-5 sm:mx-10 lg:mx-40 mt-10">
        <img
          src={AboutImage}
          alt=""
          className="max-w-full w-full rounded-3xl"
        />
        <div className="mx-auto px-6 lg:px-8">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-4xl mt-6 sm:mt-10 text-center font-semibold tracking-tight text-[#252525] sm:text-6xl">
              About us
            </h2>
            <p className="mt-6 text-base font-medium text-gray-700">
              Welcome to TSC, the epitome of cutting-edge electrical solutions.
              Our diverse portfolio includes illuminating lights, powerful fans,
              reliable switches, and a range of electronic accessories. TSC
              lights redefine brilliance, such as the Diamond 18W Emergency LED
              Bulb, showcasing energy efficiency and sustainable design. Our
              fans, from the Ceiling Net Fan to the Rechargeable Table Fan,
              combine technology and aesthetics for optimal performance.
              Switches like the Prime Gang Switch light reflect TSC's commitment
              to reliability and safety. In electronic accessories, precision
              meets durability, evident in products like the 2-pin Plug and
              Indicator. Headquartered in Bangladesh, TSC's global impact is
              driven by a strong and dedicated workforce of professionals. With
              a large annual production capacity of, TSC is a giant
              among marketing, setting the gold standard for excellence. Our
              products embody an unbeatable blend of quality, cost-efficiency,
              groundbreaking design, and relentless innovation. Explore TSC,
              where simplicity meets clarity, and join us on a journey to a
              brighter, more connected future.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"></div>
        </div>
      </div>

      {/* Our Vision */}
      <div className="relative isolate overflow-hidden pb-10 sm:pb-4 sm:pt-32 mx-5 sm:mx-10 lg:mx-40">
        <img
          src={VisionImage}
          alt=""
          className="max-w-full w-full rounded-3xl"
        />
        <div className="mx-auto px-6 lg:px-8">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-4xl mt-6 sm:mt-10 text-center font-semibold tracking-tight text-[#252525] sm:text-6xl">
              Our Vision
            </h2>
            <p className="mt-6 text-base font-medium text-gray-700">
              Step into the radiant world of TSC, where our visionary mission is
              to be the foremost guide in the evolution of energy-efficient
              illumination. Our dedicated commitment extends to forging a
              greener and brighter tomorrow, In this utopian vision, our LED
              lighting solutions transcend mere functionality – they become
              catalysts for inspiring sustainable living practices. The
              relentless pursuit of pioneering cutting-edge technologies is at
              the heart of our journey. We aspire to redefine the benchmarks of
              energy conservation, presenting lighting experiences that
              seamlessly integrate innovation, aesthetics, and a profound sense
              of eco-consciousness. Each meticulously crafted product is a
              testament to our unwavering dedication to transforming the
              lighting landscape. Together, let us embark on a transformative
              journey, as we cast a luminous glow on the future with
              unparalleled brilliance. Our collective efforts are directed
              towards creating a world where every beam of light emanates not
              just illumination but also reflects our deep commitment to a
              sustainable and luminous planet. With TSC, it's more
              than lighting – it's a promise to illuminate a future where
              brilliance and sustainability coalesce, lighting up a path toward
              a brighter, more conscious world.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"></div>
        </div>
      </div>

      {/* Our History */}
      <div className="relative isolate overflow-hidden pb-10 sm:pb-4 sm:pt-32 mx-5 sm:mx-10 lg:mx-40">
        <img
          src={historyImage}
          alt=""
          className="max-w-full w-full rounded-3xl"
        />
        <div className="mx-auto px-6 lg:px-8">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-4xl mt-6 sm:mt-10 text-center font-semibold tracking-tight text-[#252525] sm:text-6xl">
              Our History
            </h2>
            <p className="mt-6 text-base font-medium text-gray-700">
              Founded in 2014, our company embarked on a transformative journey
              in the electronic industry, focusing on the of lighting solutions,
              fans, and switches. Since our inception, we have been dedicated to
              delivering products that embody innovation, quality, and
              functionality. As we ventured into the realm of electrical
              appliances, our commitment to excellence became the cornerstone of
              our operations. Today, our brand has become synonymous with trust
              and reliability in the market. Our product line encompasses a
              range of lighting solutions, fans designed for optimal
              performance, and switches that exemplify cutting-edge technology.
              Our rapid growth is fueled by a dynamic approach to meeting
              consumer needs, ensuring competitive pricing, and providing
              unparalleled after-sales services. In just a few years, we have
              successfully secured a significant market share, establishing
              ourselves as a dominant player in the electrical and electronic
              sector. Looking ahead, our vision is to continually expand our
              product offerings and market presence, solidifying our position as
              a leading force in the industry. With a commitment to innovation
              and customer satisfaction, we are poised to shape the future of
              electronic solutions for years to come.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"></div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
