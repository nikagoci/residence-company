import React from "react";
import Stats from "./stats";
import Chart from "./chart";

const Dashboard = () => {
  return (
    <section className="py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col gap-y-12">
        <Stats />
        <Chart />

        </div>
      </div>
    </section>
  );
};

export default Dashboard;
