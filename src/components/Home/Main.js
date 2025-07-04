import React from "react";
import Overview from "./Overview";
import CompanyOverview from "./CompanyOverview";

export default function Main() {
  return (
    <div className="mx-0 2xl:mx-40 xl:mx-20 lg:mx-0">
      {/* Company overview */}
      <CompanyOverview />
      {/* overview */}
      <Overview />
    </div>
  );
}
