import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <h1 className="mt-5 fs-3">
                    404 Not Found
                </h1>
                <p className="mt-4 fs-6 text-muted">
                    Sorry, the page you looking for does not exist.
                </p>
            </div>
        </div>
     );
}

export default NotFound;