const express = require("express");
const bodyParser = require("body-parser");
const { getStoredItems } = require("./data/data");

const app = express();
const PORT = process.env.PORT || 8880;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/items", async (req, res) => {
  const storedItems = await getStoredItems();
  await new Promise((resolve) => setTimeout(() => resolve(), 1000));
  res.json({ items: storedItems });
});

app.get("/items/:id", async (req, res) => {
  const storedItems = await getStoredItems();
  const item = storedItems.find((item) => item.id === req.params.id);
  res.json({ item });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
