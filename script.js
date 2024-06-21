//Script para el despliegue del directorio del footer

var acc = document.getElementsByClassName("upn-contact-accordion");
var i;

// Inicializar el panel en display: none
for (i = 0; i < acc.length; i++) {
    var panel = acc[i].nextElementSibling;
    panel.style.display = "none";
    panel.style.maxHeight = null;
}

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}