import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

app.use("/api/notes", notesRoutes);
// app.use("/api/products", productsRoutes);
// app.use("/api/users", usersRoutes);
// app.use("/api/posts", postsRoutes);
// app.use("/api/payments", paymentsRoutes);
// app.use("/api/emails", emailsRoutes);


app.listen(5001, () => {
    console.log("Server running on port 5001");
});