const express = require("express");
const router = express.Router();
const { pool, db_fields } = require("../db");

router.put("/", async (req, res) => {
    try {
        const data = req.body;
        if (!data || Object.keys(data).length === 0) return res.status(400).json({ error: "No data provided." });

        if (!data.id) return res.status(400).json({ error: "ID is required for update" });

        const invalid_params = Object.keys(data).filter((param) => !db_fields.includes(param));
        if (invalid_params.length > 0) return res.status(400).json({ error: `Invalid parameters: ${invalid_params.join(", ")}` });

        const update_fields = Object.keys(data).filter((key) => key !== "id");
        const set_clause = update_fields.map((key, index) => `${key} = $${index + 1}`).join(", ");
        const query = `
            UPDATE addiction
            SET ${set_clause}
            WHERE id = $${update_fields.length + 1}
            RETURNING *`;
        const values = [...update_fields.map((key) => data[key]), data.id];

        console.log("(>) Executing query:", query, "\n\twith values:", values);
        const result = await pool.query(query, values);

        if (result.rowCount === 0) return res.status(404).json({ error: "Addiction record not found." });

        return res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: "(!) Server error" });
    }
});

module.exports = router;
