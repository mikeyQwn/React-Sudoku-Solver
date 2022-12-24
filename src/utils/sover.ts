type grid = number[][];

const emptyGrid = [
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
    if (isGridSolved(grid)) return grid;

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (grid[row][col] === 0) {
                for (let value = 1; value <= 9; value++) {
                    if (isValid(grid, row, col, value)) {
                        grid[row][col] = value;
                        const result = solveSudoku(grid);
                        if (isGridSolved(result)) return result;
                        grid[row][col] = 0;
                    }
                }
                return emptyGrid;
            }
        }
    }
    return emptyGrid;
};
