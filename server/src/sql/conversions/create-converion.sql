INSERT INTO conversions(
    user_id, base_currency_code, target_currency_code, convertions_amount, historical, historical_date
)

VALUES (
    $1, $2, $3, $4, $5, $6
) 