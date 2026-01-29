import React from "react";

function Hero() {
    return (
        <div className="bg-light">
            <div className="container">
                <div className="row py-4">
                    <div className="col-10">
                        <h2>Support Portal</h2>
                    </div>
                    <div className="col-2 text-end">
                        <button className="btn btn-primary mt-3">My Ticket</button>
                    </div>
                </div>
                <form className="d-flex py-3" role="search">
                    <input className="form-control me-2 py-3" type="search" placeholder="Search" aria-label="Search" />
                </form>
            </div>
        </div>

    );
}

export default Hero;    