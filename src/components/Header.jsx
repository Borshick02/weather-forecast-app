import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
       
        padding: "1rem 2rem",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
        <Link
          to="/"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Weather Forecast
        </Link>
      </h1>
      <nav>
        <Link
          to="/"
          style={{
            margin: "0 15px",
            color: "#fff",
            textDecoration: "none",
            fontSize: "1.1rem",
            fontWeight: "500",
          }}
        >
          Home
        </Link>
        <Link
          to="/favorites"
          style={{
            margin: "0 15px",
            color: "#FFFF66",
            textDecoration: "none",
            fontSize: "1.1rem",
            fontWeight: "500",
          }}
        >
          City
        </Link>
      </nav>
    </header>
  );
}

export default Header;
