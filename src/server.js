// Faz a requisição do pacote
const express = require("express")
const path = require('path')
const pages = require('./pages.js')

// Iniciando o Express
const server = express()
server

// Utilizar body da Requisição
.use(express.urlencoded({extended: true}))

// Utilizar os arquivos estáticos do diretório
.use(express.static('public'))

// Configura o template engine
.set('views', path.join(__dirname, 'views')) 
.set('view engine', 'hbs') 

// Seleção das rotas
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)


// Ligar o server
server.listen(5500)