import pandas as pd
from sqlalchemy import create_engine

df = pd.read_csv("addiction_population_data.csv")

engine = create_engine("postgresql://postgres:postgres@localhost:5432/kaggle_data")
df.to_sql("addiction", engine, index=False, if_exists="replace")

print("Data has been loaded to PostgreSQL. (kaggle_data/addiction)")