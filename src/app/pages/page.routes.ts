import React from 'react';
import { RouteObject } from 'react-router-dom';

import { Page } from './Page';
import homeRoutes from './home/home.routes';
import cartRoutes from './cart/cart.routes';

const pageRoutes: RouteObject[] = [
  {
    path: '',
    element: React.createElement(Page),
    children: [...homeRoutes, ...cartRoutes],
  },
];
export default pageRoutes;
