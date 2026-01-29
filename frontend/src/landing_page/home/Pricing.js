import React from "react";

function Pricing() {
    return ( 
        <div className="container p-3">
            <div className="row p-5">
                <div className="col-5 p-5">
                    <h1 className="mb-3 fs-3">Undeatable Pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration:"none"}}>See Pricing&nbsp; <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                {/* <div className="col-2"></div> */}
                <div className="col-7 p-2 mt-5">
                    <div className="row">
                        <div className="col-4 d-flex justify-content-between">
                            <div className="col-7">
                                <img src="media/images/pricing-eq.svg" alt="" style={{width:'120%'}}/>
                            </div>
                            <div className="col-5">
                                <p style={{fontSize:'12px', padding:'45px 0 0 0'}}> Free account opening</p>
                            </div>
                        </div>
                        <div className="col-4 d-flex justify-content-between">
                            <div className="col-7">
                                <img src="media/images/pricing-eq.svg" alt="" style={{width:'120%'}}/>
                            </div>
                            <div className="col-5">
                                <p style={{fontSize:'12px', padding:'45px 0 0 0'}}>Free equity delivery and direct mutual funds</p>
                            </div>
                        </div>
                        <div className="col-4 d-flex justify-content-between">
                            <div className="col-7">
                                <img src="media/images/other-trades.svg" alt="" style={{width: '115%'}}/>
                            </div>
                            <div className="col-5">
                                <p style={{fontSize:'12px', padding:'45px 0 0 0'}}> Intraday and
                                F&O</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;