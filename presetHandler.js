// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (request, index, newPresetArray) => {
  let responseArray = [];
  if (request !== 'GET' && request !== 'PUT') {
    responseArray[0] = 400;
  }
  else if (request === 'GET') {
    if (!presets[index]) {
      responseArray[0] = 404;
    }
    else {
      responseArray[0] = 200;
      responseArray[1] = presets[index];
    }
  }
  else {
    if (!presets[index]) {
      responseArray[0] = 404;
    }
    else {
      responseArray[0] = 200;
      presets[index] = newPresetArray;
      responseArray[1] = presets[index];
    }
  }
  return responseArray;
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
