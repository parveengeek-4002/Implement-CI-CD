import express from "express";
import authRoutes from "./routes/auth.routes";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (_req, res) => {
  res.send("Hello CI/CD backend is running ");
});

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "success",
    message: "Server is healthy",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  // console.log(`Database connected to ${process.env.DATABASE_URL}`);
});
