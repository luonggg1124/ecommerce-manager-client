import className from "@/constants/class-name";

import { Atom, Search, ShoppingBag, User } from "lucide-react";
import MainNavigation from "./main-navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import SearchSection from "../common-components/search-section";
const MobileNavigation = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const isScrollingUp = currentY < lastScrollY.current;

      // Chỉ thay đổi trạng thái khi scroll lên
      if (isScrollingUp) {
        setIsFixed(currentY > 100);
      } else {
        setIsFixed(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    // Gọi handleScroll lần đầu để set trạng thái ban đầu
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={cn(
        " z-40 flex items-center justify-between h-14",
        className.pxApp,
        "bg-white ",
        "transition-all duration-300 ease-in-out",
        isFixed ? "fixed top-0 left-0 right-0 shadow-sm" : "relative",
        "lg:hidden"
      )}
      // {`flex items-center justify-between h-14 ${className.pxApp}`}
    >
      <div>
        <Atom color="#5db8fe" size={30} />
      </div>
      <ul className="flex items-center gap-4 text-gray-600">
        <li>
          <Search onClick={() => setOpenSearch(true)} />
        </li>
        <li>
          <User />
        </li>
        <li>
          <ShoppingBag />
        </li>
        <li>
          <MainNavigation />
        </li>
      </ul>
      <SearchSection open={openSearch} setOpen={setOpenSearch} />
    </div>
  );
};
export default MobileNavigation;
