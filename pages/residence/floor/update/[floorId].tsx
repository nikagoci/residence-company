import { useEffect, useState, Fragment } from "react";
import { useQuery } from "@apollo/client";
import { Dialog, Transition } from "@headlessui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Floor from "@/components/floor";
import { GET_SINGLE_FLAT } from "@/libs/graphql/queries";
import UpdateModal from "@/components/shared/update-modal";

type SingleFlat = {
  Flat: Flat;
};

const SingeFloor = () => {
  const { status } = useSession();

  const [openModal, setOpenModal] = useState(false);
  const { query, push } = useRouter();
  const { data, loading, error } = useQuery<SingleFlat>(GET_SINGLE_FLAT, {
    variables: { flatNum: query.flat && +query.flat },
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

  useEffect(() => {
    if (status === "unauthenticated") {
      push("/residence");
    }
  }, [status, data]);

  if (!data || status === "loading") {
    return (
      <>
        <Transition.Root show={openModal} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={setOpenModal}
          >
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <button className="btn loading"></button>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </>
    );
  }

  return (
    <>
      <UpdateModal
        flat={data.Flat}
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
