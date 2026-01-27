import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
});

app.get("/health", (req, res) => {
    const named = true;
    if (!named) {
        return res.status(500).send("Missing Env");
    }

    res.status(200).json({
        status: "ok",
        timestamp: new Date().toISOString(),
        version: "1.0.0"
    });
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
 