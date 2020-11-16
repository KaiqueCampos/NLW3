// Importar o Banco de dados
const Database = require('./database/db');
const fs = require('fs');
const { fileURLToPath } = require('url');

module.exports = {


    // Renderiza a página
    async register(req, res){
        return res.render('register')
    },

    async login(req, res) {
        res.render('login')
    },

    async index(req, res) {

        try {

            // Seleciona todos os orfanatos cadastrados e renderiza a página
            const db = await Database;
            const miniatura = await db.all("SELECT * FROM products")
            const fast = await db.all("SELECT * FROM products WHERE prod_colection = 'Fast and Furious'")

            return res.render('index', { miniatura, fast })
        }

        catch (error) {
            console.log(error)
            return res.send("Erro no banco de dados!")
        }
    },

    async loginValidation(req, res) {
        const fields = req.body;
        const db = await Database;

        if (req.method === 'POST') {
            const results = await db.all(`SELECT * FROM users WHERE user_name = '${fields.name}' AND user_password = '${fields.password}'`)
            if (results.length > 0) {
                return res.redirect('/')
            }

            else {
                return res.render('loginERROR')
            }
        }


        else {
            alert('Erro no servidor!')
        }
    },

    async loginERROR(req, res){
        res.render('loginERROR')
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


        return res.render('cart', { miniatura })

    }
}