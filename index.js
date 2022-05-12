const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`server on http://localhost:${PORT}`));

// middlewares
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// views
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});
app.get("/formulario", (req, res) => {
    res.sendFile(__dirname + "/views/formulario.html");
});
app.get("/detalle/:id", (req, res) => {
    res.sendFile(__dirname + "/views/detalle.html");
});

app.use('/compras', require('./routes/compras'));
app.use('/productos', require('./routes/productos'));