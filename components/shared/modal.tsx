import { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { ApolloErrorOptions } from "@apollo/client/errors";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

type Props = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  flat: Flat | undefined;
  error: ApolloErrorOptions | undefined
  loading: boolean
};

const Modal = ({ openModal, setOpenModal, flat, error, loading }: Props) => {
  const [totalArea, setTotalArea] = useState(0);
  const [totalBalconyArea, setTotalBalconyArea] = useState(0);
  const {push} = useRouter()
  const { t } = useTranslation()

  useEffect(() => {
    let balconyArea = 0;

    if (flat) {
      flat.balconies.forEach((balcony) => {
        balconyArea += balcony;
      });

      setTotalBalconyArea(balconyArea);
      setTotalArea(balconyArea + flat?.livingArea);
    }
  }, [flat]);

  const handleClose = () => {
    if(flat){
      setOpenModal(false)
      push({pathname: `/residence/floor/${flat.floor}`})
    }
  }

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

  if(error){
    return <h1>{t("error")}</h1>;
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
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={handleClose}  />
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
            <div className="inline-block max-w-full px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-3xl sm:p-6">
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
                    {t("floor.modal.title")}
                  </Dialog.Title>
                  <div className="flex justify-center mt-2 font-semibold text-md text-primary breadcrumbs">
                    <ul>
                      <li>{t("floor.modal.floor")} {flat.floor}</li>
                      <li>{t("floor.modal.flat")} {flat.flatNum}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full mt-4">
                <Image
                  className="w-full h-auto rounded"
                  alt="apartament"
                  src="/images/apartament.jpg"
                  width={640}
                  height={420}
                />
              </div>
              <div className="flex flex-col py-6 text-lg font-bold gap-y-2">
                <div className="flex gap-x-8">
                  <h4>{t("floor.modal.description.total-area")}:</h4>
                  <h5>{totalArea} {t("floor.modal.description.metric")}</h5>
                </div>
                <div className="flex gap-x-8">
                  <h4>{t("floor.modal.description.living-area")}:</h4>
                  <h5>{flat.livingArea} {t("floor.modal.description.metric")}</h5>
                </div>
                <div className="flex gap-x-8">
                  <h4>
                    {flat.balconies.length > 1 ? t("floor.modal.description.balconies-area") : t("floor.modal.description.balcony-area") }:
                  </h4>
                  <h5>{totalBalconyArea} {t("floor.modal.description.metric")}</h5>
                </div>
                <div className="flex gap-x-8 ">
                  <h4>{t("floor.modal.description.price")}:</h4>
                  <h5>{flat.price} $</h5>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4 font-normal">
                  {flat.bedrooms.map((bedroom, idx) => (
                    <div key={idx}>
                      <h4>{t("floor.modal.description.bedroom")}:</h4>
                      <h5 className="text-primary">{bedroom} {t("floor.modal.description.metric")}</h5>
                    </div>
                  ))}
                  {flat.wetPoints.map((wetPoint, idx) => (
                    <div key={idx}>
                      <h4>{t("floor.modal.description.wet-point")}:</h4>
                      <h5 className="text-primary">{wetPoint} {t("floor.modal.description.metric")}</h5>
                    </div>
                  ))}
                  <div>
                    <h4>{t("floor.modal.description.balcony-quantity")}</h4>
                    <h5 className="text-primary">{flat.balconies.length}</h5>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex justify-center px-6 py-2 text-lg font-medium text-white border border-transparent rounded-md shadow-sm bg-light_purple hover:bg-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple"
                  onClick={() => push('/#contact')}
                >
                  {t("floor.modal.contact")}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
