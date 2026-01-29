import React, { useState } from "react";

function PricingTable() {
  const [activeTab, setActiveTab] = useState("equity");

  const tables = {
    equity: {
      headers: [
        "",
        "Equity delivery",
        "Equity intraday",
        "F&O - Futures",
        "F&O - Options"
      ],
      rows: [
        {
          label: "Brokerage",
          values: [
            "Zero Brokerage",
            "0.03% or Rs. 20/executed order whichever is lower",
            "0.03% or Rs. 20/executed order whichever is lower",
            "Flat Rs. 20 per executed order"
          ]
        },
        {
          label: "STT/CTT",
          values: [
            "0.1% on buy & sell",
            "0.025% on the sell side",
            "0.02% on the sell side",
            "0.1% on sell side (on premium)"
          ]
        },
        {
          label: "SEBI charges",
          values: ["₹10 / crore", "₹10 / crore", "₹10 / crore", "₹10 / crore"]
        }
      ]
    }
  };

  return (
    <div className="container mt-4 p-5">
      {/* Tabs */}
      <div className="d-flex border-bottom">
        {["equity", "currency", "commodity"].map((tab) => (
          <div
            key={tab}
            className={`me-4 pb-2 ${
              activeTab === tab
                ? "border-bottom border-primary text-dark"
                : "text-primary"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}
      </div>

      {/* Table */}
      {activeTab === "equity" && (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                {tables.equity.headers.map((head, index) => (
                  <th key={index} className="text-muted fw-normal">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {tables.equity.rows.map((row, index) => (
                <tr key={index}>
                  <td className="fw-semibold">{row.label}</td>
                  {row.values.map((val, i) => (
                    <td key={i}>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default PricingTable;
