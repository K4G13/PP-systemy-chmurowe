import pandas as pd
from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String, Float, Boolean

df = pd.read_csv("addiction_population_data.csv")
if 'id' in df.columns: df = df.drop('id', axis=1)

engine = create_engine("postgresql://postgres:postgres@localhost:5432/kaggle_data")

metadata = MetaData()

addiction_table = Table('addiction', metadata,
    Column('id', Integer, primary_key=True, autoincrement=True),
    Column('name', String),
    Column('age', Integer),
    Column('gender', String),
    Column('country', String),
    Column('city', String),
    Column('education_level', String),
    Column('employment_status', String),
    Column('annual_income_usd', Float),
    Column('marital_status', String),
    Column('children_count', Integer),
    Column('smokes_per_day', Integer),
    Column('drinks_per_week', Integer),
    Column('age_started_smoking', Integer),
    Column('age_started_drinking', Integer),
    Column('attempts_to_quit_smoking', Integer),
    Column('attempts_to_quit_drinking', Integer),
    Column('has_health_issues', Boolean),
    Column('mental_health_status', String),
    Column('exercise_frequency', String),
    Column('diet_quality', String),
    Column('sleep_hours', Float),
    Column('bmi', Float),
    Column('social_support', String),
    Column('therapy_history', String)
)

metadata.drop_all(engine)
metadata.create_all(engine)

df.to_sql("addiction", engine, index=False, if_exists="append")

print("Data has been loaded to PostgreSQL. [kaggle_data/addiction]")