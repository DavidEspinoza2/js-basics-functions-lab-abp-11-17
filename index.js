// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
  return Math.abs(42 - pickupLocation);
}

function distanceFromHqInFeet(){
  return distanceFromHqInBlocks(1) * 264;
}
