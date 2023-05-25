/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import SingleRow from "./single-row";
import TopRow from "./top-row";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  flats: Flat[] | undefined;
  loading: boolean;
};

const Table = ({ flats, loading }: Props) => {
  if (loading) {
    return (
      <Popover className="relative z-10 md:static">
        {({ open }) => (
          <>
            <div className="relative z-10 bg-white md:static ">
              <div className="flex py-2 mx-auto max-w-7xl ">
                <Popover.Button
                  className={classNames(
                    open ? "text-gray-900" : "text-gray-500",
                    "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  )}
                >
                  <span>Every Flat</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? "text-gray-600" : "text-gray-400",
                      "ml-2 h-5 w-5 group-hover:text-gray-500"
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>
              </div>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel className="absolute inset-x-0 z-10 mt-2 transform shadow-lg ">
                <div className="flex flex-col h-[200px] z-20 justify-around pt-5 overflow-x-auto border-t border-gray-200 gap-y-6 sm:gap-8">
                  <div className="z-50 flex items-center justify-center">
                    <button className="btn loading">loading</button>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  }

  return (
    <Popover className="relative z-10 md:static">
      {({ open }) => (
        <>
          <div className="relative z-10 bg-white md:static ">
            <div className="flex py-2 mx-auto max-w-7xl ">
              <Popover.Button
                className={classNames(
                  open ? "text-gray-900" : "text-gray-500",
                  "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                )}
              >
                <span>Every Flat</span>
                <ChevronDownIcon
                  className={classNames(
                    open ? "text-gray-600" : "text-gray-400",
                    "ml-2 h-5 w-5 group-hover:text-gray-500"
                  )}
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel className="absolute inset-x-0 z-10 mt-2 transform shadow-lg ">
              <div className="flex flex-col justify-around pt-5 overflow-x-auto border-t border-gray-200 gap-y-6 sm:gap-8">
                <table className="w-full mb-0 overflow-visible bg-white rounded-2xl">
                  <div className="h-96">
                    <thead className="z-50 border-b ">
                      <TopRow />
                    </thead>

                    <tbody className="bg-white h-96">
                      {flats &&
                        flats.map((flat) => (
                          <SingleRow key={flat.flatNum} flat={flat} />
                        ))}
                    </tbody>
                  </div>
                </table>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Table;
