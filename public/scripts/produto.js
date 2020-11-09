function selectImage(event){
    const button = event.currentTarget

    // Remover todas as classes .active
    const buttons = document.querySelectorAll(".other-imgs button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    // Selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".first-image>img")

    // atualizar o container de image
    imageContainer.src = image.src


    // adicionar a classe .acitve para o botão criado
    button.classList.add('active')
}