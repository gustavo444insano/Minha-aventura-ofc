let storyStage = 'start'; // Controle do estado da história

// Controle da música de fundo
const audio = document.getElementById('bg-music');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeControl = document.getElementById('volumeControl');

// Função que alterna entre reproduzir e pausar a música
function toggleMusic() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerText = "Pausar Música";
  } else {
    audio.pause();
    playPauseBtn.innerText = "Reproduzir Música";
  }
}

// Ajuste do volume da música
volumeControl.addEventListener('input', () => {
  audio.volume = volumeControl.value;
});

// Função que altera a história conforme o progresso
function updateStory() {
  const description = document.getElementById('description');
  const option1 = document.getElementById('btnOption1');
  const option2 = document.getElementById('btnOption2');

  const planetImage = document.getElementById('planet-image');

  // Lógica da história com base no estado
  if (storyStage === 'start') {
    description.innerText = "Otho, o astronauta, acaba de chegar a um planeta desconhecido. Sua missão é explorar e descobrir os segredos que ele esconde. O que Otho vai fazer?";
    option1.innerText = "Explorar a superfície";
    option2.innerText = "Investigar a atmosfera do planeta";
    planetImage.style.backgroundImage = "url('https://raw.githubusercontent.com/seu-usuario/repositorio/master/images/planet.jpg')";
  } 
  else if (storyStage === 'exploreSurface') {
    description.innerText = "Otho desce na superfície e encontra uma cidade alienígena. Ela parece abandonada, mas há sinais de vida. Otho decide...";
    option1.innerText = "Entrar na cidade";
    option2.innerText = "Procurar por artefatos fora da cidade";
    planetImage.style.backgroundImage = "url('https://raw.githubusercontent.com/seu-usuario/repositorio/master/images/alien_city.jpg')";
  } 
  else if (storyStage === 'cityDiscovery') {
    description.innerText = "Dentro da cidade, Otho encontra um artefato antigo, irradiando uma energia desconhecida. Ao tocá-lo, ele recebe uma mensagem telepática de uma inteligência alienígena. A mensagem diz...";
    option1.innerText = "Fazer um acordo com os alienígenas";
    option2.innerText = "Destruir o artefato para evitar riscos";
    planetImage.style.backgroundImage = "url('https://raw.githubusercontent.com/seu-usuario/repositorio/master/images/artifact.jpg')";
  }
  // Mais ramificações e finais podem ser adicionados conforme o enredo

}

// Função que lida com as escolhas do jogador
function handleChoice(choice) {
  if (choice === 'option1') {
    if (storyStage === 'start') {
      storyStage = 'exploreSurface'; // Explorar a superfície
    } else if (storyStage === 'exploreSurface') {
      storyStage = 'cityDiscovery'; // Descobrir cidade alienígena
    } 
  } else if (choice === 'option2') {
    if (storyStage === 'start') {
      storyStage = 'exploreSurface'; // Investigar atmosfera
    } else if (storyStage === 'exploreSurface') {
      storyStage = 'destroyArtifact'; // Destruir artefato
    }
  }

  updateStory(); // Atualizar a história com base na escolha
}

// Event listeners para os botões
document.getElementById('btnOption1').addEventListener('click', () => handleChoice('option1'));
document.getElementById('btnOption2').addEventListener('click', () => handleChoice('option2'));

// Event listener para controlar a música
playPauseBtn.addEventListener('click', toggleMusic);

// Atualizar a história ao iniciar o jogo
updateStory();
