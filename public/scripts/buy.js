function FormBuy() {
    const keys = Object.keys(localStorage)

    const content = []

    for (var i = 0; i < keys.length; i++) {
        const products = JSON.parse(localStorage.getItem(keys[i]))

        content.push(
            '<fieldset id="fieldset"><input id="id" type="text" name="id" class="inputhidden" value="' + products[0].id + '" required>' +
            '<input id="qnt" type="text" name="quantidade" class="inputhidden " value="' + products[0].Quantidade + '" required>' +
            '<input id="total" type="text" name="total" class="inputhidden " value="' + products[0].Total + '" + required></fieldset>');

    }

    const container = document.querySelector('.formHidden')
    container.innerHTML = content
    

    const buttonTarget = document.querySelector('.formHidden')
    const buttonCreate = document.createElement("button");
    buttonCreate.classList.add("btn-buy");
    buttonCreate.type = 'button';

    buttonTarget.appendChild(buttonCreate);


    const button = document.querySelector('.btn-buy')
    button.onclick = function () {
        console.log('clicado')
        const target = document.querySelector('.formHidden');
        target.submit();
    }
}

FormBuy();