import { solveSudoku } from "../utils/sover";
import { grid } from "./App";

const solveRandomCell = (
    setGrid: React.Dispatch<React.SetStateAction<grid>>
) => {
    setGrid((grid) => {
        const solvedGrid = solveSudoku(grid);
        const emptyCellsIndexes: number[][] = [];
        grid.forEach((row, rowIndex) => {
            row.forEach((cell, cellIndex) => {
                if (cell !== 0) return;
                emptyCellsIndexes.push([rowIndex, cellIndex]);
            });
        });
        const randomIndex =
            emptyCellsIndexes[
                Math.floor(Math.random() * emptyCellsIndexes.length)
            ];
        if (!randomIndex) return grid;
        return grid.map((row, rowIndex) => {
            if (rowIndex !== randomIndex[0]) return row;
            return row.map((cell, cellIndex) => {
                if (cellIndex !== randomIndex[1]) return cell;
                return solvedGrid[rowIndex][cellIndex];
            });
        });
    });
};

interface Props {
    setGrid: React.Dispatch<React.SetStateAction<grid>>;
}

export function Controls({ setGrid }: Props) {
    return (
        <div className="controls-container">
            <button
                onClick={() => {
                    setGrid((grid: grid): grid => [...solveSudoku(grid)]);
                }}
            >
                Solve Sudoku
            </button>
            <button
                onClick={() => {
                    setGrid((grid: grid): grid => {
                        return grid.map((row) =>
                            row.map(() => {
                                return 0;
                            })
                        );
                    });
                }}
            >
                Clear Sudoku
            </button>
            <button
                onClick={() => {
                    solveRandomCell(setGrid);
                }}
            >
                Solve one cell
            </button>
        </div>
    );
}
