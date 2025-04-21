import React from "react";

import { RouteObject } from "react-router-dom";

import { Page } from "./Page";
import homeRoutes from "./home/home.routes";

const pageRoutes: RouteObject[] = [
  {
    path: "",
    element: React.createElement(Page),
    children: [...homeRoutes],
  },
];
export default pageRoutes;
