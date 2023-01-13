import React from "react";
import DefaultLayout from "./Default_Layout";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Route, Routes } from 'react-router-dom'

function AppLayout() {
  return (
    <Routes>
      <Route path="/defaultlayout" element={<DefaultLayout />}>
        <Route
          path="sidebar"
          element={<Sidebar />}
        />
        <Route path="header" element={<Header />} />
      </Route>
    </Routes>
  );
}

export default AppLayout;