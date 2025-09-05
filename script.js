let storyStage = 'start'; // Controle do estado da história

// Controle da música de fundo
const audio = document.getElementById('bg-music');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeControl = document.getElementById('volumeControl');

// Função para alternar a música
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

// Função para atualizar a história e imagem de fundo
function updateStory() {
  const description = document.getElementById('description');
  const option1 = document.getElementById('btnOption1');
  const option2 = document.getElementById('btnOption2');
  const planetImage = document.getElementById('planet-image');

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
  else if (storyStage === 'alienAlliance') {
    description.innerText = "Otho consegue estabelecer um acordo com os alienígenas, criando uma aliança poderosa que promete trazer paz ao universo. Otho se torna uma lenda entre as civilizações.";
    option1.innerText = "Jogar novamente";
    option2.innerText = "Fim da jornada";
    planetImage.style.backgroundImage = "url('https://raw.githubusercontent.com/seu-usuario/repositorio/master/images/peace.jpg')";
  }
  else if (storyStage === 'destroyArtifact') {
    description.innerText = "Otho destrói o artefato e causa uma reação inesperada, levando a uma catástrofe no planeta. Ele consegue escapar por pouco, mas está sozinho no espaço, sem rumo.";
    option1.innerText = "Jogar novamente";
    option2.innerText = "Fim da jornada";
    planetImage.style.backgroundImage = "url('https://raw.githubusercontent.com/seu-usuario/repositorio/master/images/destruction.jpg')";
  }
}

// Função que lida com as escolhas do jogador
function handleChoice(choice) {
  if (choice === 'option1') {
    if (storyStage === 'start') {
      storyStage = 'exploreSurface'; // Explorar a superfície
    } 
    else if (storyStage === 'exploreSurface') {
      storyStage = 'cityDiscovery'; // Entrar na cidade alienígena
    } 
    else if (storyStage === 'cityDiscovery') {
      storyStage = 'alienAlliance'; // Fazer um acordo com os alienígenas
    }
  } 
  else if (choice === 'option2') {
    if (storyStage === 'start') {
      storyStage = 'exploreSurface'; // Investigar a atmosfera
    }
    else if (storyStage === 'exploreSurface') {
      storyStage = 'destroyArtifact'; // Destruir o artefato
    }
  }

  updateStory(); // Atualiza a história e imagem
}

// Lidar com os cliques dos botões
document.getElementById('btnOption1').addEventListener('click', () => handleChoice('option1'));
document.getElementById('btnOption2').addEventListener('click', () => handleChoice('option2'));

// Iniciar o jogo
updateStory();
