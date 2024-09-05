import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const MainLayout = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
