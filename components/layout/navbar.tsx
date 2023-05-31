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
    "inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-light_purple";
  const notActive =
    "inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-transparent hover:border-light_purple hover:text-white";

  const mobileActive =
    "block py-2 pl-3 pr-4 text-white font-medium border-l-4 border-purple text-primary bg-light_purple sm:pl-5 sm:pr-6";
  const notMobileActive =
    "block py-2 pl-3 pr-4 text-white font-medium  border-l-4 border-transparent hover:bg-light_purple hover:border-purple sm:pl-5 sm:pr-6";

  return (
    <Disclosure as="nav" className={`${router.pathname.includes('/residence') || router.pathname.includes('/dashboard') ? "bg-gradient-to-br from-gray-900 to-gray-600  py-4" : "absolute left-0 w-full top-4 "} `}>
      {({ open, close }) => (
        <>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex justify-between ">
              <div className="flex justify-between w-full">
                <div className="flex items-center flex-shrink-0">
                  <Link href="/">
                    <Image
                      className="block w-auto h-[60px] rounded-full"
                      src="/svgs/logo.svg"
                      alt="Elite Residence"
                      width={64}
                      height={64}
                    />
                  </Link>
                </div>
                <div className="flex items-center justify-between mr-2 -ml-2 md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple">
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
                      router.pathname.includes('/residence') || router.pathname.includes('/dashboard') ? active : notActive
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

          <Disclosure.Panel className={` ${router.pathname.includes('/residence') || router.pathname.includes('/dashboard') ? 'bg-inherit' : 'bg-gray-700'} py-6 mt-2 md:hidden`}>
            <div className="space-y-2 ">
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
                  router.pathname.includes('/residence') || router.pathname.includes('/dashboard')
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
