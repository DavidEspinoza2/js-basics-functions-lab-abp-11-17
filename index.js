// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
  return Math.abs(42 - pickupLocation);
}

function calculateVertical(beg, end){
  return (end - beg) * 264;
}

console.log(distanceFromHqInBlocks(40))
