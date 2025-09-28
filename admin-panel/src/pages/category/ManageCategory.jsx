import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const ManageCategory = () => {
  // Dummy categories (later you can fetch from API)
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics", parent: "None" },
    { id: 2, name: "Clothing", parent: "None" },
    { id: 3, name: "Mobiles", parent: "Electronics" },
  ]);

  const handleEdit = (id) => {
    console.log("Edit category with id:", id);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      setCategories(categories.filter((cat) => cat.id !== id));
    }
  };

  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />

      {/* Content Wrapper */}
      <div className="content-wrapper">
        {/* Page Header */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Manage Categories</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Manage Categories</li>
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
                <h3 className="card-title">Category List</h3>
                <Link to="/add-category" className="btn btn-success">
                  + Add New Category
                </Link>
              </div>

              <div className="card-body table-responsive">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th style={{ width: "10%" }}>ID</th>
                      <th>Category Name</th>
                      <th>Parent Category</th>
                      <th style={{ width: "20%" }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((cat) => (
                      <tr key={cat.id}>
                        <td>{cat.id}</td>
                        <td>{cat.name}</td>
                        <td>{cat.parent}</td>
                        <td>
                          <button
                            className="btn btn-primary btn-sm mr-2"
                            onClick={() => handleEdit(cat.id)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(cat.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}

                    {categories.length === 0 && (
                      <tr>
                        <td colSpan="4" className="text-center text-muted">
                          No categories found
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
  );
};

export default ManageCategory;
