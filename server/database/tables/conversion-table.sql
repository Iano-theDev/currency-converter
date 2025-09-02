CREATE TABLE
    conversions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users (id),
        success BOOLEAN NOT NULL,
        base_currency_code VARCHAR(3) NOT NULL,
        target_currency_code VARCHAR(3) NOT NULL,
        coversion_amount NUMERIC NOT NULL,
        convertions_result NUMERIC,
        convertions_rate NUMERIC,
        historical BOOLEAN,
        historical_date DATE,
        created_at TIMESTAMP DEFAULT NOW ()
    )