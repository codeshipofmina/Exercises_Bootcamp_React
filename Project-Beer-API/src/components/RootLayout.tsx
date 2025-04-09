import { NavLink, Outlet } from "react-router";
import "../App.css";

function RootLayout() {
  return (
    <>
      <nav className="">
        <NavLink to="/">Home</NavLink>
        {/* //mit fixed layout unten positionieren */}
        {/* <NavLink to="/beers">All Beers</NavLink>
        <NavLink to="/{random beer}">Randdom Beer</NavLink> */}
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
