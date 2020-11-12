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
.get('/produtos', pages.produtos)
.get('/produto', pages.produto)
.get('/cart', pages.cart)




// Ligar o server
server.listen(5500)