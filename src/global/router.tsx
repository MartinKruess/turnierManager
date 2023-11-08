import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Landingpage } from "../pages/landingpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Landingpage />
      },
      {
        path: "/open",
        element: <Landingpage />
      },
      {
        path: "/history",
        element: <Landingpage />
      },
      {
        path: "/team-stats",
        element: <Landingpage />
      },
      {
        path: "/player-stats",
        element: <Landingpage />
      },
    ]
  },
  {
    path: "/*",
    element: <App />
  },
]);