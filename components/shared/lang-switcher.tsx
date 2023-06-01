import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";

type Props = {
  mobileView?: boolean
}

export default function LangSwitcher({mobileView}: Props) {
  const [active, setActive] = useState("en");
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const langSwitcherRef = useRef<HTMLDivElement>(null);

  const handleChangeLang = (locale: string) => {
    setActive(locale);
    setShowMenu(false);
    router.push(router.asPath, undefined, { locale });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langSwitcherRef.current &&
        !langSwitcherRef.current.contains(event.target as Node)
      ) {
        setShowMenu(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [langSwitcherRef]);

  return (
    <>
      <div
        ref={langSwitcherRef}
        className='relative flex p-2 rounded bg-none'
      >
        <div
          className={`${mobileView ? 'mb-2' : ""} flex items-center justify-center space-x-2 cursor-pointer`}
          onClick={() => setShowMenu((prev) => !prev)}
        >
          {active === "en" ? (
            <Image
              src="/svgs/usa.svg"
              className="h-auto w-7"
              alt="usa"
              width={60}
              height={45}
            />
          ) : (
            <Image
              src="/svgs/georgia.svg"
              className="w-6 h-auto"
              alt="georgia"
              width={60}
              height={45}
            />
          )}
          {!showMenu ? (
            <ChevronDownIcon className="w-[20px] h-auto text-white" />
          ) : (
            <ChevronUpIcon className="w-[20px] h-auto text-white" />
          )}
        </div>
        {showMenu && (
          <div
            className={`${
              active === "ka" ? "flex-col" : "flex-col-reverse"
            } absolute flex items-center justify-center w-full py-4 -translate-x-1/2 border rounded gap-y-4 bg-slate-50 -bottom-[105px] left-1/2`}
          >
            {router.locales &&
              router.locales.map((locale) => (
                <Image key={locale} src={`/svgs/${locale === 'en' ? "usa.svg" : "georgia.svg"}`} onClick={() => handleChangeLang(locale)} className="w-10 h-auto cursor-pointer" alt='georgia' width={60} height={45} />
              ))}
          </div>
        )}
      </div>
    </>
  );
}
