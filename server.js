import express from "express";

const app = express();


app.get("/api/notes", (req, res) => {
    // send the note
    // res.send("Hello World!");
    res.status(200).send("Hello World!");
});
app.post("/api/notes", (req, res) => {
    // create a note
    // res.send("Hello World!");
    // res.status(201).send("Note created!");
    res.status(201).json({ message: "Note created!" });
});
// app.delete("/api/notes", (req, res) => {
//     res.send("Hello World!");
// });
// app.put("/api/notes", (req, res) => {
//     res.send("Hello World!");
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


app.listen(5001, () => {
    console.log("Server running on port 5001");
});