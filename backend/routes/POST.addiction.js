const express = require("express");
const router = express.Router();
const { pool, db_fields } = require("../db");

router.post("/", async (req, res) => {
    try {
        const data = req.body;
        if (!data || Object.keys(data).length === 0) return res.status(400).json({ error: "No data provided." });

        delete data.id;

        const invalid_params = Object.keys(data).filter((data) => !db_fields.includes(data));
        if (invalid_params.length > 0) return res.status(400).json({ error: `Invalid parameters: ${invalid_params.join(", ")}` });

        const query = `
            INSERT INTO addiction (${Object.keys(data).join(", ")}) 
            VALUES (${Object.keys(data)
                .map((_, index) => `$${index + 1}`)
                .join(", ")}) 
            RETURNING *`;
        const values = Object.values(data);

        console.log("(>) Executing query:", query, "\n\twith values:", values);
        const result = await pool.query(query, values);
        return res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: "(!) Server error" });
    }
});

module.exports = router;
