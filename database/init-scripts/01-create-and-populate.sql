-- Create addiction table
CREATE TABLE IF NOT EXISTS addiction (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    age INTEGER,
    gender VARCHAR(50),
    country VARCHAR(100),
    city VARCHAR(100),
    education_level VARCHAR(100),
    employment_status VARCHAR(100),
    annual_income_usd FLOAT,
    marital_status VARCHAR(50),
    children_count INTEGER,
    smokes_per_day INTEGER,
    drinks_per_week INTEGER,
    age_started_smoking INTEGER,
    age_started_drinking INTEGER,
    attempts_to_quit_smoking INTEGER,
    attempts_to_quit_drinking INTEGER,
    has_health_issues BOOLEAN,
    mental_health_status VARCHAR(100),
    exercise_frequency VARCHAR(50),
    diet_quality VARCHAR(50),
    sleep_hours FLOAT,
    bmi FLOAT,
    social_support VARCHAR(50),
    therapy_history VARCHAR(100)
);

-- Import CSV data INCLUDING the id column
COPY addiction(id, name, age, gender, country, city, education_level, employment_status, annual_income_usd, marital_status, children_count, smokes_per_day, drinks_per_week, age_started_smoking, age_started_drinking, attempts_to_quit_smoking, attempts_to_quit_drinking, has_health_issues, mental_health_status, exercise_frequency, diet_quality, sleep_hours, bmi, social_support, therapy_history)
FROM '/docker-entrypoint-initdb.d/addiction_population_data.csv'
DELIMITER ','
CSV HEADER;