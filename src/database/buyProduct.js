// Inserir dados na tabela
async function buyProduct(db, {total, qnt, id}) {
    return db.run(`
        INSERT INTO compras (
            buy_total,
            buy_quantidade,
            prod_id
        ) VALUES (
            "${total}",
            "${qnt}",
            "${id}"
        );
    `);
}

module.exports = buyProduct;