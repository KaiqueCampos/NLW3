const Database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');

module.exports = {

    // Renderiza a página
    index(req, res) {
        return res.render('index')
    },

    async orphanage(req, res) {
        const id = req.query.id
        console.log(id)

        try {

            // Banco de dados
            const db = await Database;
            const results = await db.all(`SELECT * FROM orphanages WHERE id =${id}`)
            const orphanage = results[0]

            // Seleciona as imagens da array e põe a primeira na imagem principal
            orphanage.images = orphanage.images.split(',')
            orphanage.firstImage = orphanage.images[0]

            // Verifica se abre aos fins de semana, e de acordo, seleciona o componente
            orphanage.open_on_weekends == "0" ? orphanage.open_on_weekends = false
                : orphanage.open_on_weekends = true


            // Renderiza a página
            return res.render('orphanage', { orphanage })
        }

        catch (error) {
            console.log(error)
            return res.send("Erro no banco de dados!")
        }
    },

    async orphanages(req, res) {
        try {

            // Seleciona todos os orfanatos cadastrados e renderiza a página
            const db = await Database;
            const orphanages = await db.all("SELECT * FROM orphanages")
            return res.render('orphanages', { orphanages })
        }

        catch (error) {
            console.log(error)
            return res.send("Erro no banco de dados!")
        }
    },

    // Renderiza a página
    createOrphanage(req, res) {
        return res.render('create-orphanage')
    },

    async saveOrphanage(req, res) {
        const fields = req.body;

        // Válidar se todos os campos estão preenchidos
        if (Object.values(fields).includes('')) {
            return res.send('Todos os campos devem ser preenchidos')
        }

        try {
            // Salvar um orfanato
            const db = await Database
            await saveOrphanage(db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                opening_hours: fields.opening_hours,
                open_on_weekends: fields.open_on_weekends
            })

            // Redirecionamento
            return res.redirect('/orphanages')
        }

        catch {
            console.log(error)
            return res.send("Erro no Banco de Dados")
        }

    }
}