import React from "react";

function RightSection({imageURL, productName, productDescription, learnMore}) {
    return ( 
        <div className="container mt-5">
            <div className="row" style={{paddingLeft: "4%", paddingRight: "4%"}}>
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore} style={{textDecoration:"none"}}>Learn More &nbsp; <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-6">
                    <img src={imageURL} alt="image_url"/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;