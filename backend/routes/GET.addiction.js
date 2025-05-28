const express = require("express");
const router = express.Router();
const { pool, db_fields } = require("../db");
router.get("/", async (req, res) => {
    try {
        const query_params = req.query;

        if (Object.keys(query_params).length === 0) return res.status(400).json({ error: "No query parameters provided." });

        const invalid_params = Object.keys(query_params).filter((param) => !db_fields.includes(param));
        if (invalid_params.length > 0) return res.status(400).json({ error: `Invalid parameters: ${invalid_params.join(", ")}` });

        const query = `SELECT * FROM addiction WHERE ${Object.keys(query_params)
            .map((key, index) => `${key} = $${index + 1}`)
            .join(" AND ")}`;
        const values = Object.values(query_params);

        console.log("(>) Executing query:", query, "with values:", values);

        const result = await pool.query(query, values);

        return res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: "(!) Server error" });
    }
});

module.exports = router;
