// You have entered a Maze and need to find your way out of it. There are more than one possible exit from the Maze. Write a recursive function that will help you find a possible exit though the maze

// You can use the following mazes to test your program.

// let mySmallMaze = [
//     [' ', ' ', ' '],
//     [' ', '*', ' '],
//     [' ', ' ', 'e']
// ];

// let maze = [
//     [' ', ' ', ' ', '*', ' ', ' ', ' '],
//     ['*', '*', ' ', '*', ' ', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', '*', '*', '*', '*', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', 'e']
// ];
// The Maze is represented as a NM matrix (in the above case, a 3X3 or a 5X7 array). The starting point is the top left corner and the exit is indicated by e. For simplicity purpose, use the bottom right corner of the maze as the exit. You can't go outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them. These blocked passages are indicated by ``. Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.

// For the above maze, a possible exit can be RRDDLLDDRRRRRR

//depth first search and BFS

const result = [];
function dfs(grid, r = 0, c = 0, direction = '', path = '') {
  if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] === '*') {
    return false;
  }

  if (grid[r][c] === 'e') {
    result.push(path+direction)
    return false;
  }
  grid[r][c] = '*';
  // top, right, bottom, left 
  return dfs(grid, r - 1, c, 'U', path + direction) ||
         dfs(grid, r, c + 1, 'R', path + direction) ||
         dfs(grid, r + 1, c, 'D', path + direction) ||
         dfs(grid, r, c - 1, 'L', path + direction)
}

dfs(maze)

result;