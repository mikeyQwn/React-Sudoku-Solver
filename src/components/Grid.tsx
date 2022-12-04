import { SyntheticEvent, useEffect, useState } from "react";

const GRID_SIZE = 9;

type grid = number[][];

const getGrid = (): grid => {
    return new Array(GRID_SIZE)
        .fill([])
        .map(() => new Array(GRID_SIZE).fill(0));
};

const mutateGrid = (grid: grid, value: number, i: number, j: number): grid => {
    return grid.map((row, rowIndex) =>
        rowIndex === j
            ? row.map((tile, tileIndex) => (tileIndex === i ? value : tile))
            : row
    );
};

const isValidInput = (input: any) => {
    return !Number.isNaN(parseInt(input));
};

const styleGridCell = (i: number, j: number) => {
    const borderStyle = "3px solid black";
    return {
        borderTop: j % 3 === 0 ? borderStyle : "",
        borderLeft: i % 3 === 0 ? borderStyle : "",
        borderRight: i === 8 ? borderStyle : "",
        borderBottom: j === 8 ? borderStyle : ""
    };
};

export function Grid() {
    const [grid, setGrid] = useState(getGrid());
    function getHandleChangeFunction(i: number, j: number) {
        return function (e: SyntheticEvent) {
            const data = (e.nativeEvent as InputEvent).data || "0";
            if (!isValidInput(data)) return;

            setGrid((grid: grid) => mutateGrid(grid, parseInt(data), i, j));
        };
    }

    return (
        <div className="grid-container">
            {grid.map((row, rowIndex) => {
                return row.map((element, elementIndex) => {
                    return (
                        <textarea
                            style={styleGridCell(elementIndex, rowIndex)}
                            onInput={getHandleChangeFunction(
                                elementIndex,
                                rowIndex
                            )}
                            key={rowIndex * GRID_SIZE + elementIndex}
                            className="grid-element"
                            value={element === 0 ? "" : element}
                        ></textarea>
                    );
                });
            })}
        </div>
    );
}
