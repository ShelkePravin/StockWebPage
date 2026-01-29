import React from "react";

function CreateTicket() {
    return (
        <div className="container">
            <div className="row p-5">
                <div className="col-8">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item mb-3">

                            <h2 className="accordion-header zoom-hover">
                                <button
                                    className="accordion-button d-flex align-items-center justify-content-between"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    {/* Left Side (Icon + Heading) */}
                                    <div className="d-flex align-items-center gap-2">
                                        {/* Blue Icon Box */}
                                        <div
                                            className="d-flex align-items-center justify-content-center"
                                            style={{
                                                width: "32px",
                                                height: "32px",
                                                // backgroundColor: "#0d6efd",
                                                borderRadius: "6px"
                                            }}
                                        >
                                            <i className="fa-solid fa-circle-plus" style={{fontSize: "25px"}}></i>
                                        </div>

                                        {/* Heading */}
                                        <span className="fw-semibold">Account Opening</span>
                                    </div>

                                    {/* Right Arrow */}
                                    <i className="bi bi-chevron-down text-primary"></i>
                                </button>
                            </h2>

                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <ul className=" text-primary py-2">
                                        <li className="py-2 liColor">Resident individual</li>
                                        <li className="py-2 liColor">Minor</li>
                                        <li className="py-2 liColor">Non Resident Indian (NRI)</li>
                                        <li className="py-2 liColor">Company, Partnership, HUF and LLP</li>
                                        <li className="py-2 liColor">Glossary</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header zoom-hover">
                                <button
                                    className="accordion-button d-flex align-items-center justify-content-between"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    {/* Left Side (Icon + Heading) */}
                                    <div className="d-flex align-items-center gap-2">
                                        {/* Blue Icon Box */}
                                        <div
                                            className="d-flex align-items-center justify-content-center"
                                            style={{
                                                width: "32px",
                                                height: "32px",
                                                // backgroundColor: "#0d6efd",
                                                borderRadius: "6px"
                                            }}
                                        >
                                            <i className="fa-solid fa-circle-user" style={{fontSize: "25px"}}></i>
                                        </div>

                                        {/* Heading */}
                                        <span className="fw-semibold">Your Zerodha Account</span>
                                    </div>

                                    {/* Right Arrow */}
                                    <i className="bi bi-chevron-down text-primary"></i>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <ul className=" text-primary py-2">
                                        <li className="py-2 liColor">Your Profile</li>
                                        <li className="py-2 liColor">Account modification</li>
                                        <li className="py-2 liColor">Client Master Report (CMR) and Depository Participant (DP)</li>
                                        <li className="py-2 liColor">Nomination</li>
                                        <li className="py-2 liColor">Transfer and conversion of securities</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header zoom-hover">
                                <button
                                    className="accordion-button d-flex align-items-center justify-content-between"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    {/* Left Side (Icon + Heading) */}
                                    <div className="d-flex align-items-center gap-2">
                                        {/* Blue Icon Box */}
                                        <div
                                            className="d-flex align-items-center justify-content-center"
                                            style={{
                                                width: "36px",
                                                height: "36px",
                                                // backgroundColor: "#0d6efd",
                                                borderRadius: "6px"
                                            }}
                                        >
                                            <i className="fa-solid fa-bore-hole" style={{fontSize: "25px"}}></i>
                                        </div>

                                        {/* Heading */}
                                        <span className="fw-semibold">Kite</span>
                                    </div>

                                    {/* Right Arrow */}
                                    <i className="bi bi-chevron-down text-primary"></i>
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <ul className=" text-primary py-2">
                                        <li className="py-2 liColor">IPO</li>
                                        <li className="py-2 liColor">Trading FAQs</li>
                                        <li className="py-2 liColor">Margin Trading Facility (MTF) and Margins</li>
                                        <li className="py-2 liColor">Charts and orders</li>
                                        <li className="py-2 liColor">Alerts and Nudges</li>
                                         <li className="py-2 liColor">General</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header zoom-hover">
                                <button
                                    className="accordion-button d-flex align-items-center justify-content-between"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour"
                                    aria-expanded="false"
                                    aria-controls="collapseFour"
                                >
                                    {/* Left Side (Icon + Heading) */}
                                    <div className="d-flex align-items-center gap-2">
                                        {/* Blue Icon Box */}
                                        <div
                                            className="d-flex align-items-center justify-content-center"
                                            style={{
                                                width: "36px",
                                                height: "36px",
                                                // backgroundColor: "#0d6efd",
                                                borderRadius: "6px"
                                            }}
                                        >
                                            <i className="fa-solid fa-indian-rupee-sign" style={{fontSize: "25px"}}></i>
                                        </div>

                                        {/* Heading */}
                                        <span className="fw-semibold">Funds</span>
                                    </div>

                                    {/* Right Arrow */}
                                    <i className="bi bi-chevron-down text-primary"></i>
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <ul className=" text-primary py-2">
                                        <li className="py-2 liColor">IPO</li>
                                        <li className="py-2 liColor">Trading FAQs</li>
                                        <li className="py-2 liColor">Margin Trading Facility (MTF) and Margins</li>
                                        <li className="py-2 liColor">Charts and orders</li>
                                        <li className="py-2 liColor">Alerts and Nudges</li>
                                         <li className="py-2 liColor">General</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header zoom-hover">
                                <button
                                    className="accordion-button d-flex align-items-center justify-content-between"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive"
                                    aria-expanded="false"
                                    aria-controls="collapseFive"
                                >
                                    {/* Left Side (Icon + Heading) */}
                                    <div className="d-flex align-items-center gap-2">
                                        {/* Blue Icon Box */}
                                        <div
                                            className="d-flex align-items-center justify-content-center"
                                            style={{
                                                width: "36px",
                                                height: "36px",
                                                // backgroundColor: "#0d6efd",
                                                borderRadius: "6px"
                                            }}
                                        >
                                            <i className="fa-brands fa-connectdevelop" style={{fontSize: "25px"}}></i>
                                        </div>

                                        {/* Heading */}
                                        <span className="fw-semibold">Coin</span>
                                    </div>

                                    {/* Right Arrow */}
                                    <i className="bi bi-chevron-down text-primary"></i>
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <ul className=" text-primary py-2">
                                        <li className="py-2 liColor">IPO</li>
                                        <li className="py-2 liColor">Trading FAQs</li>
                                        <li className="py-2 liColor">Margin Trading Facility (MTF) and Margins</li>
                                        <li className="py-2 liColor">Charts and orders</li>
                                        <li className="py-2 liColor">Alerts and Nudges</li>
                                         <li className="py-2 liColor">General</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 px-5">
                    <div style={{backgroundColor: "#fff3e3", paddingTop: "10px", paddingBottom: "10px", borderLeft: "5px solid #ff9100"}}>
                        <ul className="text-primary">
                            <li className="py-2"><a href="#">Offer for sale (OFS) – January 2026</a></li>
                            <li className="py-2"><a href="#">Modification in the contract specifications in Silver and Silver Mini Options Contracts</a></li>
                        </ul>
                    </div>

                    <div className="py-3">
                        <table className="table border">
                            <thead>
                                <tr>
                                    <th className="py-3 bg-light">Quick Links</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-3"><a href="#" className="text-decoration-none">1. Track account opening</a></td>
                                </tr>
                                <tr>
                                    <td className="py-3"><a href="#" className="text-decoration-none">2. Track segment activation</a></td>
                                </tr>
                                <tr>
                                    <td className="py-3"><a href="#" className="text-decoration-none">3. Intraday margins</a></td>
                                </tr>
                                <tr>
                                    <td className="py-3"><a href="#" className="text-decoration-none">4. Kite user manual</a></td>
                                </tr>
                                <tr>
                                    <td className="py-3"><a href="#" className="text-decoration-none">5.  Learn how to create a ticket</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;