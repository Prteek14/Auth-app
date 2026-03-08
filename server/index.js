// external modules
const express = require("express");
const cors  = require("cors");
require("dotenv").config();

// local modules
const dbConnect = require("./db/dbConnect");
const userRouter = require("./routes/userRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

dbConnect();

app.use(cors({
  origin: "https://auth-app-frontend-d0e5.onrender.com",
  credentials: true
}));

app.use(express.json());

app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log(`your server is running on http://localhost:${PORT}`);
});
