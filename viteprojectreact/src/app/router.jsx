import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home";
import Hooks1 from "../component/hooks/Hook1";
import Hook2 from "../component/hooks/Hooks2";
import ProductView from "../component/product/ProductView";
import BuyNow from "../component/BuyNow";
import Component1 from "../component/hooks/contextHook/Component1";
import HookRef from "../component/hooks/Hook3";
// import RegisterForm from "../component/Forms/RegisterForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hooks1",
    element: <Hooks1 />,
  },
  {
    path: "/hooks2",
    element: <Hook2 />,
  },
  {
    path: "/product-view",
    element: <ProductView />,
  },
  {
    path: "buy-now",
    element: <BuyNow />,
  },
  {
    path: "context",
    element: <Component1 />,
  },
  // {
  //   path: "register",
  //   element: <RegisterForm />,
  // },
  {
    path: "hook3",
    element: <HookRef />,
  },
]);
export default router;
