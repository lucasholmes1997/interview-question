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

    function StartGridEasy(size){
        if(size > 2){
            var rawGrid = [];
            for(x = 0; x < size; x++){
                rawGrid[x] = [];
                for(y = 0; y < size; y++){
                    rawGrid[x][y] = Math.floor(Math.random() * 10);
                }
            }
        }
        PrintGrid(rawGrid);
        console.log(" ");
        ConvertGridEasy(rawGrid);
        return rawGrid;
    }

    function ConvertGridEasy(rawGrid){
            var convertedGrid = rawGrid;
            for(x = 0; x < rawGrid.length; x++){
                for(y = 0; y < rawGrid.length; y++){
                    if(x != 0 && x != rawGrid.length - 1  && y != 0 && y != rawGrid.length - 1)
                    {
                        let top = rawGrid[x-1][y];
                        let left = rawGrid[x][y-1];
                        let bottom = rawGrid[x+1][y];
                        let right = rawGrid[x][y+ 1];

                        if (top > rawGrid[x][y] && top > left && top > bottom && top > right){
                            convertedGrid[x][y] = "^";
                        }
                        else if (left > rawGrid[x][y] && left > right && left > bottom){
                            convertedGrid[x][y] = "<";
                        } else if (right > rawGrid[x][y] && right > bottom){
                            convertedGrid[x][y] = ">";
                        } else if (bottom > rawGrid[x][y]){
                            convertedGrid[x][y] = "V";
                        } else{
                            convertedGrid[x][y] = "o";
                        }
                    }
                }
            }
        console.log("Converted Grid:");
        PrintGrid(convertedGrid);
        console.log(" ");
        return rawGrid;
    }

    function PrintGrid(grid){
        var line = "";
        for(x = 0; x < grid.length; x++){
            for(y = 0; y < grid[x].length; y++){
                line = line + " " + grid[x][y];
            }
            console.log(line);
            line = "";
        }
    }

    var grid = StartGridEasy(5);
    PrintGrid(grid);