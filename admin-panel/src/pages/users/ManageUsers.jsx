import React from "react";
import { Link } from "react-router-dom"; // Link ইমপোর্ট করা হয়েছে
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

// স্ক্রিনশট অনুযায়ী ডামি ডেটা
const users = [
    { id: 10, fullName: "Sharmin Akter", username: "sharmin234", email: "sharmin@gmail.com", role: "Cashier" },
    { id: 9, fullName: "Jhorna Hawlader", username: "Jhorna5678", email: "joya@gmail.com", role: "Manager" },
    { id: 8, fullName: "Bonna", username: "hawlader", email: "bonna@gmail.com", role: "Manager" },
    { id: 4, fullName: "Farhana Lucky", username: "lucky123", email: "farhana@gmail.com", role: "Admin" },
    { id: 3, fullName: "Administrator", username: "admin", email: "admin@gmail.com", role: "Admin" },
];

const ManageUser = () => {
    // এখানে এডিট/ডিলিট ফাংশন যুক্ত করতে পারেন
    const handleEdit = (id) => {
        console.log(`Editing user: ${id}`);
        // এডিট পেজে যাওয়ার লজিক
    };

    const handleDelete = (id) => {
        if (window.confirm(`Are you sure you want to delete user ID ${id}?`)) {
            console.log(`Deleting user: ${id}`);
            // API কল করে ডিলিট করার লজিক
        }
    };

    return (
        <div>
            {/* Site wrapper */}
            <div className="wrapper">
                {/* Navbar */}
                <Navbar />
                {/* Main Sidebar Container */}
                <Sidebar />

                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Manage Users</h1> {/* শিরোনাম ঠিক করা হলো */}
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">Manage Users</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    {/* AdminLTE Card Component */}
                                    <div className="card">
                                        
                                        {/* Card Header (Add New User Button) */}
                                        <div className="card-header border-bottom-0">
                                            {/* Add New User বাটন: Link to /add-user */}
                                            <Link to="/add-user" className="btn btn-success">
                                                Add New User
                                            </Link>
                                        </div>
                                        {/* /.card-header */}

                                        {/* Table container. removed 'p-0' and 'text-nowrap' for better general display */}
                                        <div className="card-body table-responsive">
                                            <table className="table table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                        {/* স্ক্রিনশট অনুযায়ী কলাম হেডার */}
                                                        <th style={{ width: '10%' }}>ID</th>
                                                        <th>Full Name</th>
                                                        <th>Username</th>
                                                        <th>Email</th>
                                                        <th>Role</th>
                                                        <th style={{ width: '15%' }}>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* ডেটা ম্যাপ করে টেবিলের সারি তৈরি করা */}
                                                    {users.map(user => (
                                                        <tr key={user.id}>
                                                            <td>{user.id}</td>
                                                            <td>{user.fullName}</td>
                                                            <td>{user.username}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.role}</td>
                                                            <td>
                                                                {/* Edit Button (Blue) */}
                                                                <button 
                                                                    className="btn btn-primary btn-sm mr-1" 
                                                                    onClick={() => handleEdit(user.id)}
                                                                >
                                                                    Edit
                                                                </button>
                                                                {/* Delete Button (Red) */}
                                                                <button 
                                                                    className="btn btn-danger btn-sm" 
                                                                    onClick={() => handleDelete(user.id)}
                                                                >
                                                                    Delete
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        {/* /.card-body */}
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
                {/* /.control-sidebar */}
            </div>
            {/* ./wrapper */}
        </div>
    );
};

export default ManageUser;