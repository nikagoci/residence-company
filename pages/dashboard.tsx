import Dashboard from "@/components/dashboard.tsx";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const DashboardPage = () => {
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

  return <Dashboard />;
};

export default DashboardPage;
