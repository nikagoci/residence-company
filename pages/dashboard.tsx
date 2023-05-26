import prisma from "@/libs/prisma";
import { GetServerSideProps } from "next";
import { useSession, signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Dashboard = () => {
  const { status } = useSession();
  const { push } = useRouter();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center w-full h-full py-64">
        <button className="btn loading"></button>
      </div>
    );
  }

  if (status === "unauthenticated") {
    push("/api/auth/signin");
  }

  return <div>Dashboard</div>;
};

export default Dashboard;
