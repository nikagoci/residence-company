import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Floor from "@/components/floor";
import Modal from "@/components/shared/modal";
import { GET_SINGLE_FLAT } from "@/libs/graphql/queries";

type SingleFlat = {
  Flat: Flat;
};

const SingeFloor = () => {
  const [openModal, setOpenModal] = useState(false);
  const { query, push } = useRouter();
  const { data, loading, error } = useQuery<SingleFlat>(GET_SINGLE_FLAT, {
    variables: { flatNum: query.flat && +query.flat },
    skip: !query.flat
  });

  const floorNum = query.floorId as string;

  useEffect(() => {
    if ((floorNum && +floorNum <= 0) || +floorNum > 5) {
      push("/residence");
    }
  }, [floorNum]);

  useEffect(() => {
    if (query.flat) {
      setOpenModal(true);
    }
  }, [query]);

  return (
    <>
      <Modal
        flat={data?.Flat}
        loading={loading}
        error={error}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />

      <Floor floorNum={floorNum} />
    </>
  );
};

export default SingeFloor;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  if (locale) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  }

  throw new Error("Local not found");
};
