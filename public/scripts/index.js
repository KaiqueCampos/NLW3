function render() {

    //Read products.json with fetch
    fetch('products.json')
        .then(res => res.json())
        .then(data => {

            // Get products-grid
            const container = document.querySelector('.products-grid')
            container.innerHTML = ''

            // Create procuct for each product in array
            data.map(item => {
                const div = document.createElement('div.product')
                div.innerHTML =
                    '<div class="image_prod"><img src="images/Bryan-Skyline.jpg" alt="Imagem da Miniatura"></div>' +
                    '<div class="product-info"><h2>' + item.prod_name + '</h2><p>' + item.prod_id + '</p></div>'

                container.appendChild(div)
            })
        })

}

// Render items in function when page is loaded
window.addEventListener('load', e => {
    render();
})
