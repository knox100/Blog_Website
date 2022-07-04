const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// blogSchema
const blogSchema = new Schema(
  {
    // this what defines the structure of the document
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Model(Thsis is the interface that is wrappped around the schame that makes interactions to be easier.)

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
