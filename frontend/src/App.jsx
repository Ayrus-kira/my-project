import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://100.53.238.149:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          background: "#e23744",
          color: "white",
          padding: "20px",
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "bold",
        }}
      >
        DiwaliHub
      </div>

      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        Diwali Products
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "40px",
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              background: "white",
              padding: "20px",
              width: "250px",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2>{item.name}</h2>
            <p>₹ {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
