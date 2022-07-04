require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

// express app
const app = express();

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => app.listen(process.env.PORT))
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// mongoose and mongo sandbox routes
// app
//   .get("/add-blog", (req, res) => {
//     const blog = new Blog({
//       title: "new blog 2",
//       snippet: "about my new blog",
//       body: " more about my new blog",
//     });

// save instence of blog to the database
//     blog
//       .save()
//       .then((result) => {
//         res.send(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
// get all documents from blogs collection
//   .get("/all-blogs", (req, res) => {
//     Blog.find()
//       .then((result) => {
//         res.send(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
// find a single ID
//   .get("/single-blog", (req, res) => {
//     Blog.findById("62783da7a9b12c99f4313b8b")
//       .then((result) => {
//         res.send(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });

// listen for requests and the different routes
app
  .get("/", (req, res) => {
    // redirect to blogs
    res.redirect("blogs");
  })

  // get request for about page
  .get("/about", (req, res) => {
    // rendering a view
    res.render("about", { title: "About" });
  })

  // blog routes
  // scoping all of the blog routes
  .use("/blogs", blogRoutes)

  // 404 pages
  .use((req, res) => {
    // rendering a view
    res.status(404).render("404", { title: "404" });
  });

// server is running
