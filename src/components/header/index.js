"use client";
import { GlobalContext } from "@/context";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { RiSunFill, RiMoonFill } from "react-icons/ri";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { openSidebar, setOpenSidebar } = useContext(GlobalContext);
  const pathName = usePathname();

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-zinc-200/10 p-2 backdrop-blur-xl dark:bg-zinc-950/40">
      <div className="ml-[6px]">
        <p className="text-[32px] capitalize text-zinc-700 dark:text-white">
            { pathName === '/' ? 'DASHBOARD' : pathName.split('/')[1].toUpperCase()}
        </p>
      </div>
      {/* on the right icon to toggle */}
      <div className="relative flex mt-[3px] items-center justify-end gap-4 rounded-full bg-white px-2 py-2 shadow-xl dark:!bg-zinc-800 dark:shadow-none xl:gap-2">
        <span
          onClick={() => setOpenSidebar(!openSidebar)}
          className="cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
        >
          <FiAlignJustify className="h-5 w-5" />
        </span>
        <div
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="cursor-pointer text-gray-600"
        >
          {theme === "dark" ? (
            <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
          ) : (
            <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
          )}
        </div>
      </div>
    </nav>
  );
}
