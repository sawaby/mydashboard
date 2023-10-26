"use client";

import { usePathname } from "next/navigation";
import Header from "../header";
import Sidebar from "../sidebar";
import Dashboard from "@/app/dashboard/page";

export default function CommonLayout({ children }) {
  const pathName = usePathname();
  return (
    <div className="flex h-full w-full bg-background-100 dark:bg-background-900">
      {/* side bar */}
      <Sidebar />

      {/* header */}
      <div className="h-full w-full font-dm dark:bg-zinc-950 ">
        <main className="mx-2.5 flex-none transition-all dark:bg-zinc-950 md:pr-2 xl:ml-[323px]">
          <div>
            <Header />
            {/* render children */}
            <div className="mx-auto min-h-screen p-2 !pt-[10px] md:p-2">
              {pathName === "/" ? <Dashboard /> : children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
