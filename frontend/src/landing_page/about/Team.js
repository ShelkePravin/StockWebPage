import React from "react";

function Team() {
    return ( 
        <div className="container">
            <div className="row mb-1">
                <h1 className="text-center fs-2">Pepole</h1>
            </div>
            <div className="row p-3 text-muted fs-6" style={{ lineHeight: "1.8", fontSize: "1.2rem" }}>
                <div className="col-6 p-5 text-center">
                     <img src="media/images/nithinKamath.jpg" style={{borderRadius: "100%", width:"60%"}}/>
                     <h5 className="mt-4">Nithin Kamath</h5>
                     <h6>Founder, CEO</h6>
                </div>
                <div className="col-6 p-5">
                     <p style={{fontSize:"17px"}}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p style={{fontSize:"17px"}}>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p style={{fontSize:"17px"}}>Playing basketball is his zen.</p>
                    <p style={{fontSize:"17px"}}>Connect on <a href="#" className="text-decoration-none link-primary">Homepage</a> / <a href="#" className="text-decoration-none link-primary">TradingQnA</a> / <a href="#" className="text-decoration-none link-primary">Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;