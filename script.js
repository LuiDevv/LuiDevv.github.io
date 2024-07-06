// ALERTAS DE POLITICAS DE PRIVACIDAD //

document.addEventListener('DOMContentLoaded', function () {
    const acceptButton = document.getElementById('acceptPolicy');
    const rejectButton = document.getElementById('rejectPolicy');
    const policyAcceptedInput = document.getElementById('policyAccepted');

    acceptButton.addEventListener('click', function () {
        policyAcceptedInput.value = 'accepted';
        alert('Has aceptado las políticas de privacidad.');
    });

    rejectButton.addEventListener('click', function () {
        policyAcceptedInput.value = '';
        alert('Debes aceptar las políticas de privacidad para continuar.');
    });

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
        if (policyAcceptedInput.value !== 'accepted') {
            event.preventDefault();
            alert('Debes aceptar las políticas de privacidad para enviar el formulario.');
        }
    });
});

// MODO OSCURO // 
document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('toggle-dark-mode');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            toggleButton.classList.remove('bi-moon-fill');
            toggleButton.classList.add('bi-sun-fill'); 
            
        } else {
            toggleButton.classList.remove('bi-sun-fill');
            toggleButton.classList.add('bi-moon-fill'); 
        }
    });
});




