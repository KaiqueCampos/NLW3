// Importar o Banco de dados
const Database = require('./database/db');

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
    },

    async produtos(req, res) {

        // Seleciona todos os Produtos
        const db = await Database;
        const miniatura = await db.all("SELECT * FROM products")

        return res.render('produtos', {miniatura})
    }
}