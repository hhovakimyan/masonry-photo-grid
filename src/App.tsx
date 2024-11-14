import React from 'react';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DetailsPage from "./pages/DetailsPage";
import GridPage from "./pages/GridPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GridPage />}></Route>
        <Route path="details/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
