document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Evitar el envío predeterminado del formulario

    var form = this;
    var progressContainer = document.querySelector('.progress-container');
    var progressBar = document.querySelector('.progress-bar');
    var submitButton = form.querySelector('button');

    // Mostrar la barra de progreso
    progressContainer.style.display = 'block';

    var progress = 0;
    var interval = setInterval(function () {
        if (progress >= 100) {
            clearInterval(interval);
            // Enviar el formulario
            form.submit();

            // Reiniciar el formulario después de enviarlo
            form.reset();

            // Ocultar la barra de progreso
            progressContainer.style.display = 'none';

            // Si deseas mostrar un mensaje de éxito o hacer algo más, puedes hacerlo aquí
            alert("¡Datos enviados con éxito!");

        } else {
            progress += 10;
            progressBar.style.width = progress + '%';
        }
    }, 300);
});
