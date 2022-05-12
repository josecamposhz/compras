const { Router } = require('express');
const router = Router();

const db = require('../db.js');

router.post("/", async (req, res) => {
    try {
        const compra = req.body;
        const result = await db.registrarCompra(compra);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.get("/", async (req, res) => {
    try {
        const compras = await db.getCompras();
        res.json(compras);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const detalle = await db.getDetalleCompra(req.params.id);
        res.json(detalle);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await db.eliminarCompra(id);
        res.send("Compra eliminada con éxito");
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;