import React from 'react';
import { RouteObject } from 'react-router-dom';

import { Home } from './Home';
import { ProductDetail } from '../product/ProductDetail';

const homeRoutes: RouteObject[] = [
  {
    path: '/',
    element: React.createElement(Home),
  },

  {
    path: '/pets/:id',
    element: React.createElement(ProductDetail),
  },
];

export default homeRoutes;
