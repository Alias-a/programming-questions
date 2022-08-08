/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function(n) {
    let distinctSolutions = [];

    const board = new Board(n);
    let testQueen = board.value[0][0];
    let queenRowValidCells = board[testQueen.row].filter((cell) => cell.valid);
    let lastValidCellInQueenRow = queenRowValidCells[queenRowValidCells.length-1];
    testQueen.setValue("Q");
    // testQueen is not in the last valid column of its row
    while (testQu) {

    }
    for (let col = 0; col < n; col++) {

        // TODO the problem now is that we only find the first solution with the queen in the given position
        // in the first row, but we need to find ALL solutions
        // need to try all combinations

        // could have a tried boolean on cell to mark if it's been attempted for queen
        // but then when a queen at a higher level moves they would have to be retried
        // would have to clear tried at row level and below for a queen whenever it is removed

        // also have to solve the problem of when to finish, have to somehow track if all possibilities
        // have been tried
        // would previous queen < size work?
            // we will pop


        // when a solution is found, find the first queen that is not in the last valid column of its row
        // continue to try from there
        // when there are no more queens that are not in the last valid column of their row we are done

        let row = 1;
        let previousQueenCol = -1;
        while (row < n && board.queenCells.length !== 0) {
            const validCells = board.value[row].filter((cell) => cell.valid && cell.col > previousQueenCol);
            if (validCells.length !== 0) {
                const rowQueen = validCells[0];
                rowQueen.setValue("Q");

                const allQueensPlaced = board.queenCells.length === n;
                if (allQueensPlaced) {
                    distinctSolutions.push(board.toArray());
                    board.resetToFirstValidQueen();
                }

                row++;
            } else {
                const previousQueen = board.queenCells.pop();
                previousQueen.setValue("");
                previousQueenCol = previousQueen.col;
                row = previousQueen.row;
            }
        }


        board.clearQueenCells();
    }

    return distinctSolutions;
};

class Board {
    size;
    value;
    queenCells;

    constructor(size) {
        this.size = size;
        this.value = [];
        this.queenCells = [];

        this.#setupBoardValue();
        this.#setupCellDiagonals();
    }

    #setupBoardValue = function () {
        for (let row=0; row < this.size; row++) {
            let rowValues = [];
            for (let col=0; col < this.size; col++) {
                rowValues.push(new Cell("", true, row, col, this));
            }
            this.value.push(rowValues);
        }
    }

    #setupCellDiagonals = function () {
        for (let row=0; row < this.size; row++) {
            for (let col=0; col < this.size; col++) {
                const cell = this.value[row][col];
                cell.diagonalCells = this.findDiagonalCells(cell);
            }
        }
    }

    update = function (queenCell) {
        // set all cells to valid
        for(let row=0; row < this.size; row++){
            for(let col=0; col < this.size; col++) {
                let cell = this.value[row][col];
                cell.valid = true;
            }
        }

        // update invalid based on current queens
        this.queenCells.forEach((queenCell) => {
            // update rows
            for(let col=0; col < this.size; col++) {
                this.value[queenCell.row][col].valid = false;
            }
            // update columns
            for(let row=0; row < this.size; row++) {
                this.value[row][queenCell.col].valid = false;
            }
            // update diagonals
            queenCell.diagonalCells.forEach((cell) => {
                cell.valid = false;
            });
        });
    }

    clearQueenCells = function () {
        while(this.queenCells.length > 0) {
            let queenCell = this.queenCells.pop();
            queenCell.setValue("");
        }
    }

    resetToFirstValidQueen = function () {

    }

    findDiagonalCells = function (cell) {
        let diagonalCells = [];

        // top right
        let row = cell.row - 1, col = cell.col + 1;
        while (row >= 0 && col < this.size) {
            diagonalCells.push(this.value[row][col]);
            row--;
            col++;
        }

        // top left
        row = cell.row - 1, col = cell.col - 1;
        while (row >= 0 && col >= 0) {
            diagonalCells.push(this.value[row][col]);
            row--;
            col--;
        }

        // bottom right
        row = cell.row + 1, col = cell.col + 1;
        while (row < this.size && col < this.size) {
            diagonalCells.push(this.value[row][col]);
            row++;
            col++;
        }

        // bottom left
        row = cell.row + 1, col = cell.col - 1;
        while (row < this.size && col >= 0) {
            diagonalCells.push(this.value[row][col]);
            row++;
            col--;
        }

        return diagonalCells;
    }

    toArray = function () {
        let arr = [];
        for (let row = 0; row < this.size; row++) {

            let rowStr = "";
            for (let col = 0; col < this.size; col++) {
                const cell = this.value[row][col];
                cell.value === "Q" ? rowStr = rowStr.concat(cell.value) : rowStr = rowStr.concat(".");
            }

            arr.push(rowStr);
        }

        return arr;
    }
}

class Cell {
    value;
    valid;
    row;
    col;
    board;
    diagonalCells;

    constructor(value, valid, row, col, board) {
        this.value = value;
        this.valid = valid;
        this.row = row;
        this.col = col;
        this.board = board;
        this.diagonalCells = [];
    }

    setValue = function (value) {
        if (value === "Q") {
            this.board.queenCells.push(this);
        }
        this.value = value;
        this.board.update(this);
    }
}

module.exports = solveNQueens;