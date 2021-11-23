const plateauSchema = {};

const players = {
  1: {
    id: "player1",
    currentPos: 1,
  },
  2: {
    id: "player2",
    currentPos: 1,
  },
  3: {
    id: "player3",
    currentPos: 1,
  },
  4: {
    id: "player4",
    currentPos: 1,
  },
};

const events = {
  1: "Départ : recevez 200€!",
  2: "Boulevard de Belleville",
  3: "Caisse de communauté",
  4: "Rue Lecourbe",
  5: "Impôts sur le revenu: payez 100€!",
  6: "Gare Montparnasse",
  7: "Rue de Vaugirard",
}

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function placePlayer(plr, pos) {
  plr = players[plr];

  plr.currentPos = pos;

  let playerID = document.getElementById(plr.id);
  let posID = document.getElementById("case" + plr.currentPos);

  posID.scrollIntoView();

  playerID.style.gridRow = getComputedStyle(posID).gridRow;
  playerID.style.gridColumn = getComputedStyle(posID).gridColumn;

  console.log(plr.id + " placed at case " + plr.currentPos);
  executeEvent(plr);
}

function movePlayer(plr) {
  let currPos = players[plr].currentPos;
  let roll = getRandom(1, 6);

  if (currPos + roll === 41) {
    placePlayer(plr, 1);
  } else if (currPos + roll === 42) {
    placePlayer(plr, 2);
  } else if (currPos + roll === 43) {
    placePlayer(plr, 3);
  } else if (currPos + roll === 44) {
    placePlayer(plr, 4);
  } else if (currPos + roll === 45) {
    placePlayer(plr, 5);
  } else if (currPos + roll === 46) {
    placePlayer(plr, 6);
  } else {
    placePlayer(plr, (currPos += roll));
  }
}

function executeEvent(plr) {
  console.log("EVENT :", events[plr.currentPos]);
}

placePlayer(1, 1);
placePlayer(2, 1);
placePlayer(3, 1);
placePlayer(4, 1);

movePlayer1.addEventListener("click", () => {
  movePlayer(1);
});
movePlayer2.addEventListener("click", () => {
  movePlayer(2);
});
movePlayer3.addEventListener("click", () => {
  movePlayer(3);
});
movePlayer4.addEventListener("click", () => {
  movePlayer(4);
});
