// Apenas para apagar dados e fazer testes!!!!
const Database = require("./db")
const saveOrphanage = require("./saveOrphanage")

Database.then(async db => {
    
    // Deletar dado da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id=19"))


    // Consultar dados na tabela   
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")

})