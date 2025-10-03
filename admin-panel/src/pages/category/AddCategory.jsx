import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
// useState এখানে অপ্রয়োজনীয় কারণ আপনি স্ট্যাটিক ফর্ম চেয়েছেন

const AddCategory = () => {
  return (
    <div>
      {/* Site wrapper */}
      <div className="wrapper">
        <Navbar />
        <Sidebar />

        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Add Category</h1> {/* পেজের প্রধান শিরোনাম */}
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Add Category</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                {/* ফর্মের কলাম: এটি ফর্মটিকে মাঝের দিকে রাখবে */}
                <div className="col-md-6 offset-md-3">
                  {/* AdminLTE Card Component (যদি প্রয়োজন হয় তবে কার্ড ব্যবহার করতে পারেন) */}
                  <div className="card card-primary">
                    <div
                      className="card-header"
                      style={{ backgroundColor: "#007bff" }}
                    >
                      <h3 className="card-title">Category Details</h3>
                    </div>

                    {/* Form Start */}
                    <form>
                      <div className="card-body">
                        {/* 1. Category Name Field */}
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="categoryName"
                            name="categoryName"
                            placeholder="Category Name"
                            // স্ট্যাটিক ফর্মে value বা onChange লাগবে না
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="note"
                            name="note"
                            placeholder="Note"
                            // স্ট্যাটিক ফর্মে value বা onChange লাগবে না
                          />
                        </div>
                      </div>
                      {/* Card Footer (Add Category Button) */}
                      <div className="card-footer p-0">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block p-3"
                          style={{ borderRadius: 0 }}
                        >
                          Add Category
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
        </div>
        {/* /.content-wrapper */}
        <Footer />
      </div>
      {/* ./wrapper */}
    </div>
  );
};

export default AddCategory;
