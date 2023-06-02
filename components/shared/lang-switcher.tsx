/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";

type Props = {
  mobileView?: boolean;
};

const LangSwitcher = ({ mobileView }: Props) => {
  const [active, setActive] = useState("en");
  const { push, asPath } = useRouter();

  const handleChangeLang = (locale: string) => {
    setActive(locale);
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
          <h5 className={`${active === 'en' ? "text-primary" : "text-white"}`}>Eng</h5>
        </div>
        <div className="flex items-center p-2 transition duration-300 bg-gray-600 border border-gray-700 rounded cursor-pointer hover:bg-gray-500 shadow-3xl gap-x-3" onClick={() => handleChangeLang("ka")}  >
          <Image
            src="/svgs/georgia.svg"
            alt="georgia"
            className="w-6 h-auto"
            width={24}
            height={24}
          />
          <h5 className={`${active === 'ka' ? "text-primary" : "text-white"}`}>ქარ</h5>
        </div>
       
      </div>
    );
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full p-2 text-sm font-medium text-white rounded-md shadow-sm bg-none hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple">
          <Image
            src={`/svgs/${active === "en" ? "usa.svg" : "georgia.svg"}`}
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
              {active === "en" ? (
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
              {active === "ka" ? (
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

// import Image from "next/image";
// import { useRouter } from "next/router";
// import { useEffect, useRef, useState } from "react";
// import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";

// type Props = {
//   mobileView?: boolean
// }

// export default function LangSwitcher({mobileView}: Props) {
//   const [active, setActive] = useState("en");
//   const [showMenu, setShowMenu] = useState(false);
//   const router = useRouter();
//   const langSwitcherRef = useRef<HTMLDivElement>(null);

//   const handleChangeLang = (locale: string) => {
//     setActive(locale);
//     setShowMenu(false);
//     router.push(router.asPath, undefined, { locale });
//   };

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         langSwitcherRef.current &&
//         !langSwitcherRef.current.contains(event.target as Node)
//       ) {
//         setShowMenu(false);
//       }
//     };

//     window.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       window.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [langSwitcherRef]);

//   return (
//     <>
//       <div
//         ref={langSwitcherRef}
//         className='relative flex p-2 rounded bg-none'
//       >
//         <div
//           className={`${mobileView ? 'mb-2' : ""} flex items-center justify-center space-x-2 cursor-pointer`}
//           onClick={() => setShowMenu((prev) => !prev)}
//         >
//           {active === "en" ? (
//             <Image
//               src="/svgs/usa.svg"
//               className="h-auto w-7"
//               alt="usa"
//               width={60}
//               height={45}
//             />
//           ) : (
//             <Image
//               src="/svgs/georgia.svg"
//               className="w-6 h-auto"
//               alt="georgia"
//               width={60}
//               height={45}
//             />
//           )}
//           {!showMenu ? (
//             <ChevronDownIcon className="w-[20px] h-auto text-white" />
//           ) : (
//             <ChevronUpIcon className="w-[20px] h-auto text-white" />
//           )}
//         </div>
//         {showMenu && (
//           <div
//             className={`${
//               active === "ka" ? "flex-col" : "flex-col-reverse"
//             } absolute flex items-center justify-center w-full py-4 -translate-x-1/2 border rounded gap-y-4 bg-slate-50 -bottom-[105px] left-1/2`}
//           >
//             {router.locales &&
//               router.locales.map((locale) => (
//                 <Image key={locale} src={`/svgs/${locale === 'en' ? "usa.svg" : "georgia.svg"}`} onClick={() => handleChangeLang(locale)} className="w-10 h-auto cursor-pointer" alt='georgia' width={60} height={45} />
//               ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

export default LangSwitcher;
