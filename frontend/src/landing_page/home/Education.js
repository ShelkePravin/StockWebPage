import React from "react";

function Education() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/education.svg' alt='BokerImage' style={{width:'70%'}}/>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1 className='fs-3'>Free and open market education</h1>
                    <p className='mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" className="" style={{textDecoration:"none"}}>Varsity &nbsp; <i class="fa-solid fa-arrow-right-long"></i></a>

                    <p className='mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" className="" style={{textDecoration:"none"}}>TradingQ&A &nbsp; <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;