import Home from "../pages/Home.tsx";
import Checkout from "../pages/Checkout.tsx";
import Confirmed from "../pages/Confirmed.tsx";
import NotFound from "../pages/NotFound.tsx";

export const routes = [
  { path: "/", element: <Home />, key: "home" },
  { path: "/checkout", element: <Checkout />, key: "checkout" },
  { path: "/confirmed", element: <Confirmed />, key: "confirmed" },
  { path: "*", element: <NotFound />, key: "not-found" },
];
