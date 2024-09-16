import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout, UserLayout } from "../layouts";

// Pages
import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  Product,
  Signin,
  Signup,
} from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/user",
        element: <UserLayout />,
        children: [
          {
            path: "signup",
            element: <Signup />,
          },
          {
            path: "signin",
            element: <Signin />,
          },
        ],
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
