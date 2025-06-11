import Banner from "../common-components/banner";
import Navbar from "./components/navigation";

const MobileHeader = () => {
  return (
    <header className="lg:hidden">
      <Navbar />
      <Banner />
    </header>
  );
};
export default MobileHeader;
