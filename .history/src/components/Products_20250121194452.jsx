import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetails = () => {
    const [products, setProducts] = useState([]);

    // Fetch products from Dummy JSON
    useEffect(() => {
        axios
            .get('https://dummyjson.com/products')
            .then((response) => {
                const allProducts = response.data.products.slice(0, 9); // Get the first 9 products
                const repeatedProducts = [...allProducts, ...allProducts]; // Repeat the first 9 products twice
                setProducts(repeatedProducts);
            })
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Fashion Dress Collection</h1>

            {/* Product List */}
            <div className="row">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <div className="col-md-4 mb-4" key={index}>
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
                    ))
                ) : (
                    <div className="text-center">
                        <p className="text-muted">No products available at the moment.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;
