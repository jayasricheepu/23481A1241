const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../notification_app_fe")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../notification_app_fe/index.html"));
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});