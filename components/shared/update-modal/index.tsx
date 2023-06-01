import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { ApolloErrorOptions } from "@apollo/client/errors";
import { XIcon } from "@heroicons/react/outline";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import AddProperty from "./add-property";
import UpdateForm from "./update-form";
import { Condition } from "@/fakeData";
import SuccessForm from "./success-form";

type Props = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  flat: Flat;
  error: ApolloErrorOptions | undefined;
  loading: boolean;
};

type FlatInfo = {
  livingArea: number;
  price: number;
  balconies: number[];
  bedrooms: number[];
  wetPoints: number[];
  condition: Condition;
  [key: string]: number[] | number | Condition;
};

const UpdateModal = ({
  openModal,
  setOpenModal,
  flat,
  error,
  loading,
}: Props) => {
  const [success, setSuccess] = useState(false);
  const { push } = useRouter();
  const {t} = useTranslation()

  const [flatInfo, setFlatInfo] = useState<FlatInfo>({
    livingArea: flat.livingArea as number,
    price: flat.price as number,
    balconies: flat.balconies as number[],
    bedrooms: flat.bedrooms as number[],
    wetPoints: flat.wetPoints as number[],
    condition: flat.condition as Condition,
  });

  const handleClose = () => {
    if (flat) {
      setOpenModal(false);
      push({ pathname: `/residence/floor/${flat.floor}` });
    }
  };

  if (!flat || loading) {
    if (!openModal) {
      return <></>;
    } else {
      return (
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
      );
    }
  }

  const addProperty = (value: string) => {
    const key = value as keyof FlatInfo;
    setFlatInfo((prev) => ({
      ...prev,
      [key]: [...(prev[key] as number[]), 0],
    }));
  };

  const removeProperty = (value: string, index: number) => {
    const key = value as keyof FlatInfo;
    console.log(key, index);
    setFlatInfo((prev) => {
      if (Array.isArray(prev[key])) {
        const updatedArray = [...(prev[key] as number[])];
        updatedArray.splice(index, 1);
        return {
          ...prev,
          [key]: updatedArray,
        };
      }
      return prev;
    });
  };

  if (error) {
    return <h1>error</h1>;
  }

  return (
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
            <Dialog.Overlay
              className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
              onClick={handleClose}
            />
          </Transition.Child>

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
            <div className="inline-block w-full px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-3xl sm:p-6">
              <div className="pb-2 border-b-2">
                <div className="flex justify-end ">
                  <XIcon
                    className="w-5 h-auto cursor-pointer"
                    onClick={handleClose}
                  />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-gray-900"
                  >
                    {t("floor.update-modal.title")}
                  </Dialog.Title>
                  <div className="flex justify-center mt-2 font-semibold text-md text-primary breadcrumbs">
                    <ul>
                      <li>{t("floor.update-modal.floor")} {flat.floor}</li>
                      <li>{t("floor.update-modal.flat")} {flat.flatNum}</li>
                    </ul>
                  </div>
                </div>
              </div>
              {success ? (
                <SuccessForm flatNum={flat.flatNum} floor={flat.floor} />
              ) : (
                <>
                  <AddProperty addProperty={addProperty} />
                  <UpdateForm
                    flatNum={flat.flatNum}
                    flatInfo={flatInfo}
                    removeProperty={removeProperty}
                    setSuccess={setSuccess}
                  />
                </>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default UpdateModal;
