const express = require("express");
const router = express.Router();
const { pool } = require("../db");

router.get("/", async (req, res) => {
    try {
        const queries = {
            average_age: "SELECT ROUND(AVG(age), 2) AS value FROM addiction",
            smokers_percentage: `
                SELECT ROUND(100.0 * COUNT(*) FILTER (WHERE smokes_per_day > 0) / NULLIF(COUNT(*), 0), 2) AS value
                FROM addiction`,
            average_drinks_per_week: "SELECT ROUND(AVG(drinks_per_week), 2) AS value FROM addiction",
            average_bmi: "SELECT ROUND(bmi::NUMERIC, 2) AS value FROM addiction",
            average_sleep_hours: "SELECT ROUND(sleep_hours::NUMERIC, 2) AS value FROM addiction",
            correlation_smoking_bmi: `
               SELECT ROUND(CORR(smokes_per_day, bmi)::NUMERIC, 3) AS value
                FROM addiction
                WHERE smokes_per_day IS NOT NULL AND bmi IS NOT NULL`,
            correlation_smoking_sleep: `
                SELECT ROUND(CORR(smokes_per_day, sleep_hours)::NUMERIC, 3) AS value
                FROM addiction
                WHERE smokes_per_day IS NOT NULL AND sleep_hours IS NOT NULL`,
            health_issues_count: `
                SELECT COUNT(*) FILTER (WHERE has_health_issues = true) AS value
                FROM addiction`,
            mental_health_distribution: `
                SELECT mental_health_status, COUNT(*) AS count
                FROM addiction
                GROUP BY mental_health_status
                ORDER BY count DESC`,
        };

        const multiRowQueries = ["mental_health_distribution"];
        const results = {};

        for (const [key, sql] of Object.entries(queries)) {
            const { rows } = await pool.query(sql);

            if (multiRowQueries.includes(key)) {
                results[key] = rows;
            } else {
                results[key] = rows[0][Object.keys(rows[0])[0]];
            }
        }

        return res.json(results);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to retrieve statistics." });
    }
});

module.exports = router;
