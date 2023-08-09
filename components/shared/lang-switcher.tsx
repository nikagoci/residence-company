import { Fragment } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

type Props = {
  mobileView?: boolean;
};

const LangSwitcher = ({ mobileView }: Props) => {
  const { push, asPath, locale } = useRouter();

  const handleChangeLang = (locale: string) => {
    push(asPath, undefined, { locale });
  };


  if (mobileView) {
    return (
      <div className="flex items-center py-4 text-white gap-x-6">
        <div className="flex items-center p-2 transition duration-300 bg-gray-600 border border-gray-700 rounded shadow-2xl cursor-pointer hover:bg-gray-500 gap-x-3" onClick={() => handleChangeLang("en")}>
          <Image
            src="/svgs/usa.svg"
            alt="georgia"
            className="w-6 h-auto"
            width={24}
            height={24}
          />
          <h5 className={`${locale === 'en' ? "text-primary" : "text-white"}`}>Eng</h5>
        </div>
        <div className="flex items-center p-2 transition duration-300 bg-gray-600 border border-gray-700 rounded cursor-pointer hover:bg-gray-500 shadow-3xl gap-x-3" onClick={() => handleChangeLang("ka")}  >
          <Image
            src="/svgs/georgia.svg"
            alt="georgia"
            className="w-6 h-auto"
            width={24}
            height={24}
          />
          <h5 className={`${locale === 'ka' ? "text-primary" : "text-white"}`}>ქარ</h5>
        </div>

      </div>
    );
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full p-2 text-sm font-medium text-white rounded-md shadow-sm bg-none hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple">
          <Image
            src={`/svgs/${locale === "en" ? "usa.svg" : "georgia.svg"}`}
            alt="georgia"
            className="w-6 h-auto"
            width={24}
            height={24}
          />
          <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-full mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex flex-col items-center py-5 gap-y-3 ">
            <Menu.Item>
              {locale === "en" ? (
                <Image
                  src="/svgs/georgia.svg"
                  alt="georgia"
                  className="w-10 h-auto cursor-pointer "
                  width={40}
                  height={40}
                  onClick={() => handleChangeLang("ka")}
                />
              ) : (
                <Image
                  src="/svgs/usa.svg"
                  alt="usa"
                  className="w-10 h-auto cursor-pointer "
                  width={40}
                  height={40}
                  onClick={() => handleChangeLang("en")}
                />
              )}
            </Menu.Item>

            <Menu.Item>
              {locale === "ka" ? (
                <Image
                  src="/svgs/georgia.svg"
                  alt="georgia"
                  className="w-10 h-auto cursor-pointer "
                  width={40}
                  height={40}
                  onClick={() => handleChangeLang("ka")}
                />
              ) : (
                <Image
                  src="/svgs/usa.svg"
                  alt="usa"
                  className="w-10 h-auto cursor-pointer "
                  width={40}
                  height={40}
                  onClick={() => handleChangeLang("en")}
                />
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LangSwitcher;
