const express = require("express");
const http = require("http"); // <-- add this
const cors = require("cors");
const { Server } = require("socket.io"); // <-- add this
const connectDB = require("./config/mongodb.js");
const connectCloudinary = require("./config/cloudinary.js");
const userRouter = require("./routes/userRoute.js");
const doctorRouter = require("./routes/doctorRoute.js");
const adminRouter = require("./routes/adminRoute.js");

// app config
const app = express();
const port = process.env.PORT || 4000;

// Create HTTP server
const server = http.createServer(app); // <-- change here

// Set up Socket.IO
const io = new Server(server, {
  cors: {
    origin: "*", // Update as needed
    methods: ["GET", "POST"]
  }
});

// Define the namespace
const doctorsNamespace = io.of("/bookmydoctor.doctors");

doctorsNamespace.on("connection", (socket) => {
  console.log("Doctor connected to /bookmydoctor.doctors");

  socket.on("disconnect", () => {
    console.log("Doctor disconnected");
  });
});

// DB + cloud setup
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

// Start server
server.listen(port, () => console.log(`Server started on PORT:${port}`)); // <-- changed to use `server.listen`
