import express from "express";
import cors from "cors";
import { getResortById, sortedByName, parseResortId } from "./resorts.js"

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(cors({
  origin: ["http://localhost:5173"],
  credentials: true
}));

app.get("/api/hello", (req, res) => {
  res.json({ message: "If you see this message, the API is working!" });
});

app.get("/api/resorts", (req, res) => {
  res.json(sortedByName());
});

app.get("/api/resorts/:id", (req, res) => {
  const id: string = req.params.id;

  const numId = parseResortId(id);
  if (numId === null) {
    res.status(400).json({ error: {code: "INVALID_RESORT_ID", message: `Invalid resort id: ${id}` } });
    return;
  }

  const resort = getResortById(numId);
  if (!resort) {
    res.status(404).json({ error: { code: "RESORT_NOT_FOUND", message: `Resort ${id} not found` } });
    return;
  }
  res.json(resort);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});