import React, { useState } from "react";
import { Link } from "react-router-dom";

// --- FIX: Mock Components for Missing Imports ---

const NavBar = () => (
  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button">
          <i className="fas fa-bars"></i>
        </a>
      </li>
    </ul>
    <span className="navbar-text ml-auto text-muted">Mock Navigation Bar</span>
  </nav>
);

const Sidebar = () => (
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="/" className="brand-link">
      <span className="brand-text font-weight-light">Product Manager</span>
    </a>
    {/* Sidebar Content */}
    <div className="sidebar">
      <nav className="mt-2">
        <ul
          className="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <li className="nav-item">
            <a href="#" className="nav-link active">
              <i className="nav-icon fas fa-boxes"></i>
              <p>Manage Products (Mock)</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
);

const Footer = () => (
  <footer className="main-footer">
    <div className="float-right d-none d-sm-inline">Version 1.0</div>
    <strong>Copyright &copy; 2024 Product App.</strong> All rights reserved.
  </footer>
);

// --- Initial Mock Data for Products ---
const initialMockProducts = [
  { id: 1, name: "Laptop Pro X", category: "Electronics", price: 1200.0 },
  { id: 2, name: "Cotton T-Shirt", category: "Apparel", price: 25.5 },
  {
    id: 3,
    name: "Organic Coffee Beans",
    category: "Food & Groceries",
    price: 15.75,
  },
  { id: 4, name: "Stainless Steel Mug", category: "Home Goods", price: 35.0 },
];

/**
 * --- Helper Component: Product Form ---
 * Handles state for adding a new product.
 */
const ProductForm = ({ products, setProducts }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.category || !formData.price) {
      console.error("Please fill in all fields.");
      return;
    }

    const newProduct = {
      id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
      name: formData.name,
      category: formData.category,
      price: parseFloat(formData.price),
    };

    // Add new product to the state
    setProducts([...products, newProduct]);

    // Reset form
    setFormData({ name: "", category: "", price: "" });
    console.log(`Product "${newProduct.name}" added successfully.`);
  };

  return (
    <div className="bg-white shadow-lg rounded mb-4">
      {/* 'Add New Product' Header Bar */}
      <div className="py-3 px-4 border-bottom bg-light rounded-top">
        <h5 className="mb-0 text-dark">Add New Product</h5>
      </div>

      {/* --- Form Body --- */}
      <div className="p-4">
        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            {/* Product Name Field (Column 1) */}
            <div className="col-md-6">
              <label htmlFor="productName" className="form-label fw-bold">
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                id="productName"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter product name"
                required
              />
            </div>

            {/* Price Field (Column 2) */}
            <div className="col-md-6">
              <label htmlFor="productPrice" className="form-label fw-bold">
                Price (BDT)
              </label>
              <input
                type="number"
                step="0.01"
                className="form-control"
                id="productPrice"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="0.00"
                required
              />
            </div>

            {/* Category Field (Full Width Row) */}
            <div className="col-12">
              <label htmlFor="category" className="form-label fw-bold">
                Select Category
              </label>
              <select
                className="form-select form-control"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Category...
                </option>
                <option value="Electronics">Electronics</option>
                <option value="Apparel">Apparel</option>
                <option value="Home Goods">Home Goods</option>
                <option value="Food & Groceries">Food & Groceries</option>
                <option value="Books">Books</option>
              </select>
            </div>

            {/* Submit Button (Full Width, below fields) */}
            <div className="col-12 mt-3">
              <button type="submit" className="btn btn-primary btn-lg w-100">
                + Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* End Form Body */}
    </div>
  );
};

/**
 * --- Helper Component: Product Table ---
 * Displays the list of products and handles actions.
 */
const ProductTable = ({ products, setProducts }) => {
  // Mock Handlers for demonstration
  const handleEdit = (id) => console.log(`Editing product with ID: ${id}`);

  const handleDelete = (id) => {
    // Filter out the product to simulate deletion
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
    console.log(`Deleted product with ID: ${id}`);
  };

  return (
    <div className="card shadow-lg">
      <div className="card-header border-transparent">
        <h3 className="card-title">Current Product List</h3>
        <div className="card-tools">
          <button
            type="button"
            className="btn btn-tool"
            data-card-widget="collapse"
          >
            <i className="fas fa-minus"></i>
          </button>
        </div>
      </div>
      {/* /.card-header */}
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table m-0 table-striped table-hover">
            <thead>
              <tr>
                <th style={{ width: "8%" }}>ID</th>
                <th>Product Name</th>
                <th style={{ width: "20%" }}>Category</th>
                <th style={{ width: "15%" }}>Price</th>
                <th style={{ width: "20%" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>
                    {/* Action Buttons */}
                    <button
                      className="btn btn-sm btn-info mr-2"
                      onClick={() => handleEdit(product.id)}
                    >
                      <i className="fas fa-edit"></i> Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(product.id)}
                    >
                      <i className="fas fa-trash"></i> Delete
                    </button>
                  </td>
                </tr>
              ))}

              {products.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center text-muted py-4">
                    No products found. Add a new product above!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* /.table-responsive */}
      </div>
      {/* /.card-body */}
      <div className="card-footer clearfix">
        <a href="#" className="btn btn-sm btn-secondary float-right">
          View All Products
        </a>
      </div>
      {/* /.card-footer */}
    </div>
    // /.card
  );
};

/**
 * --- Main Component: Combines Form and Table ---
 */
const ManageProductsPage = () => {
  const [products, setProducts] = useState(initialMockProducts);

  return (
    <div className="hold-transition sidebar-mini">
      <div className="wrapper">
        <NavBar />
        <Sidebar />

        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Manage Products</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Manage Products</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* --- 1. PRODUCT ADD FORM AREA (Centered) --- */}
              <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                  <ProductForm products={products} setProducts={setProducts} />
                </div>
              </div>

              {/* --- 2. PRODUCT TABLE AREA (Full Width) --- */}
              <div className="row mt-4">
                <div className="col-12">
                  <ProductTable products={products} setProducts={setProducts} />
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ManageProductsPage;
