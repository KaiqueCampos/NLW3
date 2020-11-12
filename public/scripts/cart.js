function addProduct() {

    let products = [];

    /* Get Elements Values */
    const id = parseInt(document.querySelector(".id").textContent)
    const price = parseInt(document.querySelector(".prod_price").textContent)
    const quantidade = parseInt(document.querySelector(".quantidade").textContent)
    const image = document.querySelector(".image").textContent
    const name = document.querySelector(".name").textContent
    // const colection = document.querySelector(".colection").textContent

    /*Set total*/
    const total = quantidade * price;

    //Pega os produtos que já estão no localStorage
    if (localStorage.getItem('products')) {
        products = JSON.parse(localStorage.getItem('products'));
    }

    const repeatProduct = products.filter(product => product.id === id)

    if (repeatProduct < 1) {
        //Adiciona novos produtos
        products.push({ 'id': id, 'Nome': name, 'Price': price, 'Quantidade': quantidade, 'Total': total, 'Imagem': image });
        localStorage.setItem('products' + id, JSON.stringify(products));
    }

    else {
        // Se já estiver no carrinho, apenas atualiza sua quantidade
        localStorage.setItem('products' + id, JSON.stringify(array))
    }
}


// Buttons Remove or Add Products
const quantidadeTAG = document.querySelector('.quantidade')

function RemoveOne() {

    const quantidade = parseInt(quantidadeTAG.textContent);

    // Se a quantidade for, o botão trava
    if (quantidade === 1) {
        alert('A quantidade não pode ser 0!')
    }

    // Caso contrário, pode subtrair normalmente
    else {
        const newQuantidade = quantidade - 1;
        quantidadeTAG.innerHTML = newQuantidade;

    }
}

function AddOne() {
    // Adiciona a quantidade de produtos
    const quantidade = parseInt(quantidadeTAG.textContent);
    const newQuantidade = quantidade + 1;

    quantidadeTAG.innerHTML = newQuantidade;
}

// Renderiza os icones de produtos
function render() {
    // Pega todos os produtos dentro do localStorage
    const keys = Object.keys(localStorage)

    for (var i = 0; i < keys.length; i++) {
        const products = JSON.parse(localStorage.getItem(keys[i]))

        // Adiciona um button com imagem para cada um
        var target = document.querySelector(".products");
        const container = document.createElement("button");
        container.classList.add('active')
        container.classList.add('product-cart');
        
        // Adiciona seus valores internos
        const content = '<img src="' + products[0].Imagem + '" alt=""><span>' + products[0].id + '</span>'

        // Coloca no container principal (target)
        container.innerHTML = content;
        target.appendChild(container);

         // Clicar no botão
         container.onclick = function () {
            const button = event.currentTarget

            const buttons = document.querySelectorAll(".product-cart")
            buttons.forEach(removeActiveClass)

            function removeActiveClass(button) {
                button.classList.remove("active")
            }

            // Selecionar a imagem clicada
            const image = button.children[0]
            const imageContainer = document.querySelector(".firstImage")

            // atualizar o container de image
            imageContainer.src = image.src


            // adicionar a classe .acitve para o botão criado
            button.classList.add('active')

            document.querySelector(".name").innerHTML =  products[0].Nome
            document.querySelector(".id").innerHTML =  products[0].id
            document.querySelector(".prod_price").innerHTML = products[0].Price
            const quantidade = parseInt(document.querySelector(".quantidade").textContent)
            document.querySelector(".image").innerHTML = products[0].Imagem
           
        };

    }

}

render();
