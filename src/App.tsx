import React, { lazy, Suspense } from 'react';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainLoading from './components/MainLoading';

const pageRoutes = [
  {
    name: 'home',
    path: "/",
    element: lazy(() => import('pages/GridPage')),
  },
  {
    name: 'details',
    path: "details/:id",
    element: lazy(() => import('pages/DetailsPage')),
  },
];

function App() {
  return (
    <Suspense fallback={<MainLoading />}>
      <BrowserRouter>
        <Routes>
          {
            pageRoutes.map((route) => {
              return <Route key={route.name} path={route.path} element={<route.element />} />
            })
          }
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
