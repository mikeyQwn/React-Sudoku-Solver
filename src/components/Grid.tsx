import { useEffect, useState } from "react";

const GRID_SIZE = 9;

type grid = number[][];

const getGrid = (): grid => {
    return new Array(GRID_SIZE)
        .fill([])
        .map(() => new Array(GRID_SIZE).fill("0"));
};

const mutateGrid = (grid: grid, value: number, i: number, j: number): grid => {
    return grid.map((row, rowIndex) =>
        rowIndex === j
            ? row.map((tile, tileIndex) => (tileIndex === i ? value : tile))
            : row
    );
};

export function Grid() {
    const [grid, setGrid] = useState(getGrid());

    useEffect(() => {
        setGrid((grid: grid) => {
            return mutateGrid(grid, 5, 2, 5);
        });
    }, []);

    return (
        <>
            {grid.map((row, rowIndex) => (
                <div key={rowIndex}>{row}</div>
            ))}
        </>
    );
}
