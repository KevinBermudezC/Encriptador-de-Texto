// Función para validar que el texto contiene solo letras minúsculas sin acentos ni caracteres especiales
function esValido(texto) {
    return /^[a-z\s]+$/.test(texto);
}
// Función para encriptar el texto
function encriptarTexto(texto) {
    const reglas = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    
    return texto.replace(/[eioua]/g, letra => reglas[letra]);
}
// Función para desencriptar el texto
function desencriptarTexto(textoEncriptado) {
    const reglas = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    
    return textoEncriptado.replace(/enter|imes|ai|ober|ufat/g, encriptado => reglas[encriptado]);
}

// Función para mostrar el resultado y ocultar elementos
function mostrarResultado(texto) {
    document.querySelector('.illustration').style.display = 'none';
    document.querySelector('.sub-mensaje').style.display = 'none';
    const resultado = document.querySelector('#resultado');
    resultado.innerText = texto;
    resultado.classList.add('mensaje-resultado');
    document.querySelector('#btn-copiar').style.display = 'block';
}

// Evento para encriptar el texto al hacer clic en el botón de encriptar
document.querySelector('#btn-encrip').addEventListener('click', () => {
    const texto = document.querySelector('#textarea').value;
    if (esValido(texto)) {
        const textoEncriptado = encriptarTexto(texto);
        mostrarResultado(textoEncriptado);
    } else {
        alert('El texto debe contener solo letras minúsculas, sin acentos ni caracteres especiales.');
    }
});

// Evento para desencriptar el texto al hacer clic en el botón de desencriptar
document.querySelector('#btn-desencrip').addEventListener('click', () => {
    const textoEncriptado = document.querySelector('#textarea').value;
    const textoDesencriptado = desencriptarTexto(textoEncriptado);
    mostrarResultado(textoDesencriptado);
});

document.querySelector('#btn-copiar').addEventListener('click', () => {
    const textoEncriptado = document.querySelector('#resultado').innerText;
    navigator.clipboard.writeText(textoEncriptado).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        alert('Error al copiar el texto: ', err);
    });
});