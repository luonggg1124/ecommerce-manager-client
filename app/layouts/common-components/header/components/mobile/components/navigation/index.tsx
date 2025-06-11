import className from "@/constants/class-name";

import { Atom, Search, ShoppingBag, User } from "lucide-react";
import MainNavigation from "./main-navigation";
const Navbar = () => {
  return (
    <div
      className={`flex items-center justify-between h-14 ${className.pxApp}`}
    >
      <div>
        <Atom color="#5db8fe" size={30} />
      </div>
      <ul className="flex items-center gap-4 text-gray-600">
        <li>
          <Search />
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
    </div>
  );
};
export default Navbar;
