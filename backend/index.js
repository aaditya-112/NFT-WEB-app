const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

// database connection file

const { connectDB } = require("./lib/DB");
const userRoute = require("./routes/user.route");
const nftRoute = require("./routes/Nft.route");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", // ✅ specify exact origin
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/api/user", userRoute);
app.use("/api/nft", nftRoute);

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`connected to port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
