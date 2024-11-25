document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío normal del formulario

    var formData = new FormData(this);

    // Muestra la barra de progreso
    document.getElementById('progressContainer').style.display = 'block';

    var progressBar = document.getElementById('progressBar');
    var progress = 0;

    // Actualiza la barra de progreso cada 100 ms hasta llegar a 100%
    var interval = setInterval(function () {
        progress += 2; // Incrementar el progreso
        progressBar.style.width = progress + '%';

        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 100);

    // Crear la solicitud POST
    fetch('https://script.google.com/macros/s/AKfycbz2hNAwZ_d1e4mKvdqu1m-bbItvwCIfQ2ECB2nTtWFTSj7xeshJO0hy0wn0cubKG0L0ow/exec', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.text())
        .then(data => {
            // Barra de progreso completada
            progressBar.style.width = '100%';

            setTimeout(function () {
                // Ocultar barra de progreso y reiniciar el formulario
                document.getElementById('progressContainer').style.display = 'none';
                document.getElementById('registroForm').reset(); // Reiniciar el formulario
                alert("Datos enviados correctamente");
            }, 500);
        })
        .catch(error => {
            // Barra de progreso completada con error
            progressBar.style.width = '100%';

            setTimeout(function () {
                // Ocultar barra de progreso y mostrar error
                document.getElementById('progressContainer').style.display = 'none';
                alert("Hubo un error al enviar los datos");
            }, 500);
        });
});
