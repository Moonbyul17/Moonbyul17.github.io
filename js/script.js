// Función para mostrar u ocultar el botón de Subir según la posición de la página
window.onscroll = function() {
    showScrollButton();
    };
    
    function showScrollButton() {
        const btnScrollToTop = document.getElementById("btnScrollToTop");
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btnScrollToTop.style.display = "block";
        } else {
        btnScrollToTop.style.display = "none";
        }
    }
    
    // Función para hacer scroll hacia arriba
    function scrollToTop() {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    }
    