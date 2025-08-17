import express from "express";
import { getAllNotes, createNote, updateNote, deleteNote, getNoteById } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
// router.get("/", (req, res) => {
//     res.status(200).send("You just fetched the notes!");
// });

router.post("/", createNote);
// router.post("/", (req, res) => {
//     res.status(201).send("You just created a note!");
// });

router.put("/:id", updateNote);
// router.put("/:id", (req, res) => {
//     res.status(200).send("You just updated a note!");
// });

router.delete("/:id", deleteNote);
// router.delete("/:id", (req, res) => {
//     res.status(200).send("You just deleted a note!");
// });

router.get("/:id", getNoteById);
// router.patch("/:id", updateNote);


export default router;


// app.get("/api/notes", (req, res) => {
//     // send the note
//     // res.send("Hello World!");
//     res.status(200).send("Hello World!");
// });
// app.post("/api/notes", (req, res) => {
//     // create a note
//     // res.send("Hello World!");
//     // res.status(201).send("Note created!");
//     res.status(201).json({ message: "Note created!" });
// });

// app.put("/api/notes/:id", (req, res) => {
//     // http://localhost:5001/api/notes/1
//     res.status(200).json({ message: "Note updated!" });
// });

// app.delete("/api/notes/:id", (req, res) => {
//     // http://localhost:5001/api/notes/1
//     res.status(200).json({ message: "Note deleted!" });
// });
// app.patch("/api/notes", (req, res) => {
//     res.send("Hello World!");
// });
// app.options("/api/notes", (req, res) => {
//     res.send("Hello World!");
// });
// app.head("/api/notes", (req, res) => {
//     res.send("Hello World!");
// });
// app.trace("/api/notes", (req, res) => {
//     res.send("Hello World!");
// });
// app.connect("/api/notes", (req, res) => {
//     res.send("Hello World!");
// });