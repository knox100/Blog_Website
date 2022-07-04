const express = require("express");
const blogController = require("../controllers/blogController");
const router = express.Router();

// blogs index controller
router
  .get("/", blogController.blog_index)

  // post requests for new blog
  .post("/", blogController.blog_create_post)

  // blog create page controller
  .get("/create", blogController.blog_create_get)

  // blog details page controller
  .get("/:id", blogController.blog_details)

  // delete request
  .delete("/:id", blogController.blog_delete);

module.exports = router;
