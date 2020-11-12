// Importar o Banco de dados
const Database = require('./database/db');
const fs = require('fs')

module.exports = {
    

    // Renderiza a página
    async index(req, res) {

        try {

            // Seleciona todos os orfanatos cadastrados e renderiza a página
            const db = await Database;
            const miniatura = await db.all("SELECT * FROM products")

            return res.render('index', { miniatura })
        }

        catch (error) {
            console.log(error)
            return res.send("Erro no banco de dados!")
        }
    },

    async produtos(req, res) {

        // Seleciona todos os Produtos
        const db = await Database;
        const miniatura = await db.all("SELECT * FROM products")

        return res.render('produtos', { miniatura })
    },

    async produto(req, res) {
        const id = req.query.prod_id

        const db = await Database;
        const results = await db.all(`SELECT * FROM products WHERE prod_id =${id}`)
        const miniatura = results[0]
        miniatura.parcelas = miniatura.prod_price / 10

        return res.render('produto', { miniatura })

    },

    async cart(req, res) {
        const id = req.query.prod_id

        const db = await Database;
        const results = await db.all(`SELECT * FROM products WHERE prod_id =${id}`)
        const miniatura = results[0]

        console.log(miniatura)
       

        return res.render('cart', { miniatura})

    }
}