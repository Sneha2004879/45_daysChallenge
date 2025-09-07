const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "resumeData";

app.use(express.json());

async function main() {
    try {
        await client.connect();
        console.log("Yeah..! Connected to MongoDB successfully 🎉");

        const db = client.db(dbName);
        const collection = db.collection("info");

        const sampleData = {
            name: "Sneha",
            role: "Developer",
            skills: ["Java", "DBMS", "OS", "Node.js"],
        };

        const exists = await collection.findOne({ name: sampleData.name });
        if (!exists) {
            await collection.insertOne(sampleData);
            console.log(" Sample data inserted!");
        } else {
            console.log(" Sample data already exists, skipping insert.");
        }


        app.post("/add", async (req, res) => {
            const data = req.body;
            const check = await collection.findOne({ name: data.name });
            if (!check) {
                await collection.insertOne(data);
                res.send("Data inserted successfully!");
            } else {
                res.send(" Data already exists, skipping insert.");
            }
        });

        app.get("/all", async (req, res) => {
            const data = await collection.find({}).toArray();
            res.json(data);
        });

        app.listen(port, () => {
            console.log(` Express server running at http://localhost:${port}`);
        });

    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

main();
