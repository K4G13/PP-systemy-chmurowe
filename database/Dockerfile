FROM postgres:15-alpine

ENV POSTGRES_DB=kaggle_data
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres

COPY init-scripts/ /docker-entrypoint-initdb.d/

EXPOSE 5432
