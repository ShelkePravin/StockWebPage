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
        },
        {
          label: "Transaction charges",
          values: [
            "NSE: 0.00297%\n BSE: 0.00375%",
            "NSE: 0.00297%\n BSE: 0.00375%",
            "NSE: 0.00173%\n BSE: 0",
            "NSE: 0.03503% (on premium)\n BSE: 0.0325% (on premium)"
          ]
        }
      ]
    },
    currency: {
      headers: [
        "",
        "Currency futures",
        "Currency options"
      ],
      rows: [
          {
            label: "Brokerage",
            values: [
              "0.03% or ₹ 20/executed order whichever is lower",
              "₹ 20/executed order"
            ]
          },
          {
            label: "STT/CTT",
            values: [
              "No STT",
              "No STT"
            ]
          },
          {
            label: "Transaction charges",
            values: [
              "NSE: 0.00035%\nBSE: 0.00045%",
              "NSE: 0.0311%\nBSE: 0.001%"
            ]
          }
      ]
    },
    commodity: {
      headers: [
        "",
        "Commodity futures",
        "Commodity options"
      ],
      rows: [
        {
          label:"Brokerage",
          values: [
            "0.03% or ₹ 20/executed order whichever is lower",
            "₹ 20/executed order"
          ]
        },
        {
          label: "STT/CTT",
          values: [
            "0.01% on sell side (Non-Agri)",
            "0.05% on sell side"
          ]
        },
        {
          label: "Transaction charges",
          values: [
            "MCX: 0.0021% \n NSE: 0.0001%",
            "MCX: 0.0418%\nNSE: 0.001%"
          ]
        },
        {
          label: "GST",
          values: [
            "18% on (brokerage + SEBI charges + transaction charges)",
            "18% on (brokerage + SEBI charges + transaction charges)"
          ]
        },
        {
          label: "SEBI charges",
          values: [
            "Agri: ₹ 1 / crore \n Non-Agri: ₹ 10 / crore",
            "₹10 / crore"
          ]
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
                ? "border-bottom border-primary text-primary"
                : "text-dark"
            }`}
            style={{ cursor: "pointer", fontSize:"24px" }}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}
      </div>

      {/* Table */}
      {tables[activeTab] && (
        <div className="table-responsive p-3 mt-4">
          <table className="table mb-0 table-striped">
            <thead>
              <tr className="p-2">
                {tables[activeTab].headers.map((head, index) => (
                  <th key={index} className="text-muted fw-normal p-3 border">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {tables[activeTab].rows.map((row, index) => (
                <tr key={index}>
                  <td className="fw-semibold p-3">{row.label}</td>
                  {row.values.map((val, i) => (
                    <td key={i} className="p-3">{val}</td>
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
