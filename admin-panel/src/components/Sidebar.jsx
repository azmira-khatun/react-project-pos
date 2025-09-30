import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isVendorMenuOpen, setIsVendorMenuOpen] = useState(false);
  const [isCustomerMenuOpen, setIsCustomerMenuOpen] = useState(false);


  // হ্যান্ডলার ফাংশন
  const toggleUserMenu = (e) => {
    e.preventDefault();
    setIsUserMenuOpen(!isUserMenuOpen);
    setIsCategoryMenuOpen(false);
    setIsProductMenuOpen(false);
    setIsVendorMenuOpen(false);
    setIsCustomerMenuOpen(false);

  };

  const toggleCategoryMenu = (e) => {
    e.preventDefault();
    setIsCategoryMenuOpen(!isCategoryMenuOpen);
    setIsUserMenuOpen(false);
    setIsProductMenuOpen(false);
    setIsVendorMenuOpen(false);
    setIsCustomerMenuOpen(false);

  };

  const toggleProductMenu = (e) => {
    e.preventDefault();
    setIsProductMenuOpen(!isProductMenuOpen);
    setIsUserMenuOpen(false);
    setIsCategoryMenuOpen(false);
    setIsVendorMenuOpen(false);
    setIsCustomerMenuOpen(false);

  };

  const toggleVendorMenu = (e) => {
    e.preventDefault();
    setIsVendorMenuOpen(!isVendorMenuOpen);
    setIsUserMenuOpen(false);
    setIsCategoryMenuOpen(false);
    setIsProductMenuOpen(false);
    setIsCustomerMenuOpen(false);

  };
  const toggleCustomerMenu = (e) => {
    e.preventDefault();
    setIsVendorMenuOpen(!isCustomerMenuOpen);
    setIsUserMenuOpen(false);
    setIsCategoryMenuOpen(false);
    setIsProductMenuOpen(false);
    setIsCustomerMenuOpen(false);

  };

  return (
    <div>
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-light-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <img
            src="assets-admin/dist/img/images.jpeg"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">DREAM POS</span>
        </a>

        {/* Sidebar */}
        <div className="sidebar">
          {/* User Panel, SidebarSearch Form (অপরিবর্তিত) */}
          {/* ... (পূর্বের কোড) ... */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="assets-admin/dist/img/avatar2.png"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Azmira Khatun
              </a>
            </div>
          </div>
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* 1. Dashboard (স্থায়ীভাবে খোলা রাখতে menu-open ক্লাস ব্যবহার করা হয়েছে) */}
              <li className="nav-item menu-open">
                <a href="#" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                {/* ড্যাশবোর্ডের সাব-মেনুগুলো কমেন্ট করা আছে */}
              </li>

              {/* 2. User Menu Item (State Controlled) */}
              <li className={`nav-item ${isUserMenuOpen ? "menu-open" : ""}`}>
                <a href="#" className="nav-link" onClick={toggleUserMenu}>
                  <i className="nav-icon fas fa-book" />
                  <p>
                    User
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/add-user" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add User</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/manage-user" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Manage User</p>
                    </Link>
                  </li>
                </ul>
              </li>

              {/* 3. Category Menu Item (State Controlled) */}
              <li
                className={`nav-item ${isCategoryMenuOpen ? "menu-open" : ""}`}
              >
                <a href="#" className="nav-link" onClick={toggleCategoryMenu}>
                  <i className="nav-icon fas fa-book" />
                  <p>
                    Category
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/add-category" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Category</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/manage-category" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Manage Category</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={`nav-item ${isProductMenuOpen ? "menu-open" : ""}`}
              >
                <a href="#" className="nav-link" onClick={toggleProductMenu}>
                  <i className="nav-icon fas fa-book" />
                  <p>
                    Product
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/add-product" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Product</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/manage-product" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Manage Product</p>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className={`nav-item ${isVendorMenuOpen ? "menu-open" : ""}`}>
                <a href="#" className="nav-link" onClick={toggleVendorMenu}>
                  <i className="nav-icon fas fa-book" />
                  <p>
                    Vendors
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/manage-vendor" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Manage Vendors</p>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className={`nav-item ${isCustomerMenuOpen ? "menu-open" : ""}`}>
                <a href="#" className="nav-link" onClick={toggleCustomerMenu}>
                  <i className="nav-icon fas fa-book" />
                  <p>
                    Customers
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/customer-management" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Manage Customers</p>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-chart-pie" />
                  <p>
                    Charts
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/charts/chartjs.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>ChartJS</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/charts/flot.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Flot</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/charts/inline.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Inline</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/charts/uplot.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>uPlot</p>
                    </a>
                  </li>
                </ul>
              </li>
              
              
              
             
               
              
              
              
             
              
              
              
                
              
              
              
                
             
              
              
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};

export default Sidebar;
