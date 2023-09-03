import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(bodyParser.json());
app.use(cookieParser());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});

const MONGODB_URL =
  "mongodb+srv://PedroRaposo:vEYRcMyMgcKEIaLB@microservicetesting.eifrslh.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
