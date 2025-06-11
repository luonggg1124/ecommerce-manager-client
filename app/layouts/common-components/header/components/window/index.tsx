import Banner from "../common-components/banner";
import Navigation from "./components/navigation";
const WindowHeader = () => {
  return (
    <header className="hidden lg:block">
      <Navigation />
      <Banner />
    </header>
  );
};
export default WindowHeader;
