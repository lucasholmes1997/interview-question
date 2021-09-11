/// <summary>
/// Testee is to take in an X by X grid of positive integers assuming X > 2.
/// Testee is to output a new X by X grid that points to the highest value
///     neighbour with the characters '>', '<', 'v', '^' or 'o' if none
///     are higher. In the case where the program is on an edge (X = 0, Y = 0,
///     X = Length - 1, Y = Length - 1) no character or any character is valid.
///     In case of ties, any direction between the highest values are valid.
/// Testee will receive the following extra notes:
///     1) Explanation of the difference between [,] and [][]
///     2) Grids drawn in real life ascend from bottom left to top right. Grids
///         in loops typically go from top left to bottom right.
/// Testee should take the following process:
///     1) Describe a process that solves the challenge
///     2) Write psuedo code for the solution
///     3) Write code for the solution in Visual Studio Code (assuming memory, CPU, etc are infinite)
///     4) Revise code to be better than O(n*n) (note n already is length*length)
///     
/// Example:
///     5 4 3 2
///     9 2 7 1
///     1 8 7 1
///     2 7 6 3
///     
///     5 4 3 2
///     9 < o 1
///     1 o < 1
///     2 7 6 3
/// </summary>

function StartGridEasy(size) {
    if (size > 2) {
        var rawGrid = [];
        for (x = 0; x < size; x++) {
            rawGrid[x] = [];
            for (y = 0; y < size; y++) {
                rawGrid[x][y] = Math.floor(Math.random() * 10);
            }
        }
    }
    // Conversion Grid CALL
    ConvertGridEasy(rawGrid);
    return rawGrid;
}


// Author: Lucas Holmes
// Conversion Grid:
// Main objectives of conversion grid:
// - Take in the raw grid, and create a conversion grid using its values. This allows me to keep record of grid values, while also converting grid to change numbers to symbols ( < , > , ^ , V , O )
// - Use the ConvertedGrid and convert points on grid to point to the value that is greater then the value of the index on the grid. if none are higher the value of index, then use the symbol "O"
// - print the Converted grid followed by the RAW Grid to compare grids.

function ConvertGridEasy(rawGrid) {

    // Creating conversionGrid
    var convertedGrid = [];
    for (x = 0; x < rawGrid.length; x++) {
        convertedGrid[x] = [];
        for (y = 0; y < rawGrid.length; y++) {
            //inserting values from rawGRID into convertedGrid to be converted later
            convertedGrid[x][y] = rawGrid[x][y];
        }
    }

    // Beginning of conversionGrid conversion
    // this loops through the values of the grid to check which is the highest value to then convert the value into one of the given symbols.
    for (x = 0; x < rawGrid.length; x++) {
        for (y = 0; y < rawGrid.length; y++) {
            if (x != 0 && x != convertedGrid.length - 1 && y != 0 && y != convertedGrid.length - 1) {
                // Here I declare the different variables that I use to compare the differents points of the grid to the value of the index I am on.
                // funnily enough I found out that the x and y axis is flipped for some reason. This may have been a mistake on my part. But it was one of the only roadblocks
                // I had when solving this question. for an example of what I am talking about.
                // for some reason,  x-1 from my knowledge should be left of the index that I am currently looping through. When in reality x - 1 is actually above the value of index.
                // strange outcome but I simply fixed it by flipping the axis equation and it turned out to work properly. But that's the fun of programming :)
                let top = rawGrid[x - 1][y];
                let left = rawGrid[x][y - 1];
                let bottom = rawGrid[x + 1][y];
                let right = rawGrid[x][y + 1];

                // This is where I take my declared variables and compare them to one another and the value of the index I am on.
                // Comparing value above the point on the grid
                if (top > rawGrid[x][y] && top > left && top > bottom && top > right) {
                    convertedGrid[x][y] = "^";
                }
                // Comparing value left of the point on the grid
                else if (left > rawGrid[x][y] && left > right && left > bottom) {
                    convertedGrid[x][y] = "<";
                }
                // Comparing value right of the point on the grid
                else if (right > rawGrid[x][y] && right > bottom) {
                    convertedGrid[x][y] = ">";
                }
                // Comparing value below the point on the grid
                else if (bottom > rawGrid[x][y]) {
                    convertedGrid[x][y] = "V";
                }
                // if none of the values were greater than the value of the index, it means the value of the index was the highest.
                else {
                    convertedGrid[x][y] = "o";
                }
            }
        }
    }
    // from here on out I just utilize the PrintGrid Function and print both the Converted Grid and the Raw Grid
    console.log("Converted Grid:");
    PrintGrid(convertedGrid);
    console.log(" ");
    return rawGrid;
}

function PrintGrid(grid) {
    var line = "";
    for (x = 0; x < grid.length; x++) {
        for (y = 0; y < grid[x].length; y++) {
            line = line + " " + grid[x][y];
        }
        console.log(line);
        line = "";
    }
}

var grid = StartGridEasy(5);
console.log("Raw Grid:")
PrintGrid(grid);
