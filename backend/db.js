const { Pool } = require("pg");
require("dotenv").config();

const user = process.env.DB_USER || "postgres";
const password = process.env.DB_PASSWORD || "postgres";
const host = process.env.DB_HOST || "localhost";
const port = process.env.DB_PORT || 5432;
const database = process.env.DB_NAME || "kaggle_data";

const pool = new Pool({
    user: user,
    password: password,
    host: host,
    port: port,
    database: database,
});

const db_fields = [
    "id",
    "name",
    "age",
    "gender",
    "country",
    "city",
    "education_level",
    "employment_status",
    "annual_income_usd",
    "marital_status",
    "children_count",
    "smokes_per_day",
    "drinks_per_week",
    "age_started_smoking",
    "age_started_drinking",
    "attempts_to_quit_smoking",
    "attempts_to_quit_drinking",
    "has_health_issues",
    "mental_health_status",
    "exercise_frequency",
    "diet_quality",
    "sleep_hours",
    "bmi",
    "social_support",
    "therapy_history",
];

module.exports = { pool, db_fields };
