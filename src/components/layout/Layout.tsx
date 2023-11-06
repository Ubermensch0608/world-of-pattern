import { Outlet } from "react-router-dom";
import { GNB } from "./GNB/GNB";

const Layout = () => {
  return (
    <>
      <GNB />
      <Outlet />
    </>
  );
};
export default Layout;
