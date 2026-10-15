require("dns").setServers(["8.8.8.8", "8.8.4.4"]);
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Student Schema
const studentSchema = new mongoose.Schema({
    name: String,
    registerNo: String,
    department: String
});

const Student = mongoose.model("Student", studentSchema);

// CREATE - Register a student
app.post("/add", async (req, res) => {
    await Student.create(req.body);
    res.redirect("/");
});

// READ - Display all students
app.get("/students", async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

// UPDATE - Update student details
app.post("/update/:id", async (req, res) => {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
});

// DELETE - Delete a student
app.get("/delete/:id", async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.redirect("/");
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});