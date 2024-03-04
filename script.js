let choice;
let userPoints = 0;
let botPoints = 0;
let bot;
let arr = ["Stone", "Paper", "Scissor"];
let maxPoints = 5;

document.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
      setMaximumPoints();
  }
});

const setMaximumPoints = function () {
  const maxPointsInput = document.getElementById("max-points");
  maxPoints = parseInt(maxPointsInput.value);
  alert("Maximum points set to: " + maxPoints);
  maxPointsInput.value = "";
  document.getElementById("game-container").classList.remove("hidden");
};

const generateComputerChoice = function () {
  bot = arr[Math.floor(Math.random() * 3)];
  scoreUpdate();
};

const scoreUpdate = function () {
  if (choice == bot) {
    userPoints++;
    botPoints++;
  } else if (choice == "Stone" && bot == "Scissor") {
    userPoints++;
  } else if (choice == "Stone" && bot == "Paper") {
    botPoints++;
  } else if (choice == "Scissor" && bot == "Paper") {
    userPoints++;
  } else if (choice == "Scissor" && bot == "Stone") {
    botPoints++;
  } else if (choice == "Paper" && bot == "Stone") {
    userPoints++;
  } else if (choice == "Paper" && bot == "Scissor") {
    botPoints++;
  }
  document.getElementById("points1").textContent = userPoints;
  document.getElementById("points3").textContent = botPoints;

  if (userPoints == maxPoints || botPoints == maxPoints) {
    if (userPoints > botPoints) {
      alert("You win!");
    } else if (userPoints < botPoints) {
      alert("Computer wins!");
    } else {
      alert("It's a draw!");
    }
    userPoints = 0;
    botPoints = 0;
    document.getElementById("points1").textContent = userPoints;
    document.getElementById("points3").textContent = botPoints;
    document.getElementById("game-container").classList.add("hidden");
  }
};

const gamestart = function () {
  const userstone = document.getElementById("stone");
  const userpaper = document.getElementById("paper");
  const userscissor = document.getElementById("scissor");
  if (userstone) {
    userstone.addEventListener("click", function () {
      choice = document.getElementById("stone").textContent;
    });
  }
  if (userpaper) {
    userpaper.addEventListener("click", function () {
      choice = document.getElementById("paper").textContent;
    });
  }
  if (userscissor) {
    userscissor.addEventListener("click", function () {
      choice = document.getElementById("scissor").textContent;
    });
  }
  generateComputerChoice();
};

gamestart();
