import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const VendorManagement = () => {
  // Dummy vendor data (পরে API বা Database থেকে আসবে)
  const vendors = [
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
  ];

  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />

      {/* Content Wrapper */}
      <div className="content-wrapper">
        {/* Page Header */}
        <section className="content-header">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <h1>Vendor Management</h1>
            <button className="btn btn-primary">
              <i className="fas fa-plus"></i> Add Vendor
            </button>
          </div>
        </section>

        {/* Main Content */}
        <section className="content">
          <div className="card">
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
                  {vendors.map((vendor, index) => (
                    <tr key={vendor.id}>
                      <td>{index + 1}</td>
                      <td>{vendor.name}</td>
                      <td>{vendor.email}</td>
                      <td>{vendor.phone}</td>
                      <td>
                        <button className="btn btn-sm btn-info mr-2">
                          <i className="fas fa-edit"></i> Edit
                        </button>
                        <button className="btn btn-sm btn-danger">
                          <i className="fas fa-trash"></i> Delete
                        </button>
                      </td>
                    </tr>
                  ))}
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
