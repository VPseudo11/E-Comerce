import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import pintarProductos from './components/productos.js'
import { pintarArticulos, agregarArticulo, removerArticulo, removerTodo, vaciarCarrito, comprar, articulos } from './components/carrito.js'

const productosContenedor = document.getElementById('productosContenedor')
const bebidasContenedor = document.getElementById('bebidasContenedor')
const articulosContenedor = document.getElementById('articulosContenedor')

const btnsAcciones = document.getElementById('btnsAcciones')

document.addEventListener('DOMContentLoaded', () => {
    /* Pintar los productos */
    pintarProductos()

    /* Pintar los articulos */
    pintarArticulos()

    productosContenedor.addEventListener('click', (e) => {
        const target = e.target
        if (target.classList.contains('agregar')) {
            const id = target.dataset.id
            agregarArticulo(+id, 1)
        }

        pintarArticulos()
    })

    bebidasContenedor.addEventListener('click', (e) => {
        const target = e.target
        if (target.classList.contains('agregar')) {
            const id = target.dataset.id
            agregarArticulo(+id, 1)
        }

        pintarArticulos()
    })

    articulosContenedor.addEventListener('click', (e) => {
        const target = e.target
        if (target.classList.contains('agregar')) {
            const id = target.dataset.id
            agregarArticulo(+id, 1)
        }

        if (target.classList.contains('remover')) {
            const id = target.dataset.id
            removerArticulo(+id, 1)
        }

        if (target.classList.contains('removerTodo')) {
            const id = target.dataset.id
            removerTodo(+id)
        }

        pintarArticulos()
    })

    btnsAcciones.addEventListener('click', (e) => {
        const target = e.target
        if (target.classList.contains('limpiar')) {
            vaciarCarrito()
        }

        if (target.classList.contains('comprar')) {
            if (articulos.length > 0) {
                comprar()
                pintarProductos()
            } else {
                window.alert('No hay art??culos en el carrito, agregue unos cuantos')
            }
        }

        pintarArticulos()
    })
})

const swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})
