import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Customer One",
      email: "cust1@example.com",
      phone: "0123456789",
      address: "Dhaka, Bangladesh",
    },
    {
      id: 2,
      name: "Customer Two",
      email: "cust2@example.com",
      phone: "01712345678",
      address: "Chittagong, Bangladesh",
    },
  ]);

  const [formData, setFormData] = useState({
    id: null,
    name: "",
    email: "",
    phone: "",
    address: "",
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

    const { name, email, phone, address, id } = formData;
    if (!name || !email || !phone || !address) {
      alert("Please fill all fields");
      return;
    }

    if (id !== null) {
      // Update existing customer
      const updated = customers.map((c) =>
        c.id === id
          ? { ...c, name, email, phone, address }
          : c
      );
      setCustomers(updated);
    } else {
      // Add new customer
      const newCust = {
        id:
          customers.length > 0
            ? Math.max(...customers.map((c) => c.id)) + 1
            : 1,
        name,
        email,
        phone,
        address,
      };
      setCustomers([...customers, newCust]);
    }

    // Reset form
    setFormData({ id: null, name: "", email: "", phone: "", address: "" });
  };

  const handleEdit = (cust) => {
    setFormData({ ...cust });
  };

  const handleDelete = (custId) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      setCustomers(customers.filter((c) => c.id !== custId));
      if (formData.id === custId) {
        setFormData({ id: null, name: "", email: "", phone: "", address: "" });
      }
    }
  };

  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid my-3">
            <h1>Customer Management</h1>
          </div>
        </section>

        <section className="content">
          {/* FORM */}
          <div className="card mb-4">
            <div className="card-header">
              <h3 className="card-title">
                {formData.id !== null ? "Edit Customer" : "Add Customer"}
              </h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="col-md-6">
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

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label>Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      className="form-control"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter address"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className={`btn ${
                    formData.id !== null ? "btn-warning" : "btn-success"
                  }`}
                >
                  {formData.id !== null ? "Update Customer" : "Add Customer"}
                </button>
                {formData.id !== null && (
                  <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={() =>
                      setFormData({ id: null, name: "", email: "", phone: "", address: "" })
                    }
                  >
                    Cancel
                  </button>
                )}
              </form>
            </div>
          </div>

          {/* TABLE */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Customer List</h3>
            </div>
            <div className="card-body">
              <table className="table table-bordered table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th style={{ width: "50px" }}>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th style={{ width: "160px" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((cust, idx) => (
                    <tr key={cust.id}>
                      <td>{idx + 1}</td>
                      <td>{cust.name}</td>
                      <td>{cust.email}</td>
                      <td>{cust.phone}</td>
                      <td>{cust.address}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-info me-2"
                          onClick={() => handleEdit(cust)}
                        >
                          <i className="fas fa-edit"></i> Edit
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(cust.id)}
                        >
                          <i className="fas fa-trash"></i> Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {customers.length === 0 && (
                    <tr>
                      <td colSpan="6" className="text-center">
                        No customers found.
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

export default CustomerManagement;
