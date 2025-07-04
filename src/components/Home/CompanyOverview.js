import React from "react";

export default function CompanyOverview() {
  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              The Square Marketed Company (TSC)
            </h1>
            <p className="mt-6 text-base leading-6 text-gray-600">
              Explore TSC, where simplicity meets clarity, and join us on a
              journey to a brighter and more connected future.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/about"
                className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 top-[calc(10%)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(10%)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-80 sm:left-[calc(50%)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
