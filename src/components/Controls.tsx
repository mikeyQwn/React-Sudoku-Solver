import { solveSudoku } from "../utils/sover";
import { grid } from "./App";

interface Props {
    setGrid: (grid: grid) => void;
}

export function Controls({ setGrid }: Props) {
    return (
        <button
            onClick={() => {
                setGrid((grid: grid) => [...solveSudoku(grid)]);
            }}
        ></button>
    );
}
