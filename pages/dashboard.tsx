import Dashboard from "@/components/dashboard.tsx";
import { GetStaticProps } from "next";
import { useSession } from "next-auth/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (locale) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  }

  throw new Error("Local not found");
};
