import { lazy, Suspense } from "react";
import { type RouteObject } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product"
import Order from "./pages/Order"

const Index = lazy(() => import("@/pages/index"));
const Notfound = lazy(() => import("@/pages/404"));

export const routes: Array<RouteObject> = [
  {
    index: true,
    element: (
      <Suspense>
        <Index />
        {/* <Product />
        <Dashboard /> */}
      </Suspense>
    ),
  },
  {
    path: "product",
    element: (
      <Suspense>
        <Product />
      </Suspense>
    ),
  },
  {
    path: "orders",
    element: (
      <Suspense>
        <Order />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense>
        <Notfound />
      </Suspense>
    ),
  },
];

export default routes;
