/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let islandTileQueue = [];
    let visitedTiles = {};
    let islandPerimeter = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                islandTileQueue.push([i, j]);
                visitedTiles[[i, j].join('.')] = true;
                break;
            }
        }
        if (islandTileQueue.length > 0) {
            break;
        }
    }

    while (islandTileQueue.length > 0) {
        let currentTile = islandTileQueue.shift();
        let adjacentTiles = [[currentTile[0] + 1, currentTile[1]], [currentTile[0] - 1, currentTile[1]],
                             [currentTile[0], currentTile[1] + 1], [currentTile[0], currentTile[1] - 1]];
        let edgeCount = 4;
        adjacentTiles.forEach(tile => {
          if (tile[0] > -1 && tile[0] < grid.length) {
            let tileVal = grid[tile[0]][tile[1]];
            if (tileVal === 1) {
                edgeCount--;
                if (!visitedTiles[tile.join('.')]) {
                    islandTileQueue.push(tile);
                    visitedTiles[tile.join('.')] = true;
                }
            }
          }
        });
        islandPerimeter += edgeCount;
    }

    return islandPerimeter;
};
