import React from 'react';

const Count = React.lazy(() => import('./app/order/count'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/order', name: 'Order', component: Count }
];

export default routes;
