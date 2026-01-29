import React from "react";
import Brokerage from "./Brokerage";
import Hero from "./Hero";
import Price from "./Price";
import BorkerTable from "./BorkerTable";
import ChargeTable from "./chargeTable";

function PricePage() {
    return ( 
        <>
            <Hero />
            <Price></Price>
            <BorkerTable/>
            <ChargeTable />
            <Brokerage />
        </>
     );
}

export default PricePage;