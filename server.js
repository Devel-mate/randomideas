const express = require("express");
require("dotenv").config(); // We don't need to put it in a variable, just add the .config() method
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");

connectDB();

const app = express();

// Body parser middleware
// the .use() method is used to create a middleware between requests and responses
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the RandomIdeas API" });
});

// Forwarding requests for /api/ideas path to the ideasRouter in the routes/ideas.js file
const ideasRouter = require("./routes/ideas");
app.use("/api/ideas", ideasRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
