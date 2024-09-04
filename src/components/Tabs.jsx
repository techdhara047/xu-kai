import React, { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <div>
      <div
        className="tabs"
        style={{ display: "flex", borderBottom: "2px solid #ccc" }}
      >
        {tabs.map((label, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
            style={{
              padding: "10px 20px",
              cursor: "pointer",
              border: "none",
              outline: "none",
              backgroundColor: activeTab === index ? "#f0f0f0" : "transparent",
              borderBottom: activeTab === index ? "2px solid #000" : "none",
              transition: "background-color 0.3s ease",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {tabs.map((_, index) => (
        <div
          key={index}
          className={`content ${activeTab === index ? "active" : ""}`}
          style={{
            display: activeTab === index ? "block" : "none",
            padding: "20px",
          }}
        >
          <p>Content for {tabs[index]}</p>
        </div>
      ))}
    </div>
  );
}

export default Tabs;
