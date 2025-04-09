import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* outlet ist erstmal ein Platzhalter für die weiteren Inhalte. */}
    </>
  );
};

export default Layout;
