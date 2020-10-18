// Opções para desabilitar funcionalidades no mapa
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Pega os valores de lat e lng do html
const  lat = document.querySelector('span[data-lat]').dataset.lat
const  lng = document.querySelector('span[data-lng]').dataset.lng

// Cria um mapa
const map = L.map('mapid', options).setView([lat,lng], 16.5);

// Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Create Icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})


// Create and add Marker
L.marker([lat, lng], {icon})
.addTo(map)


/* image gallary */

function selectImage(event){
    const button = event.currentTarget

    // Remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    // Selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-datails>img")

    // atualizar o container de image
    imageContainer.src = image.src


    // adicionar a classe .acitve para o botão criado
    button.classList.add('active')
}