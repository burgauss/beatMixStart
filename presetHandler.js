// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (request, index =0, newPressetArray = null) => {
    if (index >= 0 && index < 16)
    {
    
        if (request === 'GET') {
            return [200, presets[index]];
        } else if (request === 'PUT') {
            presets[index] = newPressetArray;
            return [200, presets[index]];
        } else {
            // Bad Request
            return [400];
        }
    } else
    {
        // invalid index
        return [404];
    }

};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
