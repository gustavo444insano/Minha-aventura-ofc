let storyStage = 'start'; // Controle do estado da história

// Função que altera a história conforme o progresso
function updateStory() {
  const description = document.getElementById('description');
  const option1 = document.getElementById('btnOption1');
  const option2 = document.getElementById('btnOption2');

  // Lógica da história com base no estado
  if (storyStage === 'start') {
    description.innerText = "Otho, o astronauta, acaba de chegar a um planeta desconhecido. Sua missão é explorar e descobrir os segredos que ele esconde. O que Otho vai fazer?";
    option1.innerText = "Explorar a superfície";
    option2.innerText = "Ficar na nave e monitorar o planeta";
  } 
  else if (storyStage === 'explore') {
    description.innerText = "Otho desce na superfície do planeta e encontra uma estrutura alienígena. Ele se aproxima com cautela, mas uma porta se abre automaticamente à sua frente. O que Otho fará?";
    option1.innerText = "Entrar na estrutura alienígena";
    option2.innerText = "Retornar à nave";
  }
  else if (storyStage === 'alienStructure') {
    description.innerText = "Dentro da estrutura, Otho encontra um artefato brilhante e misterioso. Ele começa a brilhar intensamente e Otho sente uma estranha sensação de conexão mental. O que Otho fará?";
    option1.innerText = "Tocar o artefato";
    option2.innerText = "Deixar o artefato e voltar para a nave";
  }
  else if (storyStage === 'touchArtifact') {
    description.innerText = "Ao tocar o artefato, Otho é transportado para outra dimensão, onde seres alienígenas começam a se comunicar com ele mentalmente. Eles oferecem uma escolha: Otho pode retornar à Terra ou explorar mais o universo.";
    option1.innerText = "Aceitar explorar mais o universo";
    option2.innerText = "Retornar para a Terra";
  }
  else if (storyStage === 'backToShip') {
    description.innerText = "Otho volta para a nave, decidido a continuar sua missão. O planeta continua sendo um mistério, mas Otho tem muitas mais aventuras pela frente.";
    option1.innerText = "Iniciar nova jornada";
    option2.innerText = "Fim da missão";
  } 
}

// Função que lida com as escolhas do jogador
function handleChoice(choice) {
  if (choice === 'option1') {
    if (storyStage === 'start') {
      storyStage = 'explore'; // Explorar o planeta
    } else if (storyStage === 'explore') {
      storyStage = 'alienStructure'; // Encontrar a estrutura alienígena
    } else if (storyStage === 'alienStructure') {
      storyStage = 'touchArtifact'; // Tocar o artefato
    } else if (storyStage === 'touchArtifact') {
      storyStage = 'backToShip'; // Aceitar a exploração do universo
    } else if (storyStage === 'backToShip') {
      storyStage = 'start'; // Reiniciar a história
    }
  } else if (choice === 'option2') {
    if (storyStage === 'start') {
      storyStage = 'backToShip'; // Retornar à nave
    } else if (storyStage === 'explore') {
      storyStage = 'backToShip'; // Voltar à nave
    } else if (storyStage === 'alienStructure') {
      storyStage = 'backToShip'; // Voltar à nave
    } else if (storyStage === 'touchArtifact') {
      storyStage = 'backToShip'; // Voltar à nave
    } else if (storyStage === 'backToShip') {
      storyStage = 'start'; // Fim da missão
    }
  }

  updateStory(); // Atualizar a história com base na escolha
}

// Event listeners para os botões
document.getElementById('btnOption1').addEventListener('click', () => handleChoice('option1'));
document.getElementById('btnOption2').addEventListener('click', () => handleChoice('option2'));

// Atualizar a história ao iniciar o jogo
updateStory();
