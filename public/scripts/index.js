// function render() 

//const { query } = require("express");

//   //Read products.json with fetch
//   fetch('products.json')
//       .then(res => res.json())
//       .then(data => {

//           console.log(data)
//           const product = document.querySelector('.c-carousel__slide')


//           // Get products-grid
//           const container = document.querySelector('.c-carousel__slides')
//           container.innerHTML = ''
//           // Create procuct for each product in array
//           data.map(item => {
//               const div = document.createElement('div')
//               console.log(div)
//               div.innerHTML =
//               '<div class="image_prod"><img src="images/Bryan-Skyline.jpg" alt="Imagem da Miniatura"></div>' +
//               '<div class="product-info"><h2>' + item.prod_name + '</h2><p>' + item.prod_id + '</p></div>'

//               console.log(div.classList)
//               container.appendChild(div)
//           })
//       })

// }

// // Render items in function when page is loaded
// window.addEventListener('load', e => {
//   render();
// })

// function render() {

//   //Read products.json with fetch
//   fetch('products.json')
//       .then(res => res.json())
//       .then(data => {

//           // Get products-grid
//           const container = document.querySelector('.carousel')
//           container.innerHTML = ''

//           // Create procuct for each product in array
//           data.map(item => {
//               const div = document.createElement('div.product')
//               div.innerHTML =
//                   '<div class="image_prod"><img src="images/Bryan-Skyline.jpg" alt="Imagem da Miniatura"></div>' +
//                   '<div class="product-info"><h2>' + item.prod_name + '</h2><p>' + item.prod_id + '</p></div>'

//                   console.log(div.classList)
//               container.appendChild(div)
//           })
//       })
// }

// // Render items in function when page is loadeda
// window.addEventListener('load', e => {
//   render();
// })

const Handlebars = require("handlebars");

var template = document.querySelector('#index');
var compile = Handlebars.compile(template);

var data = {
    'cars': [
        {
            "prod_id": 1,
            "prod_name": "Nissan GTR Bryan Oconner"
        },
        {
            "prod_id": 2,
            "prod_name": "Nissan GTR Bryan Oconner"
        },
        {
            "prod_id": 3,
            "prod_name": "Nissan GTR Bryan Oconner"
        }
    ]
}

var compileHTML = compile(data);
document.querySelector('.c-carousel__slides').innerHTML += compileHTML;

