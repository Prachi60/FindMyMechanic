import express from "express"
import dotenv from "dotenv"
import connectDB from "./app/dbConfig/db.js"
import authRoutes from "./app/routes/auth.routes.js";
import bookingRoutes from "./app/routes/booking.routes.js";
// import mediaSetup from "./app/routes/media.js"
import path from "path";
import cors from "cors"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOSTNAME || "0.0.0.0";

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello, World!');
});
connectDB();
setupRoutes(app);
// mediaSetup(app);
// app.use("/media", express.static(path.join(process.cwd(), "uploads")));


app.listen(PORT, HOST, () => {
  console.log(`server is running on http://${HOST}:${PORT}`)
})
