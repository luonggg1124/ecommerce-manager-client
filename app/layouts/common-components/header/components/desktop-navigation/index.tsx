import TopNavigation from "./top-navigation";
import MainNavigation from "./main-navigation";

const DesktopNavigation = () => {
  return (
    <nav className="hidden lg:block" aria-label="Global navigation ">
      <TopNavigation />
      <MainNavigation />
    </nav>
  );
};
export default DesktopNavigation;
