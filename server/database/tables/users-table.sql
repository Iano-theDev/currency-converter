CREATE TABLE
    users (
        id SERIAL PRIMARY KEY,
        username UNIQUE VARCHAR(50),
        created_at TIMESTAMP DEFAULT NOW ()
    )