import { solveSudoku } from "../utils/sover";
import { grid } from "./App";

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
        </div>
    );
}
