import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import HomePage from "../pages/Home/HomePage";
import ShopAllProducts from "../pages/AllProducts/ShopAllProducts";
import MenswearCollection from "../pages/Shop/MenswearCollection";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/all-products",
        element: <ShopAllProducts />
      },
      {
        path: "/menswear-collection",
        element: <MenswearCollection />
      }
    ],
  },
]);