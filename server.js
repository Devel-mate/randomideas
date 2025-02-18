const express = require("express");
const port = 5000;

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the RandomIdeas API" });
});

// Forwarding requests for /api/ideas path to the ideasRouter in the routes/ideas.js file
const ideasRouter = require("./routes/ideas");
// the .use(); method is used to create a middleware between requests and responses
app.use("/api/ideas", ideasRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
