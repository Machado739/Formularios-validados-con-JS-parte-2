document.addEventListener("DOMContentLoaded", function() {
    const tablaResultados = document.getElementById("tablaResultados");
    const idBusquedaInput = document.getElementById("idBusqueda");
    const buscarButton = document.getElementById("buscar");
    const agregarButton = document.getElementById("agregar"); // Botón "Agregar más registros"
    const borrarButton = document.getElementById("borrar");

    // Obtener los envíos almacenados en el almacenamiento local
    let envios = JSON.parse(localStorage.getItem("envios")) || [];

    // Función para actualizar la tabla de resultados
    function actualizarTabla() {
        // Limpiar la tabla antes de actualizarla
        tablaResultados.innerHTML = '';

        // Crear filas para la tabla de resultados
        envios.forEach(function(envio, index) {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${envio.id}</td>
                <td>${envio.nombre}</td>
                <td>${envio.apellidos}</td>
                <td>${envio.telefono}</td>
                <td>${envio.correo}</td>
                <td>${envio.edad}</td>
                <td>${envio.fechaNacimiento}</td>
                <td>
                    <button class="borrar" data-index="${index}">Borrar</button>
                </td>
            `;

            tablaResultados.appendChild(fila);
        });

        // Agregar event listener para los botones "Borrar"
        const botonesBorrar = document.querySelectorAll(".borrar");
        botonesBorrar.forEach(function(boton) {
            boton.addEventListener("click", function(event) {
                const index = event.target.dataset.index;
                if (index !== undefined && index >= 0 && index < envios.length) {
                    // Borrar el registro actual del arreglo de envíos
                    envios.splice(index, 1);
                    localStorage.setItem("envios", JSON.stringify(envios));
                    // Actualizar la tabla
                    actualizarTabla();
                }
            });
        });
    }

    // Actualizar la tabla inicial
    actualizarTabla();

    // Función para buscar registros
    buscarButton.addEventListener("click", function() {
        const idBusqueda = idBusquedaInput.value.trim().toLowerCase();

        const resultadosFiltrados = envios.filter(function(envio) {
            return envio.id.toLowerCase().includes(idBusqueda);
        });

        // Limpiar el arreglo de envíos
        envios.length = 0;

        // Agregar los resultados filtrados nuevamente al arreglo
        resultadosFiltrados.forEach(function(envio) {
            envios.push(envio);
        });

        // Actualizar la tabla con los resultados filtrados
        actualizarTabla();
    });

    // Función para redirigir a la página principal al presionar "Agregar más registros"
    agregarButton.addEventListener("click", function() {
        window.location.href = "index.html"; // Redirige a la página principal
    });

    // Función para borrar todos los registros
    borrarButton.addEventListener("click", function() {
        // Confirmar si el usuario realmente desea borrar todos los registros
        if (confirm("¿Estás seguro de que deseas borrar todos los registros?")) {
            // Borrar todos los registros del arreglo de envíos
            envios = [];
            localStorage.removeItem("envios");
            // Actualizar la tabla para que esté vacía
            actualizarTabla();
        }
    });
});