import React from "react";

function chargeTable() {
    return(
        <div className="container">
            <h3 className="text-left mt-4 px-4">Charges for account opening</h3>
            <div className="px-5 py-3">
                <table className="table border table-striped p-4">
                <thead>
                    <tr className="border-bottom">
                        <th>Type of account</th>
                        <th>Charges</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Online account</td>
                        <td><button className="px-4 py-1" style={{backgroundColor:"lightgreen", color: "white", border: "none"}}>FREE</button></td>
                    </tr>
                    <tr>
                        <td>Online account</td>
                        <td><button className="px-4 py-1" style={{backgroundColor:"lightgreen", color: "white", border: "none"}}>FREE</button></td>
                    </tr>
                    <tr>
                        <td>NRI account (offline only)</td>
                        <td>₹ 500</td>
                    </tr>
                    <tr>
                        <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                        <td>₹ 500</td>
                    </tr>
                </tbody>
                
            </table>
            </div>
            
        </div>
    )
}

export default chargeTable;