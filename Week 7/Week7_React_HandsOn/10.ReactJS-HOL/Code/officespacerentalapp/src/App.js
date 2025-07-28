import React from "react";
import officeImage from "./assets/Office.jpg";

export default function App() {
  const office = {
    name: "DBS",
    rent: 50000,
    address: "Chennai",
  };

  // Determine rent color
  const rentColor = office.rent < 60000 ? "red" : "green";

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1>Office Space, at Affordable Range</h1>

      <img
        src={officeImage}
        alt="Office Space"
        style={{
          width: "300px",
          height: "200px",
          borderRadius: "10px",
          marginBottom: "15px",
        }}
      />

      <p
        style={{
          fontWeight: "bold",
          color: "black",
          fontSize: "24px",
          margin: "10px 0 5px",
        }}
      >
        Name: {office.name}
      </p>

      <p
        style={{
          fontWeight: "bold",
          color: rentColor,
          fontSize: "16px",
          margin: "5px 0",
        }}
      >
        Rent: Rs. {office.rent}
      </p>

      <p
        style={{
          fontWeight: "bold",
          color: "black",
          fontSize: "16px",
          margin: "5px 0",
        }}
      >
        Address: {office.address}
      </p>
    </div>
  );
}
