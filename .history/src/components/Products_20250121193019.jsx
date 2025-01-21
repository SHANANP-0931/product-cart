import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetails = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [fashionType, setFashionType] = useState('All');

    // Fetch data from Dummy JSON
    useEffect(() => {
        axios
            .get('https://dummyjson.com/products')
            .then((response) => {
                setProducts(response.data.products);
                setFilteredProducts(response.data.products);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    // Handle Filter Change
    const handleFilterChange = (type) => {
        setFashionType(type);
        if (type === 'All') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter((product) =>
                product.category.toLowerCase().includes(type.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    };

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Fashion Dress Collection</h1>
            {/* Filter Options */}
            <div className="d-flex justify-content-center mb-4">
                <button
                    className={`btn ${fashionType === 'All' ? 'btn-primary' : 'btn-outline-primary'} me-2`}
                    onClick={() => handleFilterChange('All')}
                >
                    All
                </button>
                <button
                    className={`btn ${fashionType === 'Women' ? 'btn-primary' : 'btn-outline-primary'} me-2`}
                    onClick={() => handleFilterChange('Women')}
                >
                    Women
                </button>
                <button
                    className={`btn ${fashionType === 'Men' ? 'btn-primary' : 'btn-outline-primary'} me-2`}
                    onClick={() => handleFilterChange('Men')}
                >
                    Men
                </button>
                <button
                    className={`btn ${fashionType === 'Jewelry' ? 'btn-primary' : 'btn-outline-primary'} me-2`}
                    onClick={() => handleFilterChange('Jewelry')}
                >
                    Jewelry
                </button>
            </div>

            {/* Product List */}
            <div className="row">
                {filteredProducts.map((product) => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card h-100 shadow-sm">
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="card-img-top"
                                style={{ height: '250px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text text-muted">{product.description}</p>
                                <ul className="list-unstyled">
                                    <li>
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        Rating: {product.rating}
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        Stock: {product.stock}
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="fw-bold text-danger">${product.price}</span>
                                    <button className="btn btn-primary btn-sm">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductDetails;
