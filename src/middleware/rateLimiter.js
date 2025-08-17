
// import rateLimit from "../config/upstash.js";

// const rateLimiter = async (req, res, next) => {
//     try {
//         // const {success} = await rateLimit.limit("my-limit-key");
//         const {success} = await rateLimit.limit(req.ip);
//         if (!success) {
//             return res.status(429).json({ message: "Too many requests" });
//         }
//         // const {success} = await rateLimit.limit(req.ip);
//         // const { success, limit, reset } = await rateLimit.get(req.ip);
//         // if (!success) {
//         //     return res.status(429).json({ message: "Too many requests" });
//         // }
//         next();
//     } catch (error) {
//         console.error("Error in rateLimiter middleware: ", error);
//         next(error);
//         // res.status(500).json({ message: "Internal server error" });
//     }    
// };

// export default rateLimiter;
