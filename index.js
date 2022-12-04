const express = require("express");

const app = express();
app.use(express.json());

const port = process.env.Port || 8000

app.listen(port, () => {
    console.log(`server connecter sur le port ${port}`);
})

