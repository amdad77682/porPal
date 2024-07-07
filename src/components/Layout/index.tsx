"use client";
import { ReactNode } from "react";
import Button from "@components/common/Form/Button";
import OverlayLoader from "@components/common/OverlayLoader";
import ToastComponent from "@components/common/Toaster/ToastComponent";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Layout({
  children,
}: {
  children: ReactNode;
  header?: boolean;
  footer?: boolean;
}) {
  const pathname = usePathname();

  const isLoginPage = pathname?.includes("/login");

  return (
    <main className="min-h-screen  dark:bg-[#19181E]">
      <div className="">
        {isLoginPage ? null : <Header />}
        <div className={`bg-[#F3F4F6] dark:bg-[#19181E]`}>
          <div className="overflow-y-auto">{children}</div>
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
  return (
    <div className="flex gap-4 fixed z-10 md:hidden bottom-0 p-4 bg-white dark:bg-[#0C0B10] w-full overflow-x-scroll"></div>
  );
}

function Header() {
  return (
    <div className="sticky top-0 z-50  p-4 h-[80px] bg-[#FFFFFF]">
      <div className="container flex justify-between">
        <Image
          alt={"Propal"}
          src={"/images/logo.svg"}
          height={13}
          width={132}
        />
        <div className="flex gap-4">
          <Button type="default">UX Challenges</Button>
          <Button type="default">Resources</Button>
          <Button type="default">Find Mentor </Button>
          <Button type="outline">Be Challenger</Button>
          <Button type="primary">Be Reviewer</Button>
        </div>
      </div>
    </div>
  );
}
