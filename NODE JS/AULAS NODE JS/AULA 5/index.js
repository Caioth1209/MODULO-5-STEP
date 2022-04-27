const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// recebe o caminho 
// e uma function de callback
app.get("/", (req, res) => {
    res.send("Servidor online!!!");
})

// recebe a porta 
// e uma function de callback
app.listen(port, () => {
    console.info(`Servidor rodando na porta: ${port}`);
})