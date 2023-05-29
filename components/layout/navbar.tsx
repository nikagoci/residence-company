import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const router = useRouter();
  const { status } = useSession();

  // text-gray-900
  // text-gray-500
  const active =
    "inline-flex items-center px-1 pt-1 text-sm font-medium text-purple border-b-2 border-light_purple";
  const notActive =
    "inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-transparent hover:border-light_purple hover:text-white";

  const mobileActive =
    "block py-2 pl-3 pr-4 text-white font-medium border-l-4 border-purple text-primary bg-light_purple sm:pl-5 sm:pr-6";
  const notMobileActive =
    "block py-2 pl-3 pr-4 text-white font-medium  border-l-4 border-transparent hover:bg-light_purple hover:border-purple sm:pl-5 sm:pr-6";

  return (
    <Disclosure as="nav" className="absolute left-0 w-full top-4 ">
      {({ open, close }) => (
        <>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex justify-between ">
              <div className="flex justify-between w-full">
                <div className="flex items-center flex-shrink-0">
                  <Link href="/">
                    <Image
                      className="block w-auto h-16 rounded-full"
                      src="/images/logo.jpg"
                      alt="Turcvg"
                      width={64}
                      height={64}
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
                  <Link href="/#about" scroll={false} className={notActive}>
                    About Us
                  </Link>
                  <Link
                    href="/residence"
                    className={`${
                      router.pathname === "/residence" ? active : notActive
                    }`}
                  >
                    Residence
                  </Link>
                  <Link href="/#contact" scroll={false} className={notActive}>
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

          <Disclosure.Panel className="py-6 mt-2 bg-gray-700 md:hidden">
            <div className="z-50 pt-2 pb-3 space-y-1">
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
                href="/#about"
                scroll={false}
                className={notMobileActive}
                onClick={() => close()}
              >
                About Us
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
                className={notMobileActive}
                onClick={() => close()}
              >
                Contact
              </Link>
              {status !== "loading" && status === "authenticated" && (
                <div className="flex items-center px-4">
                  <button className="btn" onClick={() => signOut()}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
