import React, { useState, useCallback, useRef } from "react";
import produce from "immer";


const Columns = 30;
const numRows = 30;
const rep=5000;
const dens=0.7;


const neighborDir = [
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
  [1, -1],
  [-1, 1],
  [0, 1],
  [0, -1]
];

const generateBlankGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(Columns), () => 0));
  }

  return rows;
};

const App: React.FC = () => {
  const [grid, setGrid] = useState(() => {
    return generateBlankGrid();
  });
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;
  
  const runProgram = useCallback(() => {

    if (!runningRef.current) {
        return;   
    }

    setGrid(g => {
      return produce(g, newGrid => {    
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < Columns; k++) {
            let neighbors = 0;
            neighborDir.forEach(([x, y]) => {
              const i2 = i + x;
              const k2 = k + y;
              if (i2 >= 0 && i2 < numRows && k2 >= 0 && k2 < Columns) {
                neighbors += g[i2][k2];
              }
            });
            if (neighbors < 2 || neighbors > 3) {
              newGrid[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              newGrid[i][k] = 1;
            }
          }
        }      
      });    
    });
  }, []);
  return (
    <>
      <button
        onClick={() => {
          setRunning(!running);
          if (!running) {
            runningRef.current = true; 
            
            for (var i = 0; i < rep; i++) {
              (function(i) {
                setTimeout(function() { runProgram(); }, 100 * i);
              })(i);
            }
          }
        }}
      >
        {running ? "Stop" : "Start"}
      </button>
      <button
        onClick={() => {
          const rows = [];
          for (let i = 0; i < numRows; i++) {
            rows.push(
              Array.from(Array(Columns), () => (Math.random() > dens ? 1 : 0))
            );
          }

          setGrid(rows);
        }}
      >
        Seed
      </button>
      <button
        onClick={() => {
          setGrid(generateBlankGrid());
        }}
      >
        Clear
      </button>
      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${Columns}, 20px)`
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div             
              onClick={() => {
                const newGrid = produce(grid, newGrid => {
                  newGrid[i][k] = grid[i][k] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[i][k] ? "green" : undefined,
                border: "solid 1px black"
              }}
            />
          ))
        )}
      </div>
    </>
  );
};

export default App;
