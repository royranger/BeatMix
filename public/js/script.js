// Drum Arrays
let kicks = [];
let snares = [];
let hiHats = [];
let rideCymbals = [];

for (let i = 0; i < 16; i++) {
  kicks.push(false);
  snares.push(false);
  hiHats.push(false);
  rideCymbals.push(false);
}

const toggleDrum = (drum, index) => {
  if (!drum || index < 0 || index > 15) {
    return;
  }
  else if (drum !== 'kicks' && drum !== 'snares' && drum !== 'hiHats' && drum !== 'rideCymbals') {
    return;
  }
  else {
    let code = `${drum}[${index}] = !${drum}[${index}]`;
    //kicks[0] = !kicks[0];
    //(eval(drum[index])) = !(eval(drum)[index]);
    //console.log(code);
    eval(code);
  }
};

const clear = (drum) => {
  if (!drum) {
    return;
  }
  else if (drum !== 'kicks' && drum !== 'snares' && drum !== 'hiHats' && drum !== 'rideCymbals') {
    return;
  }
  else {
    eval(drum).forEach((beat, index, drum) => {
      drum[index] = false;
    });
  }

};

const invert = (drum) => {
  if (!drum) {
    return;
  }
  else if (drum !== 'kicks' && drum !== 'snares' && drum !== 'hiHats' && drum !== 'rideCymbals') {
    return;
  }
  else {
    eval(drum).forEach((beat, index, drum) => {
      drum[index] = !drum[index];
    });
  }
};

/*Testing
console.log('First we print out the kicks array');
console.log(kicks);
console.log('Now we toggle the first element to be true');
toggleDrum('kicks', 0);
console.log(kicks);
*/

// synthesizer
const getNeighborPads = (x, y, size) => {
  let neighborCoords = [];
  if (x >= size || y >= size || x < 0 || y < 0) {
    return neighborCoords;
  }
  // deal with corner cases
  else if (x === 0 && y === 0) {
    neighborCoords = [[1, 0], [0, 1]];
  }
  else if (x === 0 && y === (size - 1)) {
    neighborCoords = [[1, size-1], [0, size-2]];
  }
  else if (x === (size - 1) && y === (size - 1)) {
    neighborCoords = [[size-2, size-1], [size-1, size-2]];
  }
  else if (x === (size - 1) && y === 0) {
    neighborCoords = [[size-2, 0], [size-1, 1]];
  }
  // deal with left column
  else if (x === 0) {
    neighborCoords = [[0, y+1], [x+1, y], [0, y-1]];
  }
  // deal with right column
  else if (x === (size - 1)) {
    neighborCoords = [[x, y+1], [x-1, y], [x, y-1]];
  }
  // deal with top row
  else if (y === (size - 1)) {
    neighborCoords = [[x-1, y], [x+1, y], [x, y-1]];
  }
  // deal with bottom row
  else if (y === 0) {
    neighborCoords = [[x-1, y], [x+1, y], [x, y+1]];
  }
  // default
  else {
    neighborCoords = [[x, y+1], [x, y-1], [x-1, y], [x+1, y]];
  }
  return neighborCoords;
};
