document.addEventListener("DOMContentLoaded", function () {
    // Referencias a las secciones y al footer
    const sections = {
        principal: document.getElementById("principal-section"),
        viaje: document.getElementById("viaje-section"),
        conduce: document.getElementById("conduce-section"),
        conocenos: document.getElementById("conocenos-section"),
        contactanos: document.getElementById("contactanos-section"),
        inicia: document.getElementById("inicia-section"),
        registrate: document.getElementById("registrate-section"),
        registroConductor: document.querySelector(".rC-section"),
        registroUsuario: document.querySelector(".rU-section"),
    };
    const footer = document.getElementById("footer");

    // Función para ocultar todas las secciones
    function ocultarTodasLasSecciones() {
        Object.values(sections).forEach(section => {
            if (section) {
                section.style.display = "none";
            }
        });
    }

    // Función para mostrar una sección específica
    function mostrarSeccion(seccionId) {
        ocultarTodasLasSecciones();
        if (sections[seccionId]) {
            sections[seccionId].style.display = "block";
        }

        // Mostrar el footer solo si es la sección principal
        if (footer) {
            footer.style.display = seccionId === "principal" ? "block" : "none";
        }
    }

    // Función para mostrar la sección de "Registrar Conductor"
    function mostrarSeccionConductor() {
        ocultarTodasLasSecciones();
        if (sections.registroConductor) {
            sections.registroConductor.style.display = "block";
        }
    }

    // Función para mostrar la sección de "Registrar Usuario"
    function mostrarSeccionUsuario() {
        ocultarTodasLasSecciones();
        if (sections.registroUsuario) {
            sections.registroUsuario.style.display = "block";
        }
    }

    // Eventos para los enlaces del menú
    const navEvents = {
        "viaje-link": "viaje",
        "conduce-link": "conduce",
        "conocenos-link": "conocenos",
        "contactanos-link": "contactanos",
        "inicia-link": "inicia",
        "registrate-link": "registrate",
    };

    Object.keys(navEvents).forEach(linkId => {
        const link = document.getElementById(linkId);
        if (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                mostrarSeccion(navEvents[linkId]);
            });
        }
    });

    // Inicializar Popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.forEach(popoverTriggerEl => {
        new bootstrap.Popover(popoverTriggerEl);
    });

    // Mostrar spinner al hacer clic en un enlace
    function showSpinner(event) {
        event.preventDefault(); // Prevenir la acción predeterminada
        const link = document.getElementById("loadLink");
        if (link) {
            link.classList.add("loading");

            // Simular un proceso de carga con un tiempo de espera
            setTimeout(() => {
                link.classList.remove("loading");
            }, 3000); // Duración de la carga simulada (3 segundos)
        }
    }

    // Exportar funciones al objeto global para uso en el HTML
    window.showSpinner = showSpinner;
    window.mostrarSeccion = mostrarSeccion;
    window.mostrarSeccionConductor = mostrarSeccionConductor;
    window.mostrarSeccionUsuario = mostrarSeccionUsuario;

    // Asegura que la sección principal y el footer estén visibles al cargar la página
    mostrarSeccion("principal");

    // Botón hamburguesa (Toggler)
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    if (navbarToggler && navbarCollapse) {
        const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                if (navbarToggler.offsetParent !== null) {
                    navbarToggler.click();
                }
            });
        });
    }

    const loginForm = document.getElementById("loginForm");
    const continueBtn = document.getElementById("continueBtn");

    // Validación y redirección
    if (continueBtn && loginForm) {
        continueBtn.addEventListener("click", function () {
            // Verifica si los campos están llenos y válidos
            if (loginForm.checkValidity()) {
                // Redirige a Principal2.html
                window.location.href = "Principal2.html";
            } else {
                // Si no son válidos, muestra mensajes de error del formulario
                loginForm.reportValidity();
            }
        });
    }
});
