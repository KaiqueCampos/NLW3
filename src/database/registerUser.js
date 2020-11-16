// Inserir dados na tabela
async function registerUser(db, { name, password, genre, cpf, rg, email, adress, bairro, number, cep, cidade, uf }) {
    return db.run(`
        INSERT INTO users (
            user_name,
            user_password,
            user_genre,
            user_cpf,
            user_rg,
            user_email,
            user_adress,
            user_bairro,
            user_number,
            user_cep,
            user_cidade,
            user_uf
        ) VALUES (
            "${name}",
            "${password}",
            "${genre}",
            "${cpf}",
            "${rg}",
            "${email}",
            "${adress}",
            "${bairro}",
            "${number}",
            "${cep}",
            "${cidade}",
            "${uf}"
        );
    `);
}

module.exports = registerUser;