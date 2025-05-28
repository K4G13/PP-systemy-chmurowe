const express = require("express");
const router = express.Router();
const { pool } = require("../db");

router.get("/", async (req, res) => {
    try {
        let result;
        if (req.query.limit > 0) result = await pool.query("SELECT * FROM addiction LIMIT $1", [req.query.limit]);
        else result = await pool.query("SELECT * FROM addiction");
        return res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: "(!) Server error" });
    }
});

module.exports = router;
