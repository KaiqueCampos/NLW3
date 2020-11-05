const Database = require('sqlite-async')

//Cria o banco de dados caso não exita um
function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS products (
            prod_id INTEGER PRIMARY KEY AUTOINCREMENT,
            prod_name TEXT,
            prod_image TEXT,
            prod_price decimal(6,2),
            prod_colection TEXT
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



module.exports = Database.open(__dirname + '/database.sqlite').then(execute)