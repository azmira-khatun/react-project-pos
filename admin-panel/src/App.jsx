import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Master from "./pages/Master";
import AddUser from "./pages/users/AddUser";
import AddCategory from "./pages/category/AddCategory";
import ManageCategory from "./pages/category/ManageCategory";
import ManageUser from "./pages/users/ManageUsers";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/manage-user" element={<ManageUser />} />
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/manage-category" element={<ManageCategory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
