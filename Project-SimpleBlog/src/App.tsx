import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Details from "./Pages/Details";

const routerPizza = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: "/", Component: Home },
      { path: "/blog", Component: Blog },
      { path: "/blog/:idPizza", Component: Details },
    ],
  },
]);

function App() {
  return <RouterProvider router={routerPizza} />;
}

export default App;
