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
                    <li className="breadcrumb-item active">Add User</li>
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
                    <div className="card-header" style={{backgroundColor: '#007bff'}}>
                        <h3 className="card-title">User Information</h3>
                    </div>

                    <form>
                      <div className="card-body">
                        
                        {/* 1. Full Name Field */}
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            name="fullName"
                            placeholder="Full Name"
                            // স্ট্যাটিক ফর্মে value বা onChange লাগবে না
                          />
                        </div>

                        {/* 2. Username Field */}
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            placeholder="Username"
                          />
                        </div>

                        {/* 3. Email Field */}
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email"
                          />
                        </div>

                        {/* 4. Password Field */}
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Password"
                          />
                        </div>

                        {/* 5. Select Role Dropdown */}
                        <div className="form-group">
                          <select
                            className="form-control"
                            id="role"
                            name="role"
                          >
                            <option value="">Select Role</option>
                            <option value="admin">Admin</option>
                            <option value="manager">Manager</option>
                            <option value="employee">Employee</option>
                          </select>
                        </div>
                      </div>
                      {/* /.card-body */}
                      
                      {/* Card Footer (Add User Button) */}
                      <div className="card-footer p-0">
                        <button 
                            type="submit" 
                            className="btn btn-primary btn-block p-3" 
                            style={{borderRadius: 0}}
                        >
                          Add User
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
  );
};

export default AddUser;
