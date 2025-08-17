import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
// import rateLimiter from "./middleware/rateLimiter.js";

const app = express();
const PORT = process.env.PORT || 5001;

// connectDB();

// middleware
app.use(express.json()); // this middleware is used to parse the request body

// custom middleware
// app.use((req, res, next) => {
//     console.log("Time: ", Date.now());
//     console.log("Method: ", req.method);
//     console.log("URL: ", req.url);
//     next();
// });

// app.use(rateLimiter);

app.use("/api/notes", notesRoutes);
// app.use("/api/products", productsRoutes);
// app.use("/api/users", usersRoutes);
// app.use("/api/posts", postsRoutes);
// app.use("/api/payments", paymentsRoutes);
// app.use("/api/emails", emailsRoutes);

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch((error) => {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
});