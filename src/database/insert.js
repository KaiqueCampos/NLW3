const Database = require("./db")

function teste(){
    return Database.run(`
        CREATE TABLE IF NOT EXISTS products (
            prod_id INTEGER PRIMARY KEY AUTOINCREMENT,
            prod_name TEXT,
            prod_image TEXT,
            prod_price decimal(6,2),
            prod_colection TEXT
        );
    `)
}

teste();