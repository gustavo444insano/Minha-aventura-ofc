document.getElementById('start-btn').addEventListener('click', startGame);

let currentMission = 1;

// Função para iniciar o jogo
function startGame() {
    // Ocultar o botão de iniciar
    document.getElementById('start-btn').style.display = 'none';
    // Mostrar o conteúdo do jogo
    document.getElementById('game-content').classList.remove('hidden');
    
    // Exibir a primeira missão
    showMission(currentMission);
}

// Função para mostrar a missão
function showMission(missionNumber) {
    const missions = document.querySelectorAll('.mission');
    
    // Ocultar todas as missões
    missions.forEach(mission => {
        mission.classList.remove('mission-visible');
    });

    // Exibir a missão atual
    const currentMissionElement = document.getElementById(`mission-${missionNumber}`);
    currentMissionElement.classList.add('mission-visible');

    // Aguardar clique no botão "Avançar"
    const nextButton = currentMissionElement.querySelector('.next-btn');
    nextButton.addEventListener('click', () => {
        if (currentMission < 3) {
            currentMission++;
            showMission(currentMission);
        } else {
            alert('Você completou todas as missões! Parabéns!');
        }
    });
}
