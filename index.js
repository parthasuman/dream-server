const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./data/courses.json");
const tutorials = require("./data/tutorials.json");

app.get("/", (req, res) => {
  res.send("Courses API Running");
});

app.get("/tutorials-courses", (req, res) => {
  res.send(courses);
});
// abc

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const course_tutorials = tutorials.filter((t) => t.course_id === id);
  res.send(course_tutorials);
});

app.get("/tutorials/:id", (req, res) => {
  const id = req.params.id;
  const selectedTutorials = tutorials.find((t) => t._id === id);
  res.send(selectedTutorials);
});

app.listen(port, () => {
  console.log("Dream learn Server is running", port);
});
