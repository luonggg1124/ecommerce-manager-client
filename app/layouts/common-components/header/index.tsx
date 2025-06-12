import type { FC } from "react";

import MobileHeader from "./components/mobile";
import WindowHeader from "./components/desktop";

type HeaderProps = {
  data?: string;
};
const Header: FC<HeaderProps> = ({ data }) => {
  console.log(data);

  return (
    <div>
      <MobileHeader />
      <WindowHeader />
    </div>
  );
};
export default Header;
