import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary custom-btn border-bottom">
            <div className="container p-2">

                <NavLink className="navbar-brand" to="/">
                    <img
                        src="media/images/logo.svg"
                        style={{ width: "25%" }}
                        alt="logo"
                    />
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-lg-0 ms-auto">

                        <li className="nav-item">
                            <NavLink
                                to="/signup"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                Signup
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                About
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                Product
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/pricing"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                Pricing
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/support"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                Support
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link active" to="#">
                                <i className="fa-solid fa-bars"></i>
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
