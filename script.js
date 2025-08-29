// Função para iniciar o jogo
document.getElementById('start-btn').addEventListener('click', startGame);

function startGame() {
    // Ocultar o botão de iniciar
    document.getElementById('start-btn').style.display = 'none';
    // Mostrar o conteúdo do jogo
    document.getElementById('game-content').classList.remove('hidden');

    // Mostrar a primeira missão
    showMission(1);
}

// Função para mostrar a missão
function showMission(missionNumber) {
    // Esconder todas as missões
    const missions = document.querySelectorAll('.mission');
    missions.forEach(mission => {
        mission.style.display = 'none'; // Esconde todas as missões
    });

    // Mostrar a missão atual
    const missionToShow = document.getElementById(`mission-${missionNumber}`);
    missionToShow.style.display = 'block'; // Exibe a missão específica
    
    // Aguardar o clique no botão "Avançar"
    const nextButton = missionToShow.querySelector('.next-btn');
    nextButton.addEventListener('click', () => {
        if (missionNumber < 3) {
            showMission(missionNumber + 1); // Avançar para a próxima missão
        }
    });
}
