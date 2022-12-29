import { useState } from "react";
import { Controls } from "./Controls";
import { Grid } from "./Grid";

export const GRID_SIZE = 9;

export type grid = number[][];
const getGrid = (): grid => {
    return new Array(GRID_SIZE)
        .fill([])
        .map(() => new Array(GRID_SIZE).fill(0));
};
export function App() {
    const [grid, setGrid] = useState<grid>(getGrid());

    return (
        <main className="app-container">
            <div></div>
            <Grid grid={grid} setGrid={setGrid} />
            <Controls setGrid={setGrid} />
        </main>
    );
}
