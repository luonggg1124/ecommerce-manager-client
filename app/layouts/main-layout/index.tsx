import { Outlet } from "react-router";
import Header from "../common-components/header";
import Footer from "../common-components/footer";

export async function loader() {}

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
