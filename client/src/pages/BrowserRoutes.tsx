import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Admin from './Admin/Admin';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
type Props = {};

const BrowserRoutes = (props: Props) => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default BrowserRoutes;
