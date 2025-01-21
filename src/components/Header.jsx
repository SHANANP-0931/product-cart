import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    return (
        <div>

            <header className="">
                <nav className="navbar navbar-expand-lg navbar-light container">
                    <a href="#" className="navbar-brand text-primary fw-bold">
                        <img width={"40px"} src="https://webstockreview.net/images/fashion-clipart-fashion-photography-5.png" alt="" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/products">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Contact</a>
                            </li>
                        </ul>

                    </div>
                </nav>
                <hr />
            </header>
        </div>
    );
}
export default Header;