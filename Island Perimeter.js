/*
[[0,1,0,0],
    [1,1,1,0],
    [0,1,0,0],
    [1,1,0,0]]

Answer: 16
Explanation: The perimeter is the 16 yellow stripes in the image below:*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
/*理念:有几个1 就假设先全部独立的然后再 假如有相邻的就去掉 两个 方向有有两个  下方和右侧*/
var islandPerimeter = function(grid) {
    var  islands = 0, neighbours = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var  j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                islands++; // count islands
                if (i < grid.length - 1 && grid[i + 1][j] == 1) neighbours++; // count down neighbours
                if (j < grid[i].length - 1 && grid[i][j + 1] == 1) neighbours++; // count right neighbours
            }
        }
    }

    return islands * 4 - neighbours * 2;
};
var grid=[[0,1,0,0],
    [1,1,1,0],
    [0,1,0,1],
    [1,1,0,0]]
console.log(islandPerimeter(grid))