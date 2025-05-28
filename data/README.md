## POSTGRESQL

_Change those if needed._

```
user:       postgres
password:   postgres
port:       5432
database:   kaggle_data
table:      addiction
```

### Create postgresql database

```
> psql -u postgres
> CREATE DATABASE kaggle_data;
> \q
```

### Populate database

```
 > pip install pandas sqlalchemy psycopg2
 > py populate_db.py
```

### Check database

```
> psql -u postgres
> \c kaggle_data
> SELECT * FROM addiction LIMIT 5;
> \q
```
