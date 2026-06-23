function nextStep(step) {
    // 1. Ocultar todos los pasos
    const steps = document.querySelectorAll('.step');
    steps.forEach(s => {
        s.style.display = 'none';
        s.classList.remove('active');
    });

    // 2. Mostrar el paso actual
    const current = document.getElementById('step' + step);
    if (current) {
        current.style.display = 'block';
        current.classList.add('active');
    }

    // 3. Controlar la barra de progreso
    const progBar = document.getElementById('progBarCont');
    const fill = document.getElementById('progress');
    
    if (step === 0) {
        progBar.style.display = 'none'; // Ocultar barra en el login
    } else {
        progBar.style.display = 'block'; // Mostrar barra en el registro
        const percent = (step / 3) * 100;
        fill.style.width = percent + '%';
    }
}

// Función específica para el botón "Regístrate"
function goToRegister() {
    nextStep(1);
}

function toggleChip(el) {
    el.classList.toggle('active');
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    nextStep(0);
});

// Manejo de formulario
document.getElementById('multiStepForm').onsubmit = function(e) {
    e.preventDefault();
    const isLogin = document.getElementById('step0').classList.contains('active');
    
    if (isLogin) {
        alert("Iniciando sesión...");
    } else {
        alert("¡Cuenta creada! Bienvenido a la comunidad.");
    }
    window.location.href = 'descubrir.html';
};