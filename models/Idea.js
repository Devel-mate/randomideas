const mongoose = require("mongoose");
// In the Schema object we write the field we want to give to the DB (except id)
const IdeaSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Please add a text field"],
  },
  tag: {
    type: String,
  },
  username: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Pass the name of the module: Idea, and the Schema name we created: IdeaSchema
module.exports = mongoose.model("Idea", IdeaSchema);
// We will import this module into the our router file: routes/ideas.js
