// Show Buy Button
$(".product").on({
    mouseenter: function () {
        $(this).find('.buy').fadeIn().addClass('active animate-up');
    },
    mouseleave: function () {
        $('.buy').removeClass('active animate-up')
    }
});

////////////////////// Search Products

// Selecina a tag que será utilizada
function gid(a_id) {
    return document.querySelectorAll(a_id);
}

// Deixa o display none quando inserido caracteres no input
function close_all() {

    var o = gid(".product");
    for (i = 0; i < o.length; i++) {
        if (o) {
            o[i].style.display = "none";
        }
    }
}

// Encontra o produto
function findProduct() {
    close_all();

    // Texto inserido no input
    var o_edit = gid("#edit_search");
    var str_needle = edit_search.value;
    str_needle = str_needle.toUpperCase();
    var searchStrings = str_needle.split(/\W/);

    // Seleciona todos os produtos em um lopping
    var nameDivs = document.querySelectorAll(".product");
   

    for (var j = 0, divsLen = nameDivs.length; j < divsLen; j++) {
   

        // Contador 
        var num = 0;

        // Lopping para encontrar produtos
        for (var i = 0, len = searchStrings.length; i < len; i++) {
            var currentSearch = searchStrings[i].toUpperCase();

            // Execução caso o input não esteja vazio
            if (str_needle !== "") {

                // Adicionar ao contador para cada produto encontrado
                if (nameDivs[j].textContent.toUpperCase().indexOf(currentSearch) !== -1) {
                    num++;
                }
                // Display visivel apenas para produtos encontrados
                if (num == searchStrings.length) {
                    nameDivs[j].style.display = "block";
                }
            }

            // Caso esteja vazio, mostra todos os produtos
            else {

                var o = gid(".product");
                for (i = 0; i < o.length; i++) {
                    if (o) {
                        o[i].style.display = "block";
                    }
                }
            }
        }
    }
}

