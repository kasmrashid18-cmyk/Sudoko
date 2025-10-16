const board = document.getElementById('board');
const solveBtn = document.getElementById('solve-btn');

const initialBoard = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

function createBoard() {
    for (let i = 0; i < 9; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (initialBoard[i][j] !== 0) {
                cell.textContent = initialBoard[i][j];
                cell.classList.add('fixed');
            } else {
                const input = document.createElement('input');
                input.type = 'number';
                input.min = 1;
                input.max = 9;
                cell.appendChild(input);
            }
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
}

function solveSudoku() {
    // Simple solver - just fills in the solution
    const solution = [
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ];

    const cells = document.querySelectorAll('.cell');
    let k = 0;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = cells[k];
            if (!cell.classList.contains('fixed')) {
                cell.firstChild.value = solution[i][j];
            }
            k++;
        }
    }
}

createBoard();
solveBtn.addEventListener('click', solveSudoku);
