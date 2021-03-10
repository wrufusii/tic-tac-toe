import "/src/styles.css";

const player = (sign) => {
  this.sign = sign;

  const getSign = () => {
    return sign;
  };

  return { getSign };
};

const gameBoard = (() => {
  //this is establishing the methods of the gameboard
  //to be invoked or requested by the display controller
  const board = new Array(9);

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
      array[index] = null;
    });
  };

  return { getField, setField, reset };
})();

const displayContoller = (() => {
  //todo
  const fields = document.querySelectorAll(".field");
  let resetButton; //select reset button elem

  fields.forEach((field) =>
    field.addEventListener("click", function (e) {
      //
    })
  );

  const updateGameboard = () => {};

  const resetGameboard = () => {
    //todo
  };
})();

const gameContoller = (() => {
  //todo
})();
