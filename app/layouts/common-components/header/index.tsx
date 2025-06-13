import type { FC } from "react";
import MobileNavigation from "./components/mobile-navigation";
import DesktopNavigation from "./components/desktop-navigation";
import Banner from "./components/banner";

type HeaderProps = {
  data?: string;
};
const Header: FC<HeaderProps> = ({ data }) => {
  console.log(data);

  return (
    <div>
      <MobileNavigation />
      <DesktopNavigation />
      <Banner />
    </div>
  );
};
export default Header;
