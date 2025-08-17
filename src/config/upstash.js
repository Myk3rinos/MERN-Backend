// import { RateLimit } from "express-rate-limit";

// export const rateLimit = RateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 100 // limit each IP to 100 requests per windowMs
// });

// import { RateLimit } from "@upstash/ratelimit";
// import { Redis } from "@upstash/redis";
// import dotenv from "dotenv";
// dotenv.config();

// // create a new rate limiter that allows 10 requests per 20 seconds 
// const rateLimit = new RateLimit({
//     redis: Redis.fromEnv(),
//     limiter: RateLimit.slidingWindow(10, "20 s"),
// });

// export default rateLimit;