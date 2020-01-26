const solution = maze => {
  traverse = function(column, row) {
    if (maze[column][row] == 2) {
      console.log("We solved the maze at (" + column + ", " + row + ")");
    } else if (maze[column][row] == 1) {
      console.log("At valid position (" + column + ", " + row + ")");
      maze[column][row] = 9;
      if (column < maze.length - 1) {
        traverse(column + 1, row);
      }
      if (row < maze[column].length - 1) {
        traverse(column, row + 1);
      }
      if (column > 0) {
        traverse(column - 1, row);
      }
      if (row > 0) {
        traverse(column, row - 1);
      }
    }
  };
};

console.log(
  solution([
    [1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1],
    [0, 1, 1, 1, 1],
    [0, 1, 1, 1, 1]
  ])
);

// https://leetcode.com/articles/the-maze-ii/
