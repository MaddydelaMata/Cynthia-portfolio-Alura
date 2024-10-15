document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector(".contacto__formulario");
    const nombre = document.querySelector("input[placeholder='Nombre']");
    const correo = document.querySelector("input[placeholder='Correo Electrónico']");
    const asunto = document.querySelector("input[placeholder='Asunto']");
    const mensaje = document.querySelector("textarea[placeholder='Mensaje']");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar el envío automático
        limpiarErrores(); // Limpiar errores previos

        let errores = [];

        if (nombre.value.trim() === "") {
            errores.push("El nombre es obligatorio.");
            mostrarError(nombre, "El nombre es obligatorio.");
        }

        if (correo.value.trim() === "" || !validarCorreo(correo.value)) {
            errores.push("El correo no es válido.");
            mostrarError(correo, "Por favor, ingresa un correo válido.");
        }

        if (asunto.value.trim() === "") {
            errores.push("El asunto es obligatorio.");
            mostrarError(asunto, "El asunto es obligatorio.");
        }

        if (mensaje.value.trim() === "") {
            errores.push("El mensaje no puede estar vacío.");
            mostrarError(mensaje, "El mensaje no puede estar vacío.");
        }

        if (errores.length === 0) {
            alert("¡Gracias! Tu mensaje ha sido enviado.");
            formulario.reset(); // Limpiar el formulario
        }
    });

    function validarCorreo(correo) {
        const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return patron.test(correo);
    }

    function mostrarError(elemento, mensaje) {
        const error = document.createElement("p");
        error.classList.add("contacto__error");
        error.textContent = mensaje;
        elemento.parentElement.insertBefore(error, elemento.nextSibling);
    }

    function limpiarErrores() {
        const errores = document.querySelectorAll(".contacto__error");
        errores.forEach(function (error) {
            error.remove();
        });
    }
});