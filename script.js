function gameBoard() {
  const rows = 3;
  const cols = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
      board[i][j] = ' ';
    }
  }

console.log(board);
const getBoard = () => board;

const makeMove = (row, col, player) => {
  if (board[row][col] === ' ') {
    board[row][col] = player;
    return true;
  } else {
    console.log("cell already occpied");
    return false;
  }
};

const checkWin = () => {
  for (let i = 0; i < rows; i++) {
    if (board[i][0] !== ' ' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      return true;
    }
  }

  for (let j = 0; j < cols; j++) {
    if (board[0][j] !== ' ' && board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
      return true;
    }
  }

  if (board[0][0] !== ' ' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return true;
  }
  if (board[0][2] !== ' ' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return true;
  }

  return false;
}

return {
    getBoard,
    makeMove,
    checkWin
  };
}



