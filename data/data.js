const fs = require("node:fs/promises");
const path = require("node:path");

const filePath = path.join(__dirname, "../items.json");

async function getStoredItems() {
  try {
    const rawFileContent = await fs.readFile(filePath, { encoding: "utf-8" });
    const data = JSON.parse(rawFileContent);
    return data.items ?? [];
  } catch (error) {
    console.error("Error reading items:", error);
    return [];
  }
}

async function storeItems(items) {
  try {
    await fs.writeFile(filePath, JSON.stringify({ posts: posts || [] }));
  } catch (error) {
    console.error("Error writing items:", error);
  }
}

module.exports = { getStoredItems, storeItems };