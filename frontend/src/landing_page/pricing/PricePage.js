import React from "react";
import Brokerage from "./Brokerage";
import Hero from "./Hero";
import Price from "./Price";
import BorkerTable from "./BorkerTable";

function PricePage() {
    return ( 
        <>
            <Hero />
            <Price></Price>
            <BorkerTable/>
            <Brokerage />
        </>
     );
}

export default PricePage;