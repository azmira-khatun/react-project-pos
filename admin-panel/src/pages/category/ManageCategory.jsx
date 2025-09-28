import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ডামি ডেটা যা আপনার API বা ডাটাবেস থেকে আসবে
const dummyUsers = [
    { id: 10, full_name: "Sharmin Akter", username: "sharmin234", email: "sharmin@gmail.com", role: "Cashier" },
    { id: 9, full_name: "Jhorna Hawlader", username: "jhorna5678", email: "joya@gmail.com", role: "Manager" },
    { id: 8, full_name: "Bonna", username: "hawlader", email: "bonna@gmail.com", role: "Manager" },
    { id: 4, full_name: "Farhana Lucky", username: "lucky123", email: "farhana@gmail.com", role: "Admin" },
    { id: 3, full_name: "Administrator", username: "admin", email: "admin@gmail.com", role: "Admin" }
];

const dummyRoles = ["Admin", "Manager", "Cashier"];

const ManageUsers = () => {
    // টেবিল ডেটার জন্য স্টেট
    const [users, setUsers] = useState(dummyUsers);
    const [message, setMessage] = useState('');

    // ডিলিট হ্যান্ডলিং ফাংশন
    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            console.log("Deleting user with ID:", id);
            
            // স্টেট থেকে ইউজার সরিয়ে ফেলা
            const updatedUsers = users.filter(u => u.id !== id);
            setUsers(updatedUsers);
            setMessage(`User ID ${id} deleted successfully!`);
        }
    };
    
    // Add New User বাটনে ক্লিক করলে Add User পেজে যাওয়ার জন্য এটি তৈরি করা হলো
    // তবে এটি একটি ডামি ফাংশন, আপনার routing setup অনুযায়ী Link to="/add-user" ব্যবহার করতে হবে।
    const handleAddUserClick = () => {
        // Here you would typically navigate using React Router: navigate('/add-user')
        console.log("Navigating to Add User page...");
    }

    return (
        <div className="container-fluid">
            {/* Page Header */}
            <div className="row mb-3">
                <div className="col-md-6">
                    <h1 className="m-0">Manage Users</h1>
                </div>
            </div>

            {/* Message Display */}
            {message && (
                <div className="alert alert-success" role="alert">
                    {message}
                </div>
            )}
            
            {/* Add New User Button */}
            <div className="mb-3">
                <Link to="/add-user" className="btn btn-success" onClick={handleAddUserClick}>
                    Add New User
                </Link>
            </div>


            {/* All Users Card (Table) */}
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">All Users</h3>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table id="usersTable" className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th className="text-center">ID</th>
                                    <th className="text-center">Full Name</th>
                                    <th className="text-center">Username</th>
                                    <th className="text-center">Email</th>
                                    <th className="text-center">Role</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length > 0 ? (
                                    users.map((user) => (
                                        <tr key={user.id}>
                                            <td className="text-center">{user.id}</td>
                                            <td className="text-center">{user.full_name}</td>
                                            <td className="text-center">{user.username}</td>
                                            <td className="text-center">{user.email}</td>
                                            <td className="text-center">{user.role}</td>
                                            <td className="d-flex justify-content-center">
                                                {/* Edit Button */}
                                                <Link 
                                                    to={`/edit-user/${user.id}`} 
                                                    className="btn btn-sm btn-info me-1"
                                                >
                                                    Edit
                                                </Link>
                                                {/* Delete Button */}
                                                <button 
                                                    onClick={() => handleDelete(user.id)}
                                                    className="btn btn-sm btn-danger"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center">No users found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;