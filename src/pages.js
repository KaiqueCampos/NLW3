// Importar o Banco de dados
const Database = require('./database/db');
const registerUser = require('./database/registerUser');

module.exports = {


    // Renderiza a página
    async register(req, res) {
        return res.render('register')
    },

    async registerUser(req, res) {
        const fields = req.body;

        // Válidar se todos os campos estão preenchidos
        if (Object.values(fields).includes('')) {
            return res.send('Todos os campos devem ser preenchidos')
        }

        try {
            // Salvar um usuário
            const db = await Database;
            await registerUser(db, {
                name: fields.name,
                password: fields.password,
                genre: fields.genre,
                cpf: fields.cpf,
                rg: fields.rg,
                email: fields.email,
                adress: fields.adress,
                bairro: fields.bairro,
                number: fields.number,
                cep: fields.cep,
                cidade: fields.cidade,
                uf: fields.uf
            })

            // Redirecionamento
            return res.redirect('/')
        }

        catch {
            console.log(error)
            return res.send("Erro no Banco de Dados")
        }
    },

    async login(req, res) {
        res.render('login')
    },

    async index(req, res) {

        try {

            // Selecion os produtos
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
            const results = await db.all(`SELECT * FROM users WHERE user_email = '${fields.email}' AND user_password = '${fields.password}'`)
            if (results.length > 0) {
                return res.redirect('/index')
            }

            else {
                return res.render('loginERROR')
            }
        }


        else {
            alert('Erro no servidor!')
        }
    },

    async loginERROR(req, res) {
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