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

const isValid = (grid: grid, row: number, col: number, value: number) => {
    for (let i = 0; i < 9; i++) {
        if (grid[row][i] === value) return false;
        if (grid[i][col] === value) return false;
        if (
            grid[3 * Math.floor(row / 3) + Math.floor(i / 3)][
                3 * Math.floor(col / 3) + (i % 3)
            ] === value
        )
            return false;
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
                return emptyGrid;
            }
        }
    }
    return emptyGrid;
};
