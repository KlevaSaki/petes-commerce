import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import HomePage from "../pages/Home/HomePage";
import ShopCollection from "../pages/ShopCollection/ShopCollection";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop-collection",
        element: <ShopCollection />
      }
    ],
  },
]);