import React from "react";

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className="container mt-5">
            <div className="row" style={{paddingLeft: "4%", paddingRight: "4%"}}>
                <div className="col-6">
                    <img src={imageURL} alt="image_url"/>
                </div>
                <div className="col-6 mt-5" style={{paddingLeft: "6%"}}>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>&nbsp;&nbsp;
                        <a href={learnMore} style={{marginLeft : "50px", textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    
                    <div className="mt-4">
                        <a href={googlePlay} className="mx-2"><img src="media/images/googlePlayBadge.svg" alt="image_link"/></a>
                        <a href={appStore}><img src="media/images/appstoreBadge.svg" alt="image_link"/></a>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default LeftSection;