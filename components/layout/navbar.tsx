import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const router = useRouter();
  const { status } = useSession();

  const active =
    "inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-primary";
  const notActive =
    "inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700";

  const mobileActive =
    "block py-2 pl-3 pr-4 text-base font-medium border-l-4 border-primary text-primary bg-light_blue sm:pl-5 sm:pr-6";
  const notMobileActive =
    "block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 sm:pl-5 sm:pr-6";

  return (
    <Disclosure as="nav" className="shadow bg-base-200">
      {({ open, close }) => (
        <>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex justify-between w-full">
                <div className="flex items-center flex-shrink-0">
                  <Link href="/">
                    <Image
                      className="block w-auto h-10 rounded-full"
                      src="/images/logo.jpg"
                      alt="Turcvg"
                      width={40}
                      height={40}
                    />
                  </Link>
                </div>
                <div className="flex items-center justify-between mr-2 -ml-2 md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link
                    href="/"
                    className={`${
                      router.pathname === "/" ? active : notActive
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    href="/#description"
                    scroll={false}
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
                  >
                    Description
                  </Link>
                  <Link
                    href="/residence"
                    className={`${
                      router.pathname === "/residence" ? active : notActive
                    }`}
                  >
                    Residence
                  </Link>
                  <Link
                    href="/#contact"
                    scroll={false}
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
                  >
                    Contact
                  </Link>
                  {status !== "loading" && status === "authenticated" && (
                    <div className="flex items-center">
                      <button className="btn" onClick={() => signOut()}>
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Link
                href="/"
                className={`${
                  router.pathname === "/" ? mobileActive : notMobileActive
                }`}
                onClick={() => close()}
              >
                Home
              </Link>
              <Link
                href="/#description"
                scroll={false}
                className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 sm:pl-5 sm:pr-6"
                onClick={() => close()}
              >
                Description
              </Link>
              <Link
                href="/residence"
                className={`${
                  router.pathname === "/residence"
                    ? mobileActive
                    : notMobileActive
                }`}
                onClick={() => close()}
              >
                Residence
              </Link>
              <Link
                href="/#contact"
                scroll={false}
                className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 sm:pl-5 sm:pr-6"
                onClick={() => close()}
              >
                Contact
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
