document.addEventListener("DOMContentLoaded", () => {
    const sections = {
        viaje: document.querySelector(".viaje-section"),
        reservas: document.querySelector(".reservas-section"),
        vehiculos: document.querySelector(".vehiculos-section"),
        misViajes: document.querySelector(".misviajes-section"),
    };

    const links = document.querySelectorAll("nav a");
    const conductoresContainer = document.getElementById("conductores-container");
    const botonAceptar = document.getElementById("Aceptar");
    const selectPasajeros = document.getElementById("pasajeros-select");

    // Botones de ordenamiento
    const sortAsc = document.getElementById("sort-asc");
    const sortDesc = document.getElementById("sort-desc");

    // Mostrar solo la sección "Viaje" al inicio
    Object.values(sections).forEach(
        (section) => (section.style.display = "none")
    );
    sections.viaje.style.display = "block";

    // Función para ocultar todas las secciones
    const hideAllSections = () => {
        Object.values(sections).forEach(
            (section) => (section.style.display = "none")
        );
    };

    // Agregar eventos para cada enlace
    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Evitar redirección
            hideAllSections(); // Ocultar todas las secciones

            const targetId = link.getAttribute("data-target");

            // Ocultar todas las secciones, incluyendo "Gestionar cuenta"
            secciones.forEach((section) => (section.style.display = "none"));
            gestionarCuentaSection.style.display = "none";
            if (targetId && sections[targetId]) {
                sections[targetId].style.display = "block"; // Mostrar sección correspondiente
            }
        });
    });

    // Definición de conductores para cada rango de pasajeros
    // Definición de conductores para cada rango de pasajeros
    const conductores = {
        1: [
            { servicio: "Quickly X", tipo: "Carro", img: "a/c1.jpg", precio: "$20", mensaje: "Viaje económico todos los días" },
            { servicio: "Quickly X", tipo: "Carro", img: "a/c1.jpg", precio: "$22", mensaje: "El mejor confort al mejor precio" },
            { servicio: "Quickly X", tipo: "Carro", img: "a/c1.jpg", precio: "$25", mensaje: "Eficiencia y comodidad garantizada" },
        ]
        ,
        2: [
            { servicio: "Quickly X", tipo: "Carro", img: "a/c2.jpg", precio: "$20", mensaje: "Viaje económico todos los días" },
            { servicio: "Quickly X", tipo: "Carro", img: "a/c2.jpg", precio: "$22", mensaje: "El mejor confort al mejor precio" },
            { servicio: "Quickly X", tipo: "Carro", img: "a/c2.jpg", precio: "$25", mensaje: "Eficiencia y comodidad garantizada" },
        ],
        3: [
            { servicio: "Quickly X", tipo: "Carro", img: "a/c3.jpg", precio: "$20", mensaje: "Viaje económico todos los días" },
            { servicio: "Quickly X", tipo: "Carro", img: "a/c3.jpg", precio: "$22", mensaje: "El mejor confort al mejor precio" },
            { servicio: "Quickly X", tipo: "Carro", img: "a/c3.jpg", precio: "$25", mensaje: "Eficiencia y comodidad garantizada" },
        ],
        4: [
            {
                servicio: "Comfort Electric",
                tipo: "Minivan",
                img: "a/c4.jpg",
                precio: "$30",
                mensaje: "Ideal para grupos y familias"
            },
            {
                servicio: "Comfort Electric",
                tipo: "Minivan",
                img: "a/c4.jpg",
                precio: "$32",
                mensaje: "Viajes cómodos y ecológicos",
            },
            {
                servicio: "Comfort Electric",
                tipo: "Minivan",
                img: "a/c4.jpg",
                precio: "$35",
                mensaje: "Espacio y comodidad para todos",
            },
        ],
        5: [
            {
                servicio: "Comfort Electric",
                tipo: "Minivan",
                img: "a/c5.jpg",
                precio: "$30",
                mensaje: "Ideal para grupos y familias"
            },
            {
                servicio: "Comfort Electric",
                tipo: "Minivan",
                img: "a/c5.jpg",
                precio: "$32",
                mensaje: "Ideal para grupos y familias"
            },
            {
                servicio: "Comfort Electric",
                tipo: "Minivan",
                img: "a/c5.jpg",
                precio: "$35",
                mensaje: "Viajes cómodos y ecológicos",
            },
        ],
        6: [
            {
                servicio: "Comfort Electric",
                tipo: "Minivan",
                img: "a/c6.jpg",
                precio: "$30",
                mensaje: "Viajes cómodos y ecológicos",
            },
            {
                servicio: "Comfort Electric",
                tipo: "Minivan",
                img: "a/c6.jpg",
                precio: "$32",
                mensaje: "Eficiencia y comodidad garantizada",
            },
            {
                servicio: "Comfort Electric",
                tipo: "Minivan",
                img: "a/c6.jpg",
                precio: "$35",
                mensaje: "Eficiencia y comodidad garantizada",
            },
        ],
        7: [
            {
                servicio: "QuicklyXL",
                tipo: "Camioneta",
                img: "a/c7.jpg",
                precio: "$40",
                mensaje: "Espacio extra para tu equipaje",
            },
            {
                servicio: "QuicklyXL",
                tipo: "Camioneta",
                img: "a/c7.jpg",
                precio: "$42",
                mensaje: "Lujo y espacio en un solo servicio",
            },
            {
                servicio: "QuicklyXL",
                tipo: "Camioneta",
                img: "a/c7.jpg",
                precio: "$45",
                mensaje: "La mejor opción para grandes grupos",
            },
        ],
        8: [
            {
                servicio: "QuicklyXL",
                tipo: "Camioneta",
                img: "a/c8.jpg",
                precio: "$40",
                mensaje: "El mejor confort al mejor precio",
            },
            {
                servicio: "QuicklyXL",
                tipo: "Camioneta",
                img: "a/c8.jpg",
                precio: "$42",
                mensaje: "Eficiencia y comodidad garantizada",
            },
            {
                servicio: "QuicklyXL",
                tipo: "Camioneta",
                img: "a/c8.jpg",
                precio: "$45",
                mensaje: "Viajes cómodos y ecológicos",
            },
        ],
        9: [
            {
                servicio: "QuicklyXL",
                tipo: "Camioneta",
                img: "a/c9.jpg",
                precio: "$40",
                mensaje: "El mejor confort al mejor precio",
            },
            {
                servicio: "QuicklyXL",
                tipo: "Camioneta",
                img: "a/c9.jpg",
                precio: "$42",
                mensaje: "Eficiencia y comodidad garantizada",
            },
            {
                servicio: "QuicklyXL",
                tipo: "Camioneta",
                img: "a/c9.jpg",
                precio: "$45",
                mensaje: "Viajes cómodos y ecológicos",
            },
        ],
    };

    // Función para mostrar conductores
    const mostrarConductores = (pasajerosSeleccionados) => {
        conductoresContainer.innerHTML = ""; // Limpiar el contenedor

        const conductoresSeleccionados = conductores[pasajerosSeleccionados];

        if (!conductoresSeleccionados || conductoresSeleccionados.length === 0) {
            conductoresContainer.innerHTML =
                "<p>No hay opciones para el número de pasajeros seleccionados.</p>";
            return;
        }

        conductoresSeleccionados.forEach((conductor) => {
            const div = document.createElement("div");
            div.classList.add("vehicle-option");

            div.innerHTML = `
                <img src="${conductor.img}" alt="${conductor.servicio}" />
                <div>
                    <h3>${conductor.servicio} (${conductor.tipo})</h3>
                    <p>${conductor.mensaje || ""}</p>
                    <div class="price">${conductor.precio}</div>
                </div>
            `;

            // Agregar evento para seleccionar conductor
            div.addEventListener("click", () => {
                const opciones = document.querySelectorAll(".vehicle-option");
                opciones.forEach((opcion) => opcion.classList.remove("selected"));
                div.classList.add("selected");
            });

            conductoresContainer.appendChild(div);
        });

        // Mostrar el contenedor si todo está correcto
        conductoresContainer.style.display = "block";
    };

    // Manejo del clic en el botón "Aceptar"
    botonAceptar.addEventListener("click", () => {
        const pasajerosSeleccionados = selectPasajeros.value; // Obtén el valor seleccionado
        mostrarConductores(pasajerosSeleccionados); // Llama a la función para mostrar las tarjetas
    });

    // Función para ordenar los precios
    const sortConductores = (order) => {
        const conductoresDivs = Array.from(conductoresContainer.children);
        const sortedConductores = conductoresDivs.sort((a, b) => {
            const priceA = parseFloat(
                a.querySelector(".price").textContent.replace("$", "")
            );
            const priceB = parseFloat(
                b.querySelector(".price").textContent.replace("$", "")
            );
            return order === "asc" ? priceA - priceB : priceB - priceA;
        });

        conductoresContainer.innerHTML = "";
        sortedConductores.forEach((conductor) =>
            conductoresContainer.appendChild(conductor)
        );
    };

    // Ordenar de menor a mayor precio
    sortAsc.addEventListener("click", () => sortConductores("asc"));

    // Ordenar de mayor a menor precio
    sortDesc.addEventListener("click", () => sortConductores("desc"));



    //GESTIONAR CUENTA
    const perfilButton = document.getElementById("perfil-button");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const gestionarCuentaLink = document.getElementById("gestionar-cuenta-link");
    const gestionarCuentaSection = document.querySelector(".gestionar-cuenta-section");
    const secciones = document.querySelectorAll("main section"); // Todas las secciones principales
    const navLinks = document.querySelectorAll("nav a"); // Enlaces del menú de navegación

    // Mostrar/Ocultar el menú desplegable al hacer clic en el botón "Perfil"
    perfilButton.addEventListener("click", () => {
        const isVisible = dropdownMenu.style.display === "block";
        dropdownMenu.style.display = isVisible ? "none" : "block";
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", (event) => {
        if (!perfilButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });

    // Mostrar la sección "Gestionar cuenta" al hacer clic en el enlace correspondiente
    gestionarCuentaLink.addEventListener("click", (event) => {
        event.preventDefault(); // Evitar redirección por defecto

        // Ocultar todas las secciones
        secciones.forEach((section) => (section.style.display = "none"));

        // Mostrar la sección de gestionar cuenta
        gestionarCuentaSection.style.display = "block";

        // Ocultar el menú desplegable
        dropdownMenu.style.display = "none";
    });
});
