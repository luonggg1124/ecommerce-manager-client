import className from "@/constants/class-name";
import { BadgeCheck } from "lucide-react";

const TopNavigation = () => {
  return (
    <nav
      aria-label="Top navigation"
      className={`flex items-center justify-between h-10 bg-slate-100 ${className.pxApp}`}
    >
      <div>
        <BadgeCheck />
      </div>
      <ul className="flex items-center gap-2 text-[12px]">
        <li className="font-semibold  cursor-pointer hover:opacity-50">
          <p className=" px-3"> Find a Store</p>
        </li>

        <li className="font-semibold  cursor-pointer hover:opacity-50">
          <p className="border-l  px-3 border-gray-500">Help</p>
        </li>
        <li className="font-semibold  cursor-pointer hover:opacity-50">
          <p className="border-l  px-3 border-gray-500 ">Join Us</p>
        </li>
        <li className="font-semibold cursor-pointer hover:opacity-50 ">
          <p className="border-l  px-3 border-gray-500 ">Sign In</p>
        </li>
      </ul>
    </nav>
  );
};
export default TopNavigation;
