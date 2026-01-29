import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="border-top" style={{ backgroundColor: "rgb(250, 250, 250)" }}>
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col">
                        <img src="media/images/logo.svg" alt="logo" style={{ width: "50%" }} />
                        <p className="mt-3">
                            © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
                        </p>

                        <ul className="d-flex list-unstyled border-bottom">
                            <li className="stle"><i className="fa-brands fa-x-twitter"></i></li>
                            <li className="stle"><i className="fa-brands fa-square-facebook"></i></li>
                            <li className="stle"><i className="fa-brands fa-instagram"></i></li>
                            <li className="stle"><i className="fa-brands fa-linkedin-in"></i></li>
                        </ul>

                        <ul className="d-flex list-unstyled">
                            <li className="stle"><i className="fa-brands fa-youtube"></i></li>
                            <li className="stle"><i className="fa-brands fa-whatsapp"></i></li>
                            <li className="stle"><i className="fa-brands fa-telegram"></i></li>
                        </ul>
                    </div>

                    {/* Account */}
                    <div className="col">
                        <p className="fw-bold">Account</p>
                        <Link to="/open-account" className="text-decoration-none text-dark link-primary d-inline-block pt-2">Open demat account</Link><br />
                        <Link to="/minor-account" className="text-decoration-none text-dark link-primary d-inline-block pt-2">Minor demat account</Link><br />
                        <Link to="/nri-account" className="text-decoration-none text-dark link-primary d-inline-block pt-2">NRI demat account</Link><br />
                        <Link to="/commodity" className="text-decoration-none text-dark link-primary d-inline-block pt-2">Commodity</Link><br />
                        <Link to="/dematerialisation" className="text-decoration-none text-dark link-primary d-inline-block pt-2">Dematerialisation</Link><br />
                        <Link to="/fund-transfer" className="text-decoration-none text-dark link-primary d-inline-block pt-2">Fund transfer</Link><br />
                        <Link to="/mtf" className="text-decoration-none text-dark link-primary d-inline-block pt-2">MTF</Link><br />
                        <Link to="/referral" className="text-decoration-none text-dark link-primary d-inline-block pt-2">Referral program</Link>
                    </div>

                    {/* Support */}
                    <div className="col">
                        <p className="fw-bold">Support</p>
                        <Link to="/contact" className="text-decoration-none text-dark link-primary d-inline-block pt-2">Contact us</Link><br />
                        <Link to="/support" className="text-decoration-none text-dark link-primary d-inline-block pt-2">Support portal</Link><br />
                        <Link to="/complaint" className="text-decoration-none text-dark link-primary d-inline-block pt-2">How to file a complaint?</Link><br />
                        <Link to="/complaint-status" className="text-decoration-none text-dark link-primary d-inline-block pt-2">Status of your complaints</Link><br />
                        <Link to="/bulletin" className="text-decoration-none text-dark link-primary d-inline-block pt-2">Bulletin</Link><br />
                        <Link to="/circular" className="text-decoration-none text-dark link-primary d-inline-block pt-2">Circular</Link><br />
                        <Link to="/blog" className="text-decoration-none text-dark link-primary d-inline-block pt-2">Z-Connect blog</Link><br />
                        <Link to="/downloads" className="text-decoration-none text-dark link-primary d-inline-block pt-2">Downloads</Link>
                    </div>

                    {/* Company */}
                    <div className="col">
                        <p className="fw-bold">Company</p>
                        <Link to="/about" className="text-decoration-none text-dark link-primary d-inline-block pt-2">About</Link><br />
                        <Link to="/philosophy" className="text-decoration-none text-dark link-primary d-inline-block pt-2">Philosophy</Link><br />
                        <Link to="/press" className="text-decoration-none text-dark link-primary d-inline-block pt-2">Press & media</Link><br />
                        <Link to="/careers" className="text-decoration-none text-dark link-primary d-inline-block pt-2">Careers</Link><br />
                        <Link to="/csr" className="text-decoration-none text-dark link-primary d-inline-block pt-2">Zerodha Cares (CSR)</Link><br />
                        <Link to="/tech" className="text-decoration-none text-dark link-primary d-inline-block pt-2">Zerodha.tech</Link><br />
                        <Link to="/opensource" className="text-decoration-none text-dark link-primary d-inline-block pt-2">Open source</Link>
                    </div>

                    {/* Quick Links */}
                    <div className="col">
                        <p className="fw-bold">Quick Links</p>
                        <Link to="/ipo" className="text-decoration-none text-dark link-primary d-inline-block pt-2">Upcoming IPOs</Link><br />
                        <Link to="/brokerage" className="text-decoration-none text-dark link-primary d-inline-block pt-2">Brokerage charges</Link><br />
                        <Link to="/holidays" className="text-decoration-none text-dark link-primary d-inline-block pt-2">Market holidays</Link><br />
                        <Link to="/calendar" className="text-decoration-none text-dark link-primary d-inline-block pt-2">Economic calendar</Link><br />
                        <Link to="/calculators" className="text-decoration-none text-dark link-primary d-inline-block pt-2">Calculators</Link><br />
                        <Link to="/markets" className="text-decoration-none text-dark link-primary d-inline-block pt-2">Markets</Link><br />
                        <Link to="/sectors" className="text-decoration-none text-dark link-primary d-inline-block pt-2">Sectors</Link>
                    </div>
                </div>

                <div className="row mt-5 text-muted" style={{ fontSize: "10px" }}>
                    <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p><br />
                    <br />
                    <br />
                    <p>
                        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                    </p>
                    <br />
                    <br />
                    <p>
                        Smart Online Dispute Resolution | Grievances Redressal Mechanism
                    </p>
                    <br />
                    <br />
                    <p>
                        Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                    </p>
                    <br />
                    <br />
                    <p>
                        Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                    </p>
                    <br />
                    <br />
                    <p>
                        India's largest broker based on networth as per NSE. NSE broker factsheet
                    </p>
                    <br />
                    <br />
                    <p>
                        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
                    </p>
                    <br />
                    <br />
                    <p>
                        *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
                    </p>
                    <br />
                    <br />
                </div>

                <ul className="d-flex p-2 list-unstyled gap-3 justify-content-end text-muted">
                    <li>NSE</li>
                    <li>BSE</li>
                    <li>MCX</li>
                    <li>Policies</li>
                    <li>Privacy</li>
                    <li>Disclosure</li>
                    <li>Investor charter</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
