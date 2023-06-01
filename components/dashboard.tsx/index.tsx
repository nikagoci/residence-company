import React from "react";
import Stats from "./stats";
import Chart from "./chart";
import { useQuery } from "@apollo/client";
import { FLAT_STATISTIC } from "@/libs/graphql/queries";
import { useTranslation } from "next-i18next";

type FlatStatistic = {
  FlatStatistic: {
    demandableFloor: number;
    flatsSold: number;
    totalIncome: number;
    soldFlatsByFloor: {
      floor: number;
      _count: {
        _all: number;
      };
    }[];
  };
};

const Dashboard = () => {
  const { data, loading, error } = useQuery<FlatStatistic>(FLAT_STATISTIC);
  const {t} = useTranslation()

  if (!data || loading) {
    return (
      <div className="flex items-center justify-center w-full h-full py-64">
        <button className="btn loading"></button>
      </div>
    );
  }

  if (error) {
    return <h1>{t("error")}</h1>;
  }

  return (
    <section className="py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col gap-y-12">
          <Stats
            demandableFloor={data.FlatStatistic.demandableFloor}
            flatsSold={data.FlatStatistic.flatsSold}
            totalIncome={data.FlatStatistic.totalIncome}
          />
          <Chart soldFlatsByFloor={data.FlatStatistic.soldFlatsByFloor}  />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
