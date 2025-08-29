// Variáveis para controle de missão
let currentMission = 1;

// Função para iniciar o jogo
document.getElementById('start-btn').addEventListener('click', startGame);

function startGame() {
    // Ocultar o botão de iniciar
    document.getElementById('start-btn').classList.add('hidden');
    // Mostrar o conteúdo do jogo
    document.getElementById('game-content').classList.remove('hidden');
    
    // Mostrar a primeira missão
    showMission(currentMission);
}

// Função para mostrar a missão
function showMission(missionNumber) {
    // Esconder todas as missões
    const missions = document.querySelectorAll('.mission');
    missions.forEach(mission => mission.classList.remove('visible'));

    // Mostrar a missão atual
    const missionToShow = document.getElementById(`mission-${missionNumber}`);
    missionToShow.classList.add('visible');
    
    // Aguardar o clique no botão "Avançar"
    const nextButton = missionToShow.querySelector('.next-btn');
    nextButton.addEventListener('click', () => {
        // Avançar para a próxima missão
        if (missionNumber < 3) {
            currentMission++;
            showMission(currentMission);
        }
    });
}
