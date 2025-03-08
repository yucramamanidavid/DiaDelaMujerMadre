// Efecto de escritura automática
const typedText = document.getElementById('typed-text');
const text = "Eres la luz que ilumina mi vida, la razón por la que cada día es especial. Gracias por ser quien eres.";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typedText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

typeWriter();

// Mostrar sorpresa
document.getElementById('surpriseBtn').addEventListener('click', function() {
    const surpriseElement = document.getElementById('surprise');
    surpriseElement.classList.remove('hidden');
    surpriseElement.classList.add('animate__animated', 'animate__heartBeat');
});

// Formulario de Mensaje
document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje, mamá! 💖');
});