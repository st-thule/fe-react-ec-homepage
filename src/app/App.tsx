import React from "react";
import { useRoutes } from "react-router-dom";
import appRoutes from "./app.routes";

const App = () => {
  const routes = useRoutes(appRoutes);
  return routes;
};

export default App;
