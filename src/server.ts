import dotenv from "dotenv";

// Faylning to'liq yo'lini ko'rsatish
dotenv.config({ path: "./src/.env" });

console.log("PORT:", process.env.PORT);

console.log("MONGO_URL:", process.env.MONGO_URL);