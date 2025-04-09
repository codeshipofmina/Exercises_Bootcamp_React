import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/RootLayout";
import AllBeersPage from "./Pages/AllBeersPage";
import DetailBeerPage from "./Pages/DetailBeerPage";
import HomePage from "./Pages/HomePage";

const routerBeerAPI = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { path: "/", Component: HomePage },
      { path: "/beers", Component: AllBeersPage },
      { path: "/beers/:beerId", Component: DetailBeerPage },
      { path: "/beers/random", Component: DetailBeerPage },
      // irgendwie noch etwas für random beer
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routerBeerAPI} />
    </>
  );
}

export default App;
