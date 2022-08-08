const deepEqual = require('deep-equal');
const cloneDeep = require('lodash').cloneDeep;


// simplest and most expensive solution:
// assume a value in  the first cell with 2 possibilities
// attempt to solve the new puzzle or derive a contradiction
// if solution is reached return
// otherwise if a contradiction is reached you know it is the other of the 2 possibilities
// otherwise if progress reaches a standstill, repeat the whole process again
// continue until a solution is reached

// how is progress reached on a sub puzzle
// any time a new value is added, update possibilities in row, column and region
// as a result if at any point the new cell's possibilities reach 1 you can update

// what is a contradiction
// any time all possibilities are removed from a cell a contradiction is reached, assuming it doesn't already have a value
class Region {
    rowStart;
    rowEnd;
    colStart;
    colEnd;

    constructor(rowStart, rowEnd, colStart, colEnd) {
        this.rowStart = rowStart;
        this.rowEnd = rowEnd;
        this.colStart = colStart;
        this.colEnd = colEnd;
    }

}

class Board {
    unsolved;
    value;
    static boardSize = 9;
    static regions = [
        new Region(0, 3, 0, 3),
        new Region(3, 6, 0, 3),
        new Region(6, 9, 0, 3),
        new Region(0, 3, 3, 6),
        new Region(3, 6, 3, 6),
        new Region(6, 9, 3, 6),
        new Region(0, 3, 6, 9),
        new Region(3, 6, 6, 9),
        new Region(6, 9, 6, 9)
    ];

    constructor(board) {
        this.value = board;
        this.unsolved = this.countUnsolved(board);
    }

    countUnsolved() {
        let count = 0;
        for (let row = 0; row < Board.boardSize; row++) {
            count += this.value[row].filter((rowCell) => rowCell.value === undefined).length;
        }
        return count;
    }

    firstTwoValueCell() {
        for (let row = 0; row < Board.boardSize; row++) {
            for (let col = 0; col < Board.boardSize; col++) {
                if (this.value[row][col].possibleValues.length === 2) return this.value[row][col];
            }
        }
    }
}

class Cell {
    possibleValues;
    value;
    region;
    col;
    row;

    constructor(value, row, col) {
        this.row = row;
        this.col = col;
        if (value !== undefined) {
            this.value = value;
            this.possibleValues = [this.value];
        } else {
            this.possibleValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        }

        this.region = Board.regions.find((region) => (this.row >= region.rowStart && this.row < region.rowEnd) && (this.col >= region.colStart && this.col < region.colEnd));
    }
}

/**
 * @param {string[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
let solveSudoku = function (board) {
    // lets transform the board into something that is easier to work with
    transformBoard(board);

    let encapBoard = new Board(board);
    solveBoard(encapBoard);

    return transformBoardBack(encapBoard);
};

// will attempt to solve the board, if a contradiction is found it will return "contradiction";
// if board is completely solved it will return "solved"
// if progress reaches a halt it will attempt to set the first cell with 2 values, save the cell as the test cell and the value as the test val
let solveBoard = function (board) {
    let previousUnsolved;
    while (true) {
        previousUnsolved = board.unsolved;

        for (let row = 0; row < Board.boardSize; row++) {
            for (let col = 0; col < Board.boardSize; col++) {
                const cell = board.value[row][col];
                if (cell.value !== undefined) updatePossibleValues(cell, board);
            }
        }

        if (board.unsolved === 0) return "solved";
        // no progress made
        // only have to worry about this for complicated solve case
        if (board.unsolved === previousUnsolved) {
            return;
            // const originalBoard = cloneDeep(board.value);
            // const twoValueCell = board.firstTwoValueCell();
            // twoValueCell.value = twoValueCell.possibleValues[0];
        }
    }
}


let updatePossibleValues = function (cell, board) {
    updateRegion(cell, board);
    updateColumn(cell, board);
    updateRow(cell, board);
}

let updateRegion = function (cell, board) {
    for (let row = cell.region.rowStart; row < cell.region.rowEnd; row++) {
        for (let col = cell.region.colStart; col < cell.region.colEnd; col++) {
            const regionCell = board.value[row][col];
            regionCell.possibleValues = regionCell.possibleValues.filter((value) => value !== cell.value);
            if (regionCell.possibleValues.length === 1 && regionCell.value === undefined) {
                regionCell.value = regionCell.possibleValues[0];
                board.unsolved--;
                updatePossibleValues(regionCell, board);
            }
        }
    }
}
let updateRow = function (cell, board) {
    for (let col = 0; col < Board.boardSize; col++) {
        const rowCell = board.value[cell.row][col];
        rowCell.possibleValues = rowCell.possibleValues.filter((value) => value !== cell.value);
        if (rowCell.possibleValues.length === 1 && rowCell.value === undefined) {
            rowCell.value = rowCell.possibleValues[0];
            updatePossibleValues(rowCell, board);
            board.unsolved--;
        }
    }
}
let updateColumn = function (cell, board) {
    for (let row = 0; row < Board.boardSize; row++) {
        const colCell = board.value[row][cell.col];
        colCell.possibleValues = colCell.possibleValues.filter((value) => value !== cell.value);
        if (colCell.possibleValues.length === 1 && colCell.value === undefined) {
            colCell.value = colCell.possibleValues[0];
            updatePossibleValues(colCell, board);
            board.unsolved--;
        }
    }
}

let transformBoard = function (board) {
    for (let row = 0; row < Board.boardSize; row++) {
        for (let col = 0; col < Board.boardSize; col++) {
            const value = board[row][col] === "." ? undefined : board[row][col];
            board[row][col] = new Cell(value, row, col);
        }
    }
}

let transformBoardBack = function (board) {
    for (let row = 0; row < Board.boardSize; row++) {
        for (let col = 0; col < Board.boardSize; col++) {
            const cell = board.value[row][col];
            board.value[row][col] = cell.value;
        }
    }

    return board.value;
}


module.exports = solveSudoku;