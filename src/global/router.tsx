import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { AddTeam } from "../pages/addTeam";
import { NewTurnier } from "../pages/newTurnier";
import { TurnierListContainer } from "../pages/turnierListContainer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <NewTurnier />
      },
      {
        path: "/addTeam",
        element: <AddTeam />
      },
      {
        path: "/open",
        element: <TurnierListContainer />
      },
      {
        path: "/history",
        element: <NewTurnier />
      },
      {
        path: "/team-stats",
        element: <NewTurnier />
      },
      {
        path: "/player-stats",
        element: <NewTurnier />
      },
    ]
  },
  {
    path: "/*",
    element: <App />
  },
]);