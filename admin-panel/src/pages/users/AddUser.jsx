import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const AddUser = () => {
  return (
    <div>
      {/* <!-- Site wrapper --> */}
      <div className="wrapper">
        {/* Navbar */}
        <Navbar />
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
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Blank Page</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
          {/* Main content */}
          <section className="content">
            {/* Default box */}
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-8">
                    <form>
                      <div className="card-body">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter email"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputFile">File input</label>
                          <div className="input-group">
                            <div className="custom-file">
                              <input
                                type="file"
                                className="custom-file-input"
                                id="exampleInputFile"
                              />
                              <label
                                className="custom-file-label"
                                htmlFor="exampleInputFile"
                              >
                                Choose file
                              </label>
                            </div>
                            <div className="input-group-append">
                              <span className="input-group-text">Upload</span>
                            </div>
                          </div>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            Check me out
                          </label>
                        </div>
                      </div>
                      {/* /.card-body */}
                      <div className="card-footer">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </section>
          {/* /.content */}
        </div>
        {/* /.content-wrapper */}
        <Footer />
        {/* /.control-sidebar */}
      </div>
      {/* ./wrapper */}
    </div>
  );
};

export default AddUser;
