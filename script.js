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
      return board[i][0];
    }
  }

  for (let j = 0; j < cols; j++) {
    if (board[0][j] !== ' ' && board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
      return board[0][j];
    }
  }

  if (board[0][0] !== ' ' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return board[0][0];
  }
  if (board[0][2] !== ' ' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return board[0][2];
  }

  return null;
}

return {
    getBoard,
    makeMove,
    checkWin
  };
}

const game = gameBoard();
let currentPlayer = 'X';
let gameOver = false;

const printBoard = () => {
  game.getBoard().forEach(row => console.log(row.join(' | ')));
  console.log('');
};

const makeTurn = (row, col) => {
  if (gameOver) {
    console.log("Game is over. Start a new one.");
    return;
  }

  const moveSuccess = game.makeMove(row, col, currentPlayer);
  if (!moveSuccess) {
    console.log("Invalid move. Try again.");
    return;
  }

  printBoard();

  const winner = game.checkWin();
  if (winner) {
    console.log(`${winner} wins! 🎉`);
    gameOver = true;
    return;
  }

  // Check for draw
  const isDraw = game.getBoard().flat().every(cell => cell !== ' ');
  if (isDraw) {
    console.log("It's a draw! 🤝");
    gameOver = true;
    return;
  }

  // Swap turn
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  console.log(`${currentPlayer}'s turn`);
};




