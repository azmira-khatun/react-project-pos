import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const VendorManagement = () => {
  const [vendors, setVendors] = useState([
    {
      id: 1,
      name: "Vendor One",
      email: "vendor1@example.com",
      phone: "0123456789",
    },
    {
      id: 2,
      name: "Vendor Two",
      email: "vendor2@example.com",
      phone: "01711111111",
    },
    {
      id: 3,
      name: "Vendor Three",
      email: "vendor3@example.com",
      phone: "01822222222",
    },
  ]);

  const [formData, setFormData] = useState({
    id: null,
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill all fields");
      return;
    }

    if (formData.id !== null) {
      // Update existing vendor
      const updated = vendors.map((v) =>
        v.id === formData.id
          ? {
              ...v,
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
            }
          : v,
      );
      setVendors(updated);
    } else {
      // Add new vendor
      const newVendor = {
        id: vendors.length > 0 ? Math.max(...vendors.map((v) => v.id)) + 1 : 1,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      };
      setVendors([...vendors, newVendor]);
    }

    // Clear form
    setFormData({ id: null, name: "", email: "", phone: "" });
  };

  const handleEdit = (vendor) => {
    setFormData({
      id: vendor.id,
      name: vendor.name,
      email: vendor.email,
      phone: vendor.phone,
    });
    // Scroll or focus if you want
  };

  const handleDelete = (vendorId) => {
    if (window.confirm("Are you sure you want to delete this vendor?")) {
      setVendors(vendors.filter((v) => v.id !== vendorId));
      // If currently editing this one, clear form
      if (formData.id === vendorId) {
        setFormData({ id: null, name: "", email: "", phone: "" });
      }
    }
  };

  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid d-flex justify-content-between align-items-center my-3">
            <h1>Vendor Management</h1>
          </div>
        </section>

        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                {formData.id !== null ? "Edit Vendor" : "Add Vendor"}
              </h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Vendor Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter vendor name"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className={`btn mt-3 ${formData.id !== null ? "btn-warning" : "btn-success"}`}
                >
                  {formData.id !== null ? "Update Vendor" : "Add Vendor"}
                </button>
                {formData.id !== null && (
                  <button
                    type="button"
                    className="btn btn-secondary mt-3 ml-2"
                    onClick={() =>
                      setFormData({ id: null, name: "", email: "", phone: "" })
                    }
                  >
                    Cancel
                  </button>
                )}
              </form>
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-header">
              <h3 className="card-title">Vendor List</h3>
            </div>
            <div className="card-body">
              <table className="table table-bordered table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th style={{ width: "50px" }}>#</th>
                    <th>Vendor Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th style={{ width: "150px" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {vendors.map((vendor, idx) => (
                    <tr key={vendor.id}>
                      <td>{idx + 1}</td>
                      <td>{vendor.name}</td>
                      <td>{vendor.email}</td>
                      <td>{vendor.phone}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-info me-2"
                          onClick={() => handleEdit(vendor)}
                        >
                          <i className="fas fa-edit"></i> Edit
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(vendor.id)}
                        >
                          <i className="fas fa-trash"></i> Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {vendors.length === 0 && (
                    <tr>
                      <td colSpan="5" className="text-center">
                        No vendors found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default VendorManagement;
