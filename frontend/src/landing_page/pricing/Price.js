import React from "react";

function Price () {
    return (
        <div className="container mt-3">
            <div className="row px-5">
                <div className="col-4 px-3 text-center">
                    <img src="./media/images/pricing0.svg" alt="price_image" style={{width: "80%"}}/>
                    <h2>Free equity delivery</h2>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 px-3 text-center">
                    <img src="./media/images/intradayTrades.svg" alt="price_image" style={{width: "80%"}}/>
                    <h2>Intraday and F&O trades</h2>
                    <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 px-3 text-center">
                    <img src="./media/images/pricing0.svg" alt="price_image" style={{width: "80%"}}/>
                    <h2>Free direct MF</h2>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    )
}

export default Price;