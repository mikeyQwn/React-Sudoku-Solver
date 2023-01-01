import { grid } from "../components/App";
const emptyGrid: grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const isGridCorrect = (grid: grid) => {
    return grid.every((row, rowIndex) => {
        return row.every((value, valueIndex) => {
            if (value === 0) return true;
            console.log(
                isValid(grid, rowIndex, valueIndex, value),
                value,
                rowIndex,
                valueIndex
            );
            return isValid(grid, rowIndex, valueIndex, value);
        });
    });
};

const isValid = (grid: grid, row: number, col: number, value: number) => {
    for (let i = 0; i < 9; i++) {
        if (grid[row][i] === value && i !== col) return false;
        if (grid[i][col] === value && i !== row) return false;
        const rowInBox = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const colInBox = 3 * Math.floor(col / 3) + (i % 3);
        if (rowInBox === row || colInBox === col) continue;
        if (grid[rowInBox][colInBox] === value) return false;
    }
    return true;
};

const isGridSolved = (grid: grid) => {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (grid[row][col] === 0) return false;
        }
    }
    return true;
};

export const solveSudoku = (grid: grid): grid => {
    const gridCopy = grid.map((row) => [...row]);
    if (!isGridCorrect(gridCopy)) return gridCopy;
    if (isGridSolved(gridCopy)) return gridCopy;

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (gridCopy[row][col] === 0) {
                for (let value = 1; value <= 9; value++) {
                    if (isValid(gridCopy, row, col, value)) {
                        gridCopy[row][col] = value;
                        const result = solveSudoku(gridCopy);
                        if (isGridSolved(result)) return result;
                        gridCopy[row][col] = 0;
                    }
                }
                console.log("returning empty grid");
                return emptyGrid;
            }
        }
    }
    return emptyGrid;
};
