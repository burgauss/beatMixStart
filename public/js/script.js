// Drum Arrays
let kicks = new Array(16).fill(false);
let snares = new Array(16).fill(false);
let hiHats = new Array(16).fill(false);
let rideCymbals = new Array(16).fill(false);

const drumTypes = ['kicks', 'snares', 'hiHats', 'rideCymbals'];

function toggleDrum(s_drumType, index){
    if (drumTypes.includes(s_drumType) && index >=0 && index < 16){
        getArrayVar(s_drumType)[index] = !getArrayVar(s_drumType)[index];
    } else{
        return null;
    }
}

//function takes a string and it returns the variable associated with it
function getArrayVar(s_drumType)
{
    switch (s_drumType) {
        case 'kicks':
            return kicks;
        case 'snares':
            return snares;
        case 'hiHats':
            return hiHats;
        case 'rideCymbals':
            return rideCymbals;
        default:
            return null;
    }
}

function clear(s_drumType){
    if (drumTypes.includes(s_drumType))
    {
        getArrayVar(s_drumType).fill(false)
    } else{
        console.log("invalid drum type name");
    }
}

function invert(s_drumType){
    if (drumTypes.includes(s_drumType))
    {
        for (let i= 0; i < getArrayVar(s_drumType).length; i++)
        {
            getArrayVar(s_drumType)[i]= !getArrayVar(s_drumType)[i];
        }
    } else{
        console.log("not possible to invert");
    }
}
//a function called getNeighborPads that accepts an x, y, 
// and a size parameter. In the application, these values refer 
// to the synth grid: x and y zero-indexed from the bottom left of the grid, and 
// size is a number representing the number of rows/columns in the square. 
// getNeighborPads should return an array of neighbors, each in the form [xValue, yValue]. 
//[[2,4],[3,3],[1,3][2,1]] are neighbors of a center of a 5x5 square
// Neighbors are the squares immediately to the left, right, above, and below a grid position.

const sumArrayNeighbors = [[0,1],[1,0],[0,-1],[-1,0]];
function getNeighborPads(x, y, size){
    let neighborsArray = [];
    size -= 1;
    if (x >= 0 && x <= size && y >= 0 && y <= size)
    {
        sumArrayNeighbors.forEach(sumPair => {
            if (((x + sumPair[0] <= size) && (x + sumPair[0] >= 0)) && ((y + sumPair[1] <= size) && (y + sumPair[1] >= 0))) {
                neighborsArray.push([x + sumPair[0], y + sumPair[1]]);
            }
        }
        )
    }
    return neighborsArray;

}