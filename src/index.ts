import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// Health
app.get("/health", (_req, res) => res.json({ ok: true }));

// Example route
app.get("/", (_req, res) => {
  res.json({ message: "Hello from Express + TypeScript!" });
});

app.use(
  (
    err: unknown,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
);

const port = Number(process.env.PORT ?? 8000);
app.listen(port, () => {
  console.log(`🚀 Server listening on http://localhost:${port}`);
});
