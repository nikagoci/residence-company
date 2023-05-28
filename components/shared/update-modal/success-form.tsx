import { Dialog } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import Link from "next/link";

type Props = {
  floor: number;
  flatNum: number;
};

const SuccessForm = ({ floor, flatNum }: Props) => {
  return (
    <div className="inline-block w-full px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg sm:my-8 sm:align-middle sm:max-w-full sm:p-6">
      <div>
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
          <CheckIcon className="w-6 h-6 text-green-600" aria-hidden="true" />
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            Updated Successfully
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              The Changes Have Been Saved.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5 sm:mt-6">
        <Link
          href={`/residence/floor/${floor}/?flat=${flatNum}`}
          type="submit"
          className="inline-flex justify-center px-6 py-2 text-lg font-medium text-white border border-transparent rounded-md shadow-sm bg-light_purple hover:bg-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple "
        >
          See Updated Flat
        </Link>
      </div>
    </div>
  );
};

export default SuccessForm;
