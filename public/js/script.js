// Drum Arrays
let kicks = new Array(16).fill(false);
let snares = new Array(16).fill(false);
let hiHats = new Array(16).fill(false);
let rideCymbals = new Array(16).fill(false);

const drumTypes = ['kicks', 'snares', 'hiHats', 'rideCymbals'];

function toggleDrum(s_drumType, index){
    if (drumTypes.includes(s_drumType)){
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