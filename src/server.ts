import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import noteRoutes from "./routes/noteRoutes";

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use("/api", noteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
