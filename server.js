const path = require("path"); // We import the 'path' module because we want to use it to join this file with other through the path
const express = require("express");
const cors = require("cors");
require("dotenv").config(); // We don't need to put it in a variable, just add the .config() method
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");

connectDB();

const app = express();

// Static Folder
// This middleware will make static the public directory called 'public'
// That means that the directory will be able to server html and css static files
app.use(express.static(path.join(__dirname, "public")));

// Body parser middleware
// the .use() method is used to create a middleware between requests and responses
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS middleware
app.use(
  cors({
    origin: ["http://localhost:5000", "http://localhost:3000"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the RandomIdeas API" });
});

// Forwarding requests for /api/ideas path to the ideasRouter in the routes/ideas.js file
const ideasRouter = require("./routes/ideas");
app.use("/api/ideas", ideasRouter);

// with this command we create a server listening in a specific port
app.listen(port, () => console.log(`Server listening on port ${port}`));
