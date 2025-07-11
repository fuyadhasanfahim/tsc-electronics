import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
        {/* Navbar */}
        <Navbar />

      <div className="grid min-h-full h-[70vh] place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-2xl font-semibold text-sky-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Go back home
            </a>
            <Link to={"/contact"} className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true"></span>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
