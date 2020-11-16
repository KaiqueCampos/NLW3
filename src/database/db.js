const Database = require('sqlite-async')

//Cria o banco de dados caso não exita um
function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS products (
            prod_id INTEGER PRIMARY KEY AUTOINCREMENT,
            prod_name TEXT,
            prod_image TEXT,
            prod_price decimal(6,2),
            prod_colection TEXT,
            prod_category TEXT
        );

        CREATE TABLE IF NOT EXISTS users (
            user_id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_name TEXT,
            user_password TEXT,
            user_genre TEXT,
            user_cpf TEXT,
            user_rg TEXT,
            user_email TEXT,
            user_adress TEXT,
            user_bairro TEXT,
            user_number TEXT,
            user_cep TEXT,
            user_cidade TEXT,
            user_uf TEXT
        );
    `)
}

// function execute(db) {
//     return db.run(`
//     INSERT INTO products (
//         prod_name,
//         prod_image,
//         prod_price,
//         prod_colection
//     )VALUES (
//         'Lycan Hypersport',
//         "https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1237587616",
//         1500,
//         'Fast and Furious'
//     );
// `);
// }

// function execute(db) {
//     return db.run(`
//     INSERT INTO users (
//         user_id,
//         user_name,
//         user_password
//     ) VALUES (
//         1,
//         'Kaique',
//         "teste123"
//     );
// `);
// }



module.exports = Database.open(__dirname + '/database.sqlite').then(execute)