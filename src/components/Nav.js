import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary-app" id="principalNav">
            <div className="container-fluid my-3">
                <a className="navbar-brand text-white fw-bold" href="#">sunnyside</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item ">
                            <a className="nav-link active text-white" aria-current="page" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
