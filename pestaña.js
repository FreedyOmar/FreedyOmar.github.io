function redirigir() {
    window.location.href = "inicio.html"; 
}
// Función para generar contraseña a partir de varios campos
// Función para generar contraseña a partir de varios campos
// Función para generar contraseña a partir de los campos
function generarClaveDesdeCampos() {
    const palabra = document.getElementById('palabraClave').value;
    const numero = document.getElementById('numeroFavorito').value;
    const color = document.getElementById('colorFavorito').value;
    const musica = document.getElementById('musicaFavorita').value;

    if (!palabra || !numero || !color || !musica) {
        alert("Por favor llena todos los campos para generar la contraseña");
        return;
    }

    const clave = generarClaveBase(palabra + color + musica, numero);
    mostrarClave(clave);
}

// Función para generar contraseña completamente aleatoria
function generarClaveAleatoria() {
    const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    const longitud = 12; // puedes cambiar la longitud de la contraseña
    let clave = "";
    for (let i = 0; i < longitud; i++) {
        clave += caracteres[Math.floor(Math.random() * caracteres.length)];
    }
    mostrarClave(clave);
}

// Función base que mezcla caracteres, mayúsculas aleatorias y agrega número y símbolo
function generarClaveBase(base, numero) {
    let claveArray = base.split("");

    // Convertir algunas letras a mayúscula aleatoriamente
    claveArray = claveArray.map(char => {
        if (/[a-z]/i.test(char) && Math.random() < 0.4) { // 40% de probabilidad
            return char.toUpperCase();
        }
        return char;
    });

    // Mezcla tipo Fisher-Yates
    for (let i = claveArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [claveArray[i], claveArray[j]] = [claveArray[j], claveArray[i]];
    }

    // Agregar número favorito y un carácter especial aleatorio
    const caracteresEspeciales = "!@#$%^&*";
    const caracterEspecial = caracteresEspeciales[Math.floor(Math.random() * caracteresEspeciales.length)];

    return claveArray.join("") + numero + caracterEspecial;
}

// Función para mostrar la clave en el HTML
function mostrarClave(clave) {
    document.getElementById('claveGenerada').textContent = `Contraseña generada: ${clave}`;
}

// Eventos
document.getElementById('formulario').addEventListener('submit', function(e){
    e.preventDefault();
    generarClaveDesdeCampos();
});

document.getElementById('btnAleatorio').addEventListener('click', function(){
    generarClaveAleatoria();
});
function mostrarClave(clave) {
    Swal.fire({
        title: '🔒 Contraseña generada',
        html: `<strong>${clave}</strong>`,
        icon: 'success',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#3085d6'
    });
}
