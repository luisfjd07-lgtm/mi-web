// =====================================================
// DINÁMICA 1: MODO OSCURO
// =====================================================

const botonModoOscuro = document.getElementById("modoOscuro");

if (botonModoOscuro) {

    botonModoOscuro.addEventListener("click", function () {

        // Activar o desactivar modo oscuro
        document.body.classList.toggle("dark-mode");

        // Cambiar el icono del botón
        if (document.body.classList.contains("dark-mode")) {

            botonModoOscuro.textContent = "☀️";

            botonModoOscuro.setAttribute(
                "aria-label",
                "Activar modo claro"
            );

        } else {

            botonModoOscuro.textContent = "🌙";

            botonModoOscuro.setAttribute(
                "aria-label",
                "Activar modo oscuro"
            );
        }

    });

}


// =====================================================
// DINÁMICA 2: CARRITO DE COMPRAS
// =====================================================

let cantidad = 0;
let total = 0;

const botonesProductos =
    document.querySelectorAll(".boton-producto");

const cantidadCarrito =
    document.getElementById("cantidadCarrito");

const totalCarrito =
    document.getElementById("totalCarrito");

const vaciarCarrito =
    document.getElementById("vaciarCarrito");


// Agregar productos

botonesProductos.forEach(function (boton) {

    boton.addEventListener("click", function () {

        // Obtener precio del producto
        const precio =
            parseFloat(boton.dataset.precio);

        // Aumentar cantidad
        cantidad++;

        // Aumentar total
        total += precio;

        // Mostrar información actualizada
        actualizarCarrito();

        // Cambiar temporalmente el texto del botón
        boton.textContent = "✅ Agregado";

        setTimeout(function () {

            boton.textContent =
                "🛒 Agregar al carrito";

        }, 1000);

    });

});


// Actualizar carrito

function actualizarCarrito() {

    cantidadCarrito.textContent =
        cantidad;

    totalCarrito.textContent =
        `S/ ${total.toFixed(2)}`;

}


// Vaciar carrito

if (vaciarCarrito) {

    vaciarCarrito.addEventListener(
        "click",
        function () {

            cantidad = 0;

            total = 0;

            actualizarCarrito();

        }
    );

}


// =====================================================
// ANIMACIÓN AL HACER SCROLL
// =====================================================

const elementos =
    document.querySelectorAll(".animar-scroll");

const observador =
    new IntersectionObserver(
        function (elementosObservados) {

            elementosObservados.forEach(
                function (elemento) {

                    if (elemento.isIntersecting) {

                        elemento.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


elementos.forEach(function (elemento) {

    observador.observe(elemento);

});












