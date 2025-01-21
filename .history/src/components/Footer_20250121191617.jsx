import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    {/* Social Media Section */}
                    <div className="col-md-4 text-center mb-3">
                        <h5>Follow Us</h5>
                        <div className="d-flex justify-content-center">
                            <a
                                href="#"
                                className="text-light me-3"
                                aria-label="Facebook"
                            >
                                <i className="fab fa-facebook-f fa-lg"></i>
                            </a>
                            <a
                                href="#"
                                className="text-light me-3"
                                aria-label="Twitter"
                            >
                                <i className="fab fa-twitter fa-lg"></i>
                            </a>
                            <a
                                href="#"
                                className="text-light me-3"
                                aria-label="Instagram"
                            >
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                            <a
                                href="#"
                                className="text-light"
                                aria-label="LinkedIn"
                            >
                                <i className="fab fa-linkedin fa-lg"></i>
                            </a>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="col-md-4 text-center mb-3">
                        <h5>Contact Us</h5>
                        <p className="mb-1">
                            <i className="fas fa-phone-alt me-2"></i> +1 234 567 890
                        </p>
                        <p className="mb-1">
                            <i className="fas fa-envelope me-2"></i> info@example.com
                        </p>
                        <p>
                            <i className="fas fa-map-marker-alt me-2"></i> 1234 Street Name, City,
                            Country
                        </p>
                    </div>

                    {/* Copyright Notice */}
                    <div className="col-md-4 text-center">
                        <h5>About Us</h5>
                        <p>
                            Delivering quality services and exceptional user experiences since
                            2022.
                        </p>
                        <p className="mt-3">
                            © {new Date().getFullYear()} Your Company Name. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
