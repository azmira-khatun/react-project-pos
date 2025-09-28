import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

// --- Mock Data (Product Data is used) ---
const mockProducts = [
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

// --- Mock Handlers (These would contain state logic in a real app) ---
const handleEdit = (id) => console.log(`Editing product with ID: ${id}`);
const handleDelete = (id) => console.log(`Deleting product with ID: ${id}`);

const ProductTable = () => {
  return (
    <div>
      <div className="wrapper">
        <NavBar />
        <Sidebar />

        {/* Content Wrapper */}
        <div className="content-wrapper">
          {/* Page Header (Updated to reflect Products, not Categories) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  {/* Title updated to match the data being displayed */}
                  <h1>Manage Products</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                      Manage Products {/* Breadcrumb updated */}
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="content">
            <div className="container-fluid">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h3 className="card-title">Product List</h3>{" "}
                  {/* Title updated */}
                  <Link to="/add-product" className="btn btn-success">
                    + Add New Product {/* Button text updated for clarity */}
                  </Link>
                </div>

                <div className="card-body table-responsive">
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th style={{ width: "10%" }}>ID</th>
                        <th>Product Name</th>
                        <th>Product Category</th>
                        <th>Price</th> {/* Added Price Column */}
                        <th style={{ width: "20%" }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* --- FIX: Mapping over mockProducts, not categories --- */}
                      {mockProducts.map((product) => (
                        <tr key={product.id}>
                          <td>{product.id}</td>
                          <td>{product.name}</td>
                          <td>{product.category}</td>
                          <td>${product.price.toFixed(2)}</td>{" "}
                          {/* Displaying Price */}
                          <td>
                            <button
                              className="btn btn-primary btn-sm mr-2"
                              onClick={() => handleEdit(product.id)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => handleDelete(product.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}

                      {/* --- FIX: Checking mockProducts length --- */}
                      {mockProducts.length === 0 && (
                        <tr>
                          <td colSpan="5" className="text-center text-muted">
                            No products found {/* colSpan updated to 5 */}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
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

export default ProductTable;
