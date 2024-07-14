// Función para validar que el texto contiene solo letras minúsculas sin acentos ni caracteres especiales
function esValido(texto) {
    return /^[a-z]+$/.test(texto);
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

// Evento para encriptar el texto al hacer clic en el botón de encriptar
document.querySelector('#btn-encrip').addEventListener('click', () => {
    const texto = document.querySelector('#textarea').value;
    if (esValido(texto)) {
        const textoEncriptado = encriptarTexto(texto);
        console.log(textoEncriptado);
        // Aquí puedes agregar el código para mostrar el texto encriptado en la página
        document.querySelector('#resultado').innerText = textoEncriptado;
        document.querySelector('.illustration').style.display = 'none'
        document.querySelector('.sub-mensaje').style.display = 'none'
    } else {
        alert('El texto debe contener solo letras minúsculas, sin acentos ni caracteres especiales.');
    }
});

// Evento para desencriptar el texto al hacer clic en el botón de desencriptar
document.querySelector('#btn-desencrip').addEventListener('click', () => {
    const textoEncriptado = document.querySelector('#textarea').value;
    const textoDesencriptado = desencriptarTexto(textoEncriptado);
    console.log(textoDesencriptado);
    // Aquí puedes agregar el código para mostrar el texto desencriptado en la página
    document.querySelector('#resultado').innerText = textoDesencriptado;
});