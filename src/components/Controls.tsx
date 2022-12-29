import { solveSudoku } from "../utils/sover";
import { grid } from "./App";

interface Props {
    setGrid: React.Dispatch<React.SetStateAction<grid>>;
}

export function Controls({ setGrid }: Props) {
    return (
        <button
            onClick={() => {
                setGrid((grid: grid): grid => [...solveSudoku(grid)]);
            }}
        ></button>
    );
}
