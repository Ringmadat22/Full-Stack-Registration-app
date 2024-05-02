import express from "express";
import db from "./src/config/database.js";
import ProductRoutes from "./src/routes/index.js";
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log('Database connected successfully...');
} catch (error) {
    console.error('Connection error', error)
}

app.use(cors());
app.use(express.json());
app.use('/products', ProductRoutes);

app.listen(5000, () => console.log('Server running at 5000'));