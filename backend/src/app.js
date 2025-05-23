import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.port || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
  const connectionDB = await mongoose.connect(
    "mongodb+srv://akankshaanand2512:micro2512@cluster0.uumckh1.mongodb.net/"
  );
  console.log(`Mongo connected, DB Host: ${connectionDB.connection.host}`);

  server.listen(app.get("port"), () => {
    console.log("Listening on port 8000");
  });
};
start();
