const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: "Diwali Sweets Box", price: 499 },
  { id: 2, name: "Diyas Pack", price: 199 },
  { id: 3, name: "Gift Hamper", price: 899 },
];

app.get("/", (req, res) => {
  res.send("DiwaliHub Backend Running");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Backend running on port 5000");
});
