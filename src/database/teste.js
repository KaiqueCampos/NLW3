// Apenas para apagar dados e fazer testes!!!!
const Database = require("./db")

Database.then(async db => {

    // Deletar dado especifico da tabela
    //console.log(await db.run("DELETE FROM products WHERE prod_id=11"))

    // Deletar tabela
    //console.log(await db.run("DROP TABLE compras"))

    // Consultar dados na tabela   
    const selectedOrphanages = await db.all("SELECT * FROM compras")
    console.log(selectedOrphanages)

})