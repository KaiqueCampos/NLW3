// Importar o Mysql
const Database = require('./database/db');
//var mysql = require('mysql');

// // Estabelecer Conexão
// var con = mysql.createConnection({
//     host: "127.0.0.1",
//     user: "root",
//     password: "",
//     database: 'Miniatura'
// });



module.exports = {

    // Renderiza a página
    async index(req, res) {

        try {

            // Seleciona todos os orfanatos cadastrados e renderiza a página
            const db = await Database;
            const miniatura = await db.all("SELECT * FROM products")

            const fast = await db.all('SELECT * FROM products WHERE prod_colection = "Fast and Furious"')

            return res.render('index', { miniatura, fast})
        }

        catch (error) {
            console.log(error)
            return res.send("Erro no banco de dados!")
        }


        // con.connect(function (err) {

        //     if (err) throw err;

        //     var sql = "SELECT * FROM products";
        //     con.query(sql, function (err, result) {
        //         if (err) throw err;


        //         let fastFurious = result.filter((cod) => {
        //             return cod.prod_colection === 'Fast and Furious';
        //         })

        //         return res.render('index', { miniatura: result, fast: fastFurious })

        //     });
        // });
    },

    produtos(req, res) {
        return res.render('produtos')
    }
}