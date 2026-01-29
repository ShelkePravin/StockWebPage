import React from "react";

function Universe() {
    return (
        <div className="container">
            {/* Blog Section */}
            <div className="p-5">
                <h5 className="text-center text-muted">
                    Want to know more about our technology stack? Check out the{" "}
                    <a href="#" className="text-decoration-none">
                        Zerodha.tech
                    </a>{" "}
                    blog.
                </h5>
            </div>

            {/* Heading Section */}
            <div className="text-center mb-4">
                <h3>The Zerodha Universe</h3>
                <p className="text-muted">
                    Extend your trading and investment experience even further with our
                    partner platforms
                </p>
            </div>

            {/* Logos Section */}
            <div className="row text-center p-5">
                <div className="col-4 p-5 lh-base">
                    <img
                        src="/media/images/ZerodhaFundHouse.png"
                        alt="Zerodha Fund House"
                        style={{ width: "200px" }}
                        className="mb-4"
                    />
                    <p style={{ fontSize: "12px", paddingLeft: "20px", paddingRight: "20px" }}>
                        Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
                    </p>
                </div>

                <div className="col-4 p-5 lh-base">
                    {/* Future logo */}
                    <img
                        src="/media/images/sensibullLogo.svg"
                        alt="Zerodha Fund House"
                        style={{ width: "200px" }}
                        className="mb-4"
                    />
                    <p style={{ fontSize: "12px", paddingLeft: "20px", paddingRight: "20px" }}>
                        Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>

                <div className="col-4 p-5">
                    {/* Future logo */}
                    <img
                        src="/media/images/streakLogo.png"
                        alt="Zerodha Fund House"
                        style={{ width: "200px" }}
                        className="mb-4"
                    />
                    <p style={{ fontSize: "12px", paddingLeft: "20px", paddingRight: "20px" }}>
                        Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.
                    </p>
                </div>

                <div className="col-4 p-5">
                    {/* Future logo */}
                    <img
                        src="/media/images/smallcaseLogo.png"
                        alt="Zerodha Fund House"
                        style={{ width: "200px" }}
                        className="mb-4"
                    />
                    <p style={{ fontSize: "12px", paddingLeft: "20px", paddingRight: "20px" }}>
                        Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.
                    </p>
                </div>

                <div className="col-4 p-5">
                    {/* Future logo */}
                    <img
                        src="/media/images/dittoLogo.png"
                        alt="Zerodha Fund House"
                        style={{ width: "200px" }}
                        className="mb-4"
                    />
                    <p style={{ fontSize: "12px", paddingLeft: "20px", paddingRight: "20px" }}>
                        Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
                    </p>
                </div>

                <div className="col-4 p-5">
                    {/* Future logo */}
                    <img
                        src="/media/images/zerodhafundhouse.png"
                        alt="Zerodha Fund House"
                        style={{ width: "200px" }}
                        className="mb-4"
                    />
                    <p style={{ fontSize: "12px", paddingLeft: "20px", paddingRight: "20px" }}>
                        Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.
                    </p>
                </div>
                <div className="text-center">
                <button className="btn btn-primary p-3">Sign up for free</button>
            </div>
            </div>
            
        </div>
    );
}

export default Universe;
