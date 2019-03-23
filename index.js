

function produceDrivingRange(blockRange) {
  return function (block2, block1) {

    const blocks = Math.abs(parseInt(block2) - parseInt(block1));
    const range = Math.abs(parseInt(blockRange) - parseInt(blocks));

      if (blocks < blockRange) {
        return `within range by ${range}`;}
      else {
        return `${range} blocks out of range`;
      }
  };
}

function produceTipCalculator(multiplier) {
  return function (fare){
      return multiplier * fare;
  };
}

function createDriver(){
let driverId = 0;

return class {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    }

  }
}
