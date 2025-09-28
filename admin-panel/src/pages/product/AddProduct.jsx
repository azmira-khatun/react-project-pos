import React, { useState } from 'react';

// ডামি ডেটা যা আপনার API বা ডাটাবেস থেকে আসবে
const dummyProducts = [
    { id: 4, product_name: "Sunscreen", category_name: "Cosmetics" },
    { id: 2, product_name: "Tablet", category_name: "Electronics" },
    { id: 1, product_name: "Mobile", category_name: "Electronics" }
];

const dummyCategories = [
    { id: 1, category_name: "Electronics" },
    { id: 2, category_name: "Cosmetics" },
    { id: 3, category_name: "Food" }
];

const ManageProducts = () => {
    // ফর্মের স্টেট
    const [productName, setProductName] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [products, setProducts] = useState(dummyProducts);
    const [categories, setCategories] = useState(dummyCategories);
    const [message, setMessage] = useState(''); // PHP $message ভ্যারিয়েবলের জন্য স্টেট

    // ফর্ম হ্যান্ডলিং ফাংশন (PHP POST এর পরিবর্তে)
    const handleAddProduct = (e) => {
        e.preventDefault();
        // এখানে আপনি আপনার API কল বা ডেটা সাবমিশন লজিক যোগ করবেন
        console.log("Adding product:", { productName, categoryId });
        setMessage("Product added successfully!"); // সফল মেসেজ দেখানোর জন্য
        setProductName('');
        setCategoryId('');
    };

    // ডিলিট হ্যান্ডলিং ফাংশন
    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            // ডিলিট লজিক (API কল)
            console.log("Deleting product with ID:", id);
            
            // স্টেট থেকে প্রোডাক্ট সরিয়ে ফেলা
            const updatedProducts = products.filter(p => p.id !== id);
            setProducts(updatedProducts);
            setMessage(`Product ID ${id} deleted successfully!`);
        }
    };

    return (
        <div className="container-fluid">
            {/* Page Header */}
            <div className="row mb-3">
                <div className="col-md-6">
                    <h1 className="m-0">Manage Products</h1>
                </div>
            </div>

            {/* PHP $message এর সমতুল্য মেসেজ ডিসপ্লে */}
            {message && (
                <div className="alert alert-success" role="alert">
                    {message}
                </div>
            )}

            {/* Add New Product Card */}
            <div className="card mb-4">
                <div className="card-header">
                    <h3 className="card-title">Add New Product</h3>
                </div>
                <div className="card-body">
                    {/* form method="POST" এর পরিবর্তে onSubmit হ্যান্ডলার */}
                    <form onSubmit={handleAddProduct}>
                        <div className="row">
                            {/* Product Name Input */}
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label htmlFor="product_name">Product Name</label>
                                    <input 
                                        type="text" 
                                        name="product_name" 
                                        id="product_name" 
                                        className="form-control" 
                                        value={productName}
                                        onChange={(e) => setProductName(e.target.value)}
                                        required 
                                    />
                                </div>
                            </div>
                            {/* Category Select */}
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label htmlFor="category_id">Category</label>
                                    <select 
                                        name="category_id" 
                                        id="category_id" 
                                        className="form-control" 
                                        value={categoryId}
                                        onChange={(e) => setCategoryId(e.target.value)}
                                        required
                                    >
                                        <option value="">Select Category</option>
                                        {/* PHP foreach এর পরিবর্তে JavaScript map */}
                                        {categories.map((category) => (
                                            <option 
                                                key={category.id} 
                                                value={category.id}
                                            >
                                                {category.category_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Add Product Button (type="submit" automatically handles form) */}
                        <button type="submit" className="btn btn-primary btn-block">Add Product</button>
                    </form>
                </div>
            </div>

            {/* All Products Card (Table) */}
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">All Products</h3>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table id="productsTable" className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th className="text-center">ID</th>
                                    <th className="text-center">Product Name</th>
                                    <th className="text-center">Category</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* PHP if (!empty($products)) এর পরিবর্তে Conditional Rendering */}
                                {products.length > 0 ? (
                                    // PHP foreach এর পরিবর্তে JavaScript map
                                    products.map((product) => (
                                        <tr key={product.id}>
                                            <td className="text-center">{product.id}</td>
                                            <td className="text-center">{product.product_name}</td>
                                            <td className="text-center">{product.category_name}</td>
                                            <td className="d-flex justify-content-center">
                                                {/* Edit Button */}
                                                <Link 
                                                    to={`/edit-product/${product.id}`} 
                                                    className="btn btn-sm btn-info me-1" // me-1 for margin-right
                                                >
                                                    Edit
                                                </Link>
                                                {/* Delete Button */}
                                                <button 
                                                    onClick={() => handleDelete(product.id)}
                                                    className="btn btn-sm btn-danger"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center">No products found.</td>
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

export default ManageProducts;