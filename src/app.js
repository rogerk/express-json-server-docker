import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 4001;
const dbPort = process.env.DB_PORT;
const dbHost = process.env.DB_HOST;

const app = express();
app.set("json spaces", 2);

app.get("/matrix", async (req, res) => {
    try {
        const resp = await axios.get(`http://${dbHost}:${dbPort}/matrix`);
        res.json(resp.data);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
