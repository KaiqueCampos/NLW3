// Importar o Mysql
var mysql = require('mysql');
var fs = require('fs')

// Estabelecer Conexão
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: 'Miniatura'
});

module.exports = {

    // Renderiza a página
    index(req, res) {

        con.connect(function (err) {

            if (err) throw err;
            console.log("Connected!");
            var sql = "SELECT * FROM products";
            con.query(sql, function (err, result) {
                if (err) throw err;

                var arr = result
                let data = JSON.stringify(arr);
                fs.writeFileSync('public/products.json', data)
            });
        });

        return res.render('index')
    },
}