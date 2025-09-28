import React from "react";
import NavBar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const AddProduct = () => {
  return (
    <div>
      <div>
        {/* <!-- Site wrapper --> */}
        <div className="wrapper">
          {/* Navbar */}
          <NavBar />
          {/* /.navbar */}
          {/* Main Sidebar Container */}
          <Sidebar />
          {/* Content Wrapper. Contains page content */}
          <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item active">Add Product </li>
                    </ol>
                  </div>
                </div>
              </div>
              {/* /.container-fluid */}
            </section>
            {/* Main content */}
            <section className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 offset-md-3">
                    {/* AdminLTE Card Component */}
                    <div className="card card-primary">
                      <div
                        className="card-header"
                        style={{ backgroundColor: "#007bff" }}
                      >
                        <h3 className="card-title">User Information</h3>
                      </div>

                      <form>
                        <div className="card-body">
                          {/* 1. Full Name Field */}
                          <div className="form-group">
                            Product Name
                            <input
                              type="text"
                              className="form-control"
                              id="fullName"
                              name="fullName"

                              // স্ট্যাটিক ফর্মে value বা onChange লাগবে না
                            />
                          </div>

                          {/* 5. Select Role Dropdown */}
                          <div className="form-group">
                            {" "}
                            Select Category
                            <input
                              type="text"
                              className="form-control"
                              id="fullName"
                              name="fullName"

                              // স্ট্যাটিক ফর্মে value বা onChange লাগবে না
                            />
                          </div>
                        </div>
                        {/* /.card-body */}

                        {/* Card Footer (Add User Button) */}
                        <div className="card-footer p-0">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block p-3"
                            style={{ borderRadius: 0 }}
                          >
                            Add Product
                          </button>
                        </div>
                      </form>
                      {/* /.form */}
                    </div>
                    {/* /.card */}
                  </div>
                </div>
              </div>
            </section>
            {/* /.content */}
            {/* /.content */}
          </div>
          {/* /.content-wrapper */}
          <Footer />
          {/* /.control-sidebar */}
        </div>
        {/* ./wrapper */}
      </div>
    </div>
  );
};

export default AddProduct;
