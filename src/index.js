import "/src/styles.css";

//factory for creating players
const Player = (sign) => {
  const getSign = () => {
    return sign;
  };
  //method available using getSign()
  return { getSign };
};

const gameBoard = (() => {
  //this is establishing the methods of the gameboard to be invoked or requested by the display controller
  const board = new Array(9).fill("");

  const getField = (index) => {
    if (index < 0 || index >= board.length) {
      return;
    }
    return board[index];
  };

  const setField = (index, sign) => {
    if (index < 0 || index >= board.length) {
      return;
    }
    board[index] = sign;
  };

  const reset = () => {
    board.forEach((elem, index, array) => {
      array[index] = "";
    });
  };

  return { getField, setField, reset };
})();

const displayContoller = (() => {
  //this is the interface and display
  const fields = document.querySelectorAll(".field");
  const result = document.getElementById("result");
  let resetButton; //select reset button elem

  fields.forEach((field) =>
    field.addEventListener("click", function (e) {
      if (e.target.textContent !== "" || gameContoller.checkGameOver()) return;
      gameContoller.playRound(e.target.dataset.index);
      updateGameboard();
    })
  );

  function updateGameboard() {
    fields.forEach((field) => {
      field.textContent = gameBoard.getField(field.dataset.index);
    });
  }

  const showWinner = (sign) => {
    result.textContent = `${sign}'s win`;
  };

  const resetGameboard = () => {
    //todo
  };

  return { showWinner };
})();

const gameContoller = (() => {
  const player1 = Player("0");
  const player2 = Player("X");
  let round = 1;
  let isGameOver = false;

  const checkGameOver = () => {
    return isGameOver;
  };

  const playRound = (index) => {
    let sign = round % 2 === 1 ? "X" : "0";
    gameBoard.setField(index, sign);
    round++;
    checkWin(sign);
  };

  const checkWin = (sign) => {
    //get all field indexes that have player sign
    let indexesOwned = [];

    for (let i = 0; i < 9; i++) {
      if (gameBoard.getField(i) === sign) {
        indexesOwned.push(i);
      }
    }
    //loop through each winning combo
    for (let i = 0; i < winningCombos.length; i++) {
      let result = indexesOwned.filter((index) =>
        winningCombos[i].includes(index)
      );
      if (result.length === 3) {
        console.log("win");
        isGameOver = true;
        displayContoller.showWinner(sign);
        return true;
      }
    }
    if (round > 9) {
      console.log("draw");
      isGameOver = true;
    }
  };

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return { playRound, checkGameOver };
})();
