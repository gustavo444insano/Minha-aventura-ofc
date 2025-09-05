let state = 'start'; // Define o estado inicial da aventura

function setup() {
  createCanvas(400, 400); // Cria uma tela de 400x400
  background(220);
  drawScene();
}

function drawScene() {
  if (state === 'start') {
    background(220);
    fill(0);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Você está em uma floresta sombria.", width / 2, height / 3);
    textSize(18);
    text("Escolha o caminho:", width / 2, height / 2);
  } else if (state === 'left') {
    background(100, 100, 255); // Azul para o caminho da esquerda
    fill(0);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Você encontrou um rio!", width / 2, height / 3);
    textSize(18);
    text("O que deseja fazer?", width / 2, height / 2);
  } else if (state === 'right') {
    background(100, 255, 100); // Verde para o caminho da direita
    fill(0);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Você encontrou uma cabana.", width / 2, height / 3);
    textSize(18);
    text("O que deseja fazer?", width / 2, height / 2);
  }
}

function choosePath(direction) {
  if (direction === 'left') {
    state = 'left';
    document.getElementById('description').innerText = "Você encontrou um rio! O que deseja fazer?";
  } else if (direction === 'right') {
    state = 'right';
    document.getElementById('description').innerText = "Você encontrou uma cabana! O que deseja fazer?";
  }
  drawScene();
}
