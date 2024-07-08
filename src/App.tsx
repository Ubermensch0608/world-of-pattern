import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage.page";
import StrategyPage from "./pages/Strategy.page";
import Layout from "./components/layout/Layout";
import { PlaygroundPage } from "./pages/Playground.page";
import { CommandPage } from "./pages/Command.page";
import { StrategyVersusCommand } from "./pages/StrategyVersusCommand";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "strategy",
        element: <StrategyPage />,
      },
      {
        path: "playground",
        element: <PlaygroundPage />,
      },
      {
        path: "command",
        element: <CommandPage />,
      },
      {
        path: "command&strategy",
        element: <StrategyVersusCommand />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
