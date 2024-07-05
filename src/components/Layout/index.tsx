"use client";
import { ReactNode, useEffect, useRef, useState } from "react";

import ToastComponent from "@components/common/Toaster/ToastComponent";
import OverlayLoader from "@components/common/OverlayLoader";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Layout({
  children,
}: {
  children: ReactNode;
  header?: boolean;
  footer?: boolean;
}) {
  const pathname = usePathname();
  const ref = useRef(null);
  const isLoginPage = pathname?.includes("/login");
  const [smallMenu, setSmallMenu] = useState(false);
  const [replaceIcon, setReplaceIcon] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const st = window.pageYOffset || document.documentElement.scrollTop;

      if (ref && st > 400) {
        setReplaceIcon(true);
      } else if (ref && st < 400) {
        setReplaceIcon(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);
  return (
    <main className="min-h-screen bg-white dark:bg-[#19181E]">
      <div className="">
        {isLoginPage ? null : <Header replaceIcon={replaceIcon} />}
        <div className={`bg-white dark:bg-[#19181E]`}>
          <div ref={ref} className="container overflow-y-auto">
            {children}
          </div>
          <ToastComponent />
          <OverlayLoader />
          <div id="__loader" />
        </div>
        {isLoginPage ? null : <BottomNav />}
      </div>
    </main>
  );
}

export default Layout;
function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="flex gap-4 fixed z-10 md:hidden bottom-0 p-4 bg-white dark:bg-[#0C0B10] w-full overflow-x-scroll"></div>
  );
}

function Header({ replaceIcon }: any) {
  const pathname = usePathname();

  return (
    <div className="container p-4">
      <Image alt={"Solaric"} src={"/images/logo.svg"} height={13} width={132} />
    </div>
  );
}
