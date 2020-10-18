// Create Map
const map = L.map('mapid').setView([-23.632079, -46.7710137], 15);

// Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    // Não duplica o mapa quando o zoom for aplicado
    noWrap: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
// Create Icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    // Set lat and lng value on inputs hidden
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map)
})

function validate(event) {

    // Verifica se os inputs tem valores
    const lat = document.querySelector('[name=lat]').value;
    const lng = document.querySelector('[name=lng]').value;

    // Válidadar se lat e lng estão preenchidos
    if (lng == '' && lat == '') {
        event.preventDefault();
        alert("Selecione um ponto no mapa!!!")
    }
}

// add fild image
function addPhotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector('#images')

    // pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // realizar o clone da ultima imagem adicionada
    const newFiledContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // Verificar se o campo está vazio
    const input = newFiledContainer.children[0]

    if (input.value == "") {
        return
    }

    // Limpar o campo
    input.value = ""

    // adicionar o clone ao container de imagens
    container.appendChild(newFiledContainer)
}

// Deletar Campos
function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    // Apaga o texto inserido se houver menos de 1 url
    if (fieldsContainer.length < 2) {
        span.parentNode.children[0].value = ""
        return
    }

    // deletar campo
    span.parentNode.remove()
}

// Select Yes or No
function toggleSelect(event) {

    // remover a classe active dos botões
    document.querySelectorAll('.button-select button')
        .forEach(button => button.classList.remove('active'))

    // colocar a classe .active do input
    const button = event.currentTarget
    button.classList.add('active')

    // Atualizar o input hidden com valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
}
