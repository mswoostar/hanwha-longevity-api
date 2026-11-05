import express from "express";

const app = express();

app.use(express.json({ limit: "16kb" }));

app.get("/", (req, res) => {
  res.json({
    service: "HANWHA LONGEVITY API",
    status: "running",
    aiConnected: false
  });
});

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

const port = Number(process.env.PORT || 3000);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});
