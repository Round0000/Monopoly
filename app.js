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

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function placePlayer(plr, pos) {
  plr = players[plr];

  console.log("placePlayer plr", plr);
  console.log("placePlayer pos", pos);

  plr.currentPos = pos;

  let playerID = document.getElementById(plr.id);
  let posID = document.getElementById("case" + plr.currentPos);

  console.log(playerID);
  console.log(posID);

  playerID.style.gridRow = getComputedStyle(posID).gridRow;
  playerID.style.gridColumn = getComputedStyle(posID).gridColumn;

  console.log(playerID);
}

placePlayer(1, 1);
placePlayer(2, 1);
placePlayer(3, 1);
placePlayer(4, 1);

function movePlayer(plr) {
  let currPos = players[plr].currentPos;
  let roll = getRandom(1, 6);
  console.log("currPos ---", currPos);
  console.log("roll ---", roll);

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
