import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer';
import { shape1, shape2, shape3 } from './Shape.js';
import { gql, useQuery, useLazyQuery, useMutation } from '@apollo/client';
import { ButtonW, ButtonPlace } from './App.style';
const UPDATE_USER_GRID = gql`
  mutation updateUserGrid($id: ID!, $grid: String) {
    updateUserGrid(id: $id, grid: $grid) {
      id
      grid
    }
  }
`;
const GET_GRID_BY_ID = gql`
  query getGridByID($id: ID!) {
    getGridByID(id: $id) {
      grid
    }
  }
`;
const Columns = 30;
const numRows = 30;
const rep = 5000;
const dens = 0.7;

const neighborDir = [
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
  [1, -1],
  [-1, 1],
  [0, 1],
  [0, -1],
];
var this_id = window.sessionStorage.id;
let QueryGrid = [];
const generateBlankGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(Columns), () => 0));
  }

  return rows;
};

const App = () => {
  const [getGridByID] = useLazyQuery(GET_GRID_BY_ID, {
    onCompleted: (response) => {
      console.log('fdd');

      console.log(response.getGridByID[0].grid);
      const x = response.getGridByID[0].grid.split('],');
      for (let i = 0; i < x.length; i++) {
        if (i == 0) {
          x[i] = x[i].substr(2);
        } else {
          x[i] = x[i].substr(1);
        }
        QueryGrid.push(x[i].split(','));
      }
      for (let j = 0; j < QueryGrid.length; j++) {
        for (let k = 0; k < QueryGrid[j].length; k++) {
          QueryGrid[j][k] = parseInt(QueryGrid[j][k]);
        }
      }

      setGrid(QueryGrid);
    },
  });

  const [updateUserGrid] = useMutation(UPDATE_USER_GRID, {
    onCompleted: (response) => {},
  });

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

    setGrid((g) => {
      return produce(g, (newGrid) => {
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
      <ButtonPlace>
        <ButtonW
          onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;

              for (var i = 0; i < rep; i++) {
                (function (i) {
                  setTimeout(function () {
                    runProgram();
                  }, 100 * i);
                })(i);
              }
            }
          }}
        >
          {running ? 'Stop' : 'Start'}
        </ButtonW>
        <ButtonW
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
        </ButtonW>
        <ButtonW
          onClick={() => {
            setGrid(generateBlankGrid());
          }}
        >
          Clear
        </ButtonW>
      </ButtonPlace>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${Columns}, 20px)`,
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              onClick={() => {
                const newGrid = produce(grid, (newGrid) => {
                  newGrid[i][k] = grid[i][k] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[i][k] ? 'green' : undefined,
                border: 'solid 1px black',
              }}
            />
          ))
        )}
      </div>
      <ButtonPlace>
        <ButtonW
          onClick={() => {
            getGridByID({
              variables: {
                id: this_id,
              },
            });

            if (QueryGrid.length == 0) {
            } else {
              setGrid(QueryGrid);
            }
          }}
        >
          LoadGrid
        </ButtonW>
        <ButtonW
          onClick={() => {
            updateUserGrid({
              variables: {
                id: this_id,
                grid: JSON.stringify(grid),
              },
            });
            if (QueryGrid.length != 0) {
              QueryGrid = grid;
            }
          }}
        >
          SaveGrid
        </ButtonW>

        <ButtonW
          onClick={() => {
            setGrid(shape1);
          }}
        >
          Blinker
        </ButtonW>
        <ButtonW
          onClick={() => {
            setGrid(shape2);
          }}
        >
          Glider
        </ButtonW>
        <ButtonW
          onClick={() => {
            setGrid(shape3);
          }}
        >
          LWS Dakota
        </ButtonW>
      </ButtonPlace>
    </>
  );
};

export default App;
