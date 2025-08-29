// Função para animar as missões com um efeito simples
document.addEventListener("DOMContentLoaded", function() {
    const missions = document.querySelectorAll(".mission");

    // Animação das missões com delay
    missions.forEach((mission, index) => {
        setTimeout(() => {
            mission.style.opacity = 1;
            mission.style.transition = "opacity 1s ease-out";
        }, index * 500);  // Atraso para cada missão
    });
});
