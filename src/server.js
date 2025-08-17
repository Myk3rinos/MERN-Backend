import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use("/api/notes", notesRoutes);
// app.use("/api/products", productsRoutes);
// app.use("/api/users", usersRoutes);
// app.use("/api/posts", postsRoutes);
// app.use("/api/payments", paymentsRoutes);
// app.use("/api/emails", emailsRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});